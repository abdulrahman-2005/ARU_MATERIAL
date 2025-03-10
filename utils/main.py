import os
import json
import PyPDF2
import re
from tkinter import filedialog, Tk

def countWordsInPDF(pdfPath):
    """Count words in a single PDF file."""
    try:
        with open(pdfPath, 'rb') as pdfFileObj:
            pdfReader = PyPDF2.PdfReader(pdfFileObj)
            text = ""
            for page in pdfReader.pages:
                text += page.extract_text()
            
            # Convert to lowercase and find all words
            text = text.lower()
            words = re.findall(r'\b\w+\b', text)
            return len(words)
    except Exception as e:
        print(f"Error processing {pdfPath}: {str(e)}")
        return 0

def selectFolder():
    """Open a dialog to select a folder."""
    root = Tk()
    root.withdraw()
    folder_path = filedialog.askdirectory(title="Select folder containing PDF files")
    return folder_path

def processFolder(folderPath):
    """Process all PDFs in a folder and return a dictionary of filename -> word count."""
    results = {}
    
    # Check if folder exists
    if not os.path.isdir(folderPath):
        return results
    
    # Find all PDF files in the folder
    for filename in os.listdir(folderPath):
        if filename.lower().endswith('.pdf'):
            file_path = os.path.join(folderPath, filename)
            word_count = countWordsInPDF(file_path)
            results[filename] = word_count
            print(f"Processed: {filename} - {word_count} words")
    
    return results

def main():
    # Select folder
    folder_path = selectFolder()
    
    if not folder_path:
        print("No folder selected.")
        return
    
    # Process all PDFs in the folder
    results = processFolder(folder_path)
    
    # Save results as JSON
    output_path = os.path.join(folder_path, "pdf_word_counts.json")
    with open(output_path, 'w') as json_file:
        json.dump(results, json_file, indent=4)
    
    print(f"Word counts saved to {output_path}")
    
    # Display results
    print("\nResults:")
    for filename, count in results.items():
        print(f"{filename}: {count} words")


import json

def add_word_counts_to_courses(courses, word_counts_data):
    """
    Add wordCount field to each file in the courses data structure
    
    Args:
        courses (dict): The courses data dictionary
        word_counts_data (dict): Dictionary mapping filename to word count
    
    Returns:
        dict: Updated courses data with word counts
    """
    # Parse the word counts data if it's a string
    if isinstance(word_counts_data, str):
        word_counts_data = json.loads(word_counts_data)
    
    # Iterate through each course and its files
    for course_id, course in courses.items():
        code = course["code"]
        for file in course.get("files", []):
            src = file["src"]
            # Create the key in the format "CODE_Src.pdf"
            word_count_key = f"{code}_{src}"
            
            # Add the word count if available, otherwise set to 0
            if word_count_key in word_counts_data:
                file["wordCount"] = word_counts_data[word_count_key]
            else:
                file["wordCount"] = 0
    
    return courses

# Example usage
word_counts = {
    "DB101_Lecture1.pdf": 1561,
    "DB101_Lecture2.pdf": 1398,
    "DS101_Lecture1.pdf": 2723,
    "DS101_Lecture2.pdf": 3037,
    "DS101_Lecture3.pdf": 1717,
    "DS101_Lecture4.pdf": 1940,
    "DS101_Section3.pdf": 147,
    "IS101_Lecture1.pdf": 1529,
    "IS101_Lecture2.pdf": 21,
    "IS101_Lecture3.pdf": 184,
    "IS101_Lecture4.pdf": 1688,
    "NET101_Lecture1.pdf": 1023,
    "NET101_Lecture2.pdf": 1743,
    "NET101_Lecture3.pdf": 1334,
    "NET101_Lecture4.pdf": 591,
    "SAD101_Lecture1.pdf": 1105,
    "SAD101_Lecture2.pdf": 883,
    "SAD101_Lecture3.pdf": 813,
    "SE101_ATMSoftware.pdf": 1332,
    "SE101_Lecture1.pdf": 3022,
    "SE101_Lecture2.pdf": 2882,
    "SE101_Lecture3.pdf": 3183,
    "SE101_Lecture4.pdf": 2161,
    "SE101_Section1.pdf": 1489,
    "SE101_Section2.pdf": 3998,
    "SE101_Section3.pdf": 1840,
    "SE101_Section4.pdf": 2613
}

courses = {
        "CRS_001": {
            "name": "Introduction to Database Systems",
            "code": "DB101",
            "credit_hours": 3,
            "instructors": ["INS_001", "INS_005"],
            "has_lecture": True,
            "has_section": True,
            "files": [
                {
                    "title": "Lecture 1: Introduction to DBMS",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_001"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 2: Database System Concepts and Architecture",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": []
                }
            ]
        },
        "CRS_002": {
            "name": "Introduction to Information System",
            "code": "IS101",
            "credit_hours": 3,
            "instructors": ["INS_001", "INS_010"],
            "has_lecture": True,
            "has_section": True,
            "files": [
                {
                    "title": "Lecture 1: Information Systems Overview",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_002"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 2: Introduction to Information Systems",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_015"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 3: System Development Methodologies",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": []
                },
                {
                    "title": "Lecture 4: SLDS steps",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": []
                }
            ]
        },
        "CRS_003": {
            "name": "Introduction to Software Engineering",
            "code": "SE101",
            "credit_hours": 3,
            "instructors": ["INS_002", "INS_004"],
            "has_lecture": True,
            "has_section": True,
            "files": [
                {
                    "title": "Lecture 1: Introduction to Software Engineering",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_005",
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 2: SOFTWARE PROCESSES",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_006",
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 3: Requirements Engineering",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_007",
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 4: System Modeling",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_008",
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Section 1: Lab 1 UML, SRS",
                    "src": "Section1.pdf",
                    "type": "section",
                    "quizzes": [
                        "QZ_009",
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Section 2: Lab 2",
                    "src": "Section2.pdf",
                    "type": "section",
                    "quizzes": [
                        "QZ_010",
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "ATM Software Summary",
                    "src": "ATMSoftware.pdf",
                    "type": "contribution",
                    "contributors": ["CON_001", "CON_002"],
                    "quizzes": [
                    ],
                    "messages": [

                    ]
                },
                {
                    "title": "Section 3: ENTITY RELATIONSHIP DIAGRAM",
                    "src": "Section3.pdf",
                    "type": "section",
                    "quizzes": [
                    ],
                    "messages": [
                    ]
                },
                {
                    "title": "Section 4: Use Case Diagram using Rational Rose or smart draw",
                    "src": "Section4.pdf",
                    "type": "section",
                    "quizzes": [
                    ],
                    "messages": [
                    ]
                }
            ]
        },
        "CRS_004": {
            "name": "Analysis and Design of Algorithm",
            "code": "ALG101",
            "credit_hours": 3,
            "instructors": ["INS_002", "INS_006"],
            "has_lecture": True,
            "has_section": True,
            "files": [
            ]
        },
        "CRS_005": {
            "name": "Data Structure",
            "code": "DS101",
            "credit_hours": 3,
            "instructors": ["INS_003", "INS_008"],
            "has_lecture": True,
            "has_section": True,
            "files": [
                {
                    "title": "Lecture 1: Introduction to Data Structures",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_011"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 2: Introduction (2)",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_012"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 3: Arrays and Linked Lists",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_013"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 4:  Circular and Doubly Linked Lists",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_014"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Section 3: Linked Lists",
                    "src": "Section3.pdf",
                    "type": "section",
                    "quizzes": [],
                    "messages": []
                }
            ]
        },
        "CRS_006": {
            "name": "Introduction to System Analysis and Design",
            "code": "SAD101",
            "credit_hours": 3,
            "instructors": ["INS_005", "INS_007"],
            "has_lecture": True,
            "has_section": True,
            "files": [
                {
                    "title": "Lecture 1: Introduction to System Analysis and Design",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_004"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 2",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": []
                },
                {
                    "title": "Lecture 3",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": []
                }
            ]
        },
        "CRS_007": {
            "name": "Introduction to Computer network",
            "code": "NET101",
            "credit_hours": 3,
            "instructors": ["INS_008", "INS_009"],
            "has_lecture": True,
            "has_section": True,
            "files": [
                {
                    "title": "Lecture 1: Network Fundamentals",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_003"],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 2: Network Models",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": []
                },
                {
                    "title": "Lecture 3: Physical Layer",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": []
                },
                {
                    "title": "Lecture 4: DataLink Layer",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": []
                }
            ]
        }
    }

if __name__ == "__main__":
    courses = add_word_counts_to_courses(courses, word_counts)
    with open("courses_with_word_counts.json", "w") as f:
        json.dump(courses, f, indent=4)
    print("Courses with word counts saved to 'courses_with_word_counts.json'")