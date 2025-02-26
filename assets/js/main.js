let courseData = null;
let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;

// Add this near the top of your file
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

// Wait for DOM to be loaded
document.addEventListener('DOMContentLoaded', () => {
    // DATA is already available from meta.js
    courseData = DATA;
    initializeMainContent();
});

function initializeMainContent() {
    // Set header information
    document.getElementById('institutionName').textContent = courseData.metadata.institution_name;
    document.getElementById('facultyName').textContent = courseData.metadata.faculty_name;
    document.getElementById('level').textContent = `Level ${courseData.metadata.level}`;
    document.getElementById('term').textContent = `Term ${courseData.metadata.term}`;

    // Rest of the main content initialization...
    // (Keep the course grid population and other main content code)
} 