import pdfplumber
import pytesseract
from PIL import Image
import io
import re
import os
import tkinter as tk
from tkinter import filedialog
import logging

# Suppress pdfplumber warnings about invalid float values
logging.getLogger("pdfplumber").setLevel(logging.ERROR)

def extract_text_from_pdf(pdf_path):
    """Extracts text directly from a PDF file."""
    text = ""
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() or ""
    except Exception as e:
        print(f"Error extracting text from {pdf_path}: {e}")
    return text

def extract_images_from_pdf(pdf_path, output_dir="temp_images"):
    """Extracts images from a PDF and saves them to a directory."""
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    image_paths = []
    try:
        with pdfplumber.open(pdf_path) as pdf:
            for page_num, page in enumerate(pdf.pages):
                # Extract images from the page
                if hasattr(page, 'images'):
                    for img_num, img in enumerate(page.images):
                        # Get image stream and bounding box
                        x0, top, x1, bottom = img['x0'], img['top'], img['x1'], img['bottom']
                        # Crop the page to the image's bounding box
                        image = page.within_bbox((x0, top, x1, bottom)).to_image()
                        # Save image to file
                        img_path = f"{output_dir}/page_{page_num}_img_{img_num}.png"
                        image.save(img_path)
                        image_paths.append(img_path)
    except Exception as e:
        print(f"Error extracting images from {pdf_path}: {e}")
    return image_paths

def extract_text_from_image(image_path):
    """Performs OCR on an image to extract text."""
    try:
        img = Image.open(image_path)
        text = pytesseract.image_to_string(img)
        return text
    except Exception as e:
        print(f"Error processing image {image_path}: {e}")
        return ""

def count_words(text):
    """Counts words in the given text, ignoring non-word characters."""
    words = re.findall(r'\b\w+\b', text)
    return len(words)

def process_pdf_for_word_count(pdf_path):
    """Processes a PDF to get total word count, including text in images."""
    # Extract text directly from PDF
    pdf_text = extract_text_from_pdf(pdf_path)
    pdf_word_count = count_words(pdf_text)
    
    # Extract images and perform OCR
    image_paths = extract_images_from_pdf(pdf_path)
    image_text = ""
    for img_path in image_paths:
        image_text += extract_text_from_image(img_path) + " "
    
    # Count words in image text
    image_word_count = count_words(image_text)
    
    # Total word count for this PDF
    return pdf_word_count + image_word_count

def select_folder_and_process():
    """Opens a folder dialog, processes all PDFs, and returns folderName:wordCount."""
    # Initialize Tkinter
    root = tk.Tk()
    root.withdraw()  # Hide the main window

    # Open folder dialog
    folder_path = filedialog.askdirectory(title="Select Folder Containing PDFs")
    
    if not folder_path:
        print("No folder selected.")
        return None

    # Get folder name
    folder_name = os.path.basename(folder_path)
    
    # Find all PDF files in the folder
    pdf_files = [f for f in os.listdir(folder_path) if f.lower().endswith('.pdf')]
    
    if not pdf_files:
        print(f"No PDF files found in {folder_path}.")
        return {folder_name: 0}

    # Process each PDF and sum word counts
    total_word_count = 0
    for pdf_file in pdf_files:
        pdf_path = os.path.join(folder_path, pdf_file)
        print(f"Processing {pdf_file}...")
        word_count = process_pdf_for_word_count(pdf_path)
        total_word_count += word_count
        print(f"Word count for {pdf_file}: {word_count}")

    # Clean up temporary images directory
    if os.path.exists("temp_images"):
        for img in os.listdir("temp_images"):
            os.remove(os.path.join("temp_images", img))
        os.rmdir("temp_images")

    # Return result as dictionary
    result = {folder_name: total_word_count}
    print(f"\nResult: {result}")
    return result

# Run the folder selector and process PDFs
if __name__ == "__main__":
    select_folder_and_process()