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
    // Initialize landing page first
   

    // Initialize footer
    initializeFooter();

    // Set up enter button last
    document.getElementById('enter-btn').addEventListener('click', () => {
        document.getElementById('landing-page').style.display = 'none';
        const mainContent = document.getElementById('main-content');
        mainContent.classList.remove('hidden');
        // Use setTimeout to ensure the transition happens
        setTimeout(() => {
            mainContent.classList.add('visible');
            // Initialize main content after transition starts
            initializeMainContent();
        }, 50);
    });
});

function initializeMainContent() {
    // Set header information
    document.getElementById('institutionName').textContent = courseData.metadata.institution_name;
    document.getElementById('facultyName').textContent = courseData.metadata.faculty_name;
    document.getElementById('level').textContent = `Level ${courseData.metadata.level}`;
    document.getElementById('term').textContent = `Term ${courseData.metadata.term}`;

    // Populate course grid
    const courseGrid = document.getElementById('courseGrid');
    Object.entries(courseData.courses).forEach(([id, course]) => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <div class="course-card-header">
                <div class="course-card-icon">
                    <i class="fas fa-book"></i>
                </div>
                <div class="course-card-title">
                    <div class="course-card-code">${course.code}</div>
                    <div class="course-card-name">${course.name}</div>
                </div>
            </div>
            <div class="course-card-info">
                <span>
                    <i class="fas fa-clock"></i>
                    ${course.credit_hours} Credits
                </span>
                <span>
                    <i class="fas fa-users"></i>
                    ${course.instructors.length} Instructors
                </span>
            </div>
        `;
        
        card.addEventListener('click', () => {
            // Remove active class from all cards
            document.querySelectorAll('.course-card').forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
            renderCourse(id);
            
            // Scroll to course container
            const courseContainer = document.querySelector('.course-container');
            courseContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        courseGrid.appendChild(card);
    });

    // Add search functionality
    const searchInput = document.getElementById('courseSearch');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.course-card').forEach(card => {
            const courseName = card.querySelector('.course-card-name').textContent.toLowerCase();
            const courseCode = card.querySelector('.course-card-code').textContent.toLowerCase();
            const shouldShow = courseName.includes(searchTerm) || courseCode.includes(searchTerm);
            card.style.display = shouldShow ? 'block' : 'none';
        });
    });

    // Add empty state styling
    const style = document.createElement('style');
    style.textContent = `
        .empty-state {
            text-align: center;
            padding: 2rem;
            color: var(--text-secondary);
            background: var(--background-color);
            border-radius: 12px;
            font-size: 1.1rem;
        }
    `;
    document.head.appendChild(style);

    initializeScrollToTop();
}

function renderCourse(courseId) {
    const course = courseData.courses[courseId];
    const container = document.querySelector('.course-container');
    
    container.innerHTML = `
        <div class="course-header">
            <h2>${course.name}</h2>
            <div class="course-code">${course.code}</div>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-info-circle"></i> Course Information</h3>
            <div class="course-info">
                <p><strong>Credit Hours:</strong> ${course.credit_hours}</p>
                <p><strong>Session Types:</strong> 
                    ${course.has_lecture ? 'Lectures' : ''}
                    ${course.has_lecture && course.has_section ? ' & ' : ''}
                    ${course.has_section ? 'Sections' : ''}
                </p>
            </div>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-chalkboard-teacher"></i> Course Materials</h3>
            <div id="materials"></div>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-calendar-alt"></i> Schedule</h3>
            <div id="schedule"></div>
        </div>

        <div class="course-section">
            <h3><i class="fas fa-users"></i> Instructors</h3>
            <div id="instructors"></div>
        </div>
    `;

    renderMaterials(course);
    renderSchedule(courseId);
    renderInstructors(course);
}


function renderPage(num) {
    pageRendering = true;
    
    pdfDoc.getPage(num).then(function(page) {
        const canvas = document.getElementById('pdfCanvas');
        const ctx = canvas.getContext('2d');

        const viewport = page.getViewport({ scale: scale });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        page.render(renderContext).promise.then(function() {
            pageRendering = false;
            if (pageNumPending !== null) {
                renderPage(pageNumPending);
                pageNumPending = null;
            }
        });

        document.getElementById('pageNum').textContent = num;
    });
}

function queueRenderPage(num) {
    if (pageRendering) {
        pageNumPending = num;
    } else {
        renderPage(num);
    }
}

function initializePDFViewer() {
    document.getElementById('prevPage').addEventListener('click', () => {
        if (pageNum <= 1) return;
        pageNum--;
        queueRenderPage(pageNum);
    });

    document.getElementById('nextPage').addEventListener('click', () => {
        if (pageNum >= pdfDoc.numPages) return;
        pageNum++;
        queueRenderPage(pageNum);
    });

    document.getElementById('zoomIn').addEventListener('click', () => {
        scale *= 1.2;
        document.getElementById('zoomLevel').textContent = `${Math.round(scale * 100)}%`;
        renderPage(pageNum);
    });

    document.getElementById('zoomOut').addEventListener('click', () => {
        scale /= 1.2;
        document.getElementById('zoomLevel').textContent = `${Math.round(scale * 100)}%`;
        renderPage(pageNum);
    });

    document.getElementById('downloadPdf').addEventListener('click', () => {
        const currentPDFSrc = document.getElementById('pdfCanvas').dataset.src;
        if (currentPDFSrc) {
            const link = document.createElement('a');
            link.href = currentPDFSrc;
            link.download = currentPDFSrc.split('/').pop();
            link.click();
        }
    });

    // Reset viewer state when closing
    document.querySelector('.close').addEventListener('click', () => {
        const modal = document.getElementById('pdfViewer');
        modal.style.display = 'none';
        pageNum = 1;
        scale = 1.5;
        pdfDoc = null;
        document.getElementById('zoomLevel').textContent = '100%';
    });
}

function initializeFooter() {
    const developerInfo = courseData.developer;
    const developerLink = document.getElementById('developer-link');
    developerLink.href = `${developerInfo.website}`;
    developerLink.textContent = developerInfo.name;

    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = '';
    
    // Add social links with proper icons
    if (developerInfo.social.github) {
        socialLinks.innerHTML += `
            <a href="${developerInfo.social.github}" target="_blank" class="social-link" title="GitHub">
                <i class="fab fa-github"></i>
            </a>
        `;
    }
    if (developerInfo.social.linkedin) {
        socialLinks.innerHTML += `
            <a href="${developerInfo.social.linkedin}" target="_blank" class="social-link" title="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
        `;
    }
    if (developerInfo.social.globe) {
        socialLinks.innerHTML += `
            <a href="${developerInfo.social.globe}" target="_blank" class="social-link" title="Portfolio">
                <i class="fas fa-globe"></i>
            </a>
        `;
    }
}

function initializeScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Scroll to top when button is clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
} 

