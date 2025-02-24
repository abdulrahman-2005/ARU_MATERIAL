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
    const developerInfo = courseData.developer;
    
    // Set landing page information
    document.getElementById('landing-institution').textContent = courseData.metadata.institution_name;
    document.getElementById('landing-faculty').textContent = courseData.metadata.faculty_name;
    document.getElementById('landing-level').textContent = `Level ${courseData.metadata.level}`;
    document.getElementById('landing-term').textContent = `Term ${courseData.metadata.term}`;

    // Add developer info to landing page
    const landingContent = document.querySelector('.landing-content');
    landingContent.insertAdjacentHTML('beforeend', `
        <div class="developer-badge">
            <i class="fas fa-code"></i>
            Developed by <a href="${developerInfo.website}" target="_blank">${developerInfo.name}</a>
        </div>
    `);

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

function renderOverview(course) {
    const container = document.getElementById('overview');
    container.innerHTML = `
        <div class="course-info">
            <h3>Course Information</h3>
            <p><strong>Credit Hours:</strong> ${course.credit_hours}</p>
            <p><strong>Session Types:</strong> 
                ${course.has_lecture ? 'Lectures' : ''}
                ${course.has_lecture && course.has_section ? ' & ' : ''}
                ${course.has_section ? 'Sections' : ''}
            </p>
        </div>
    `;
}

function renderMaterials(course) {
    const container = document.getElementById('materials');
    container.innerHTML = `
        <div class="materials-sections">
            <div class="materials-section">
                <h3><i class="fas fa-chalkboard-teacher"></i> Lectures</h3>
                <div class="materials-grid" id="lectures-grid"></div>
            </div>
            <div class="materials-section">
                <h3><i class="fas fa-users"></i> Sections</h3>
                <div class="materials-grid" id="sections-grid"></div>
            </div>
        </div>
    `;

    const lecturesGrid = container.querySelector('#lectures-grid');
    const sectionsGrid = container.querySelector('#sections-grid');

    if (!course.files || course.files.length === 0) {
        container.innerHTML = '<div class="empty-state">No materials available for this course.</div>';
        return;
    }

    // Sort and group files
    const files = course.files.reduce((acc, file) => {
        const fileName = typeof file === 'string' ? file : file.src;
        const isLecture = fileName.toLowerCase().includes('lecture');
        const grid = isLecture ? lecturesGrid : sectionsGrid;
        
        const card = document.createElement('div');
        card.className = 'material-card';
        console.log(file)
        if (typeof file === 'string') {
            // Old format - just filename
            const fileTitle = file.replace('.pdf', '')
                .replace(/^Lecture/, 'Lecture ')
                .replace(/^Section/, 'Section ');
            const filePath = `files/${course.code}_${file}`;
            console.log(filePath)
            card.innerHTML = `
                <div class="material-icon">
                    <i class="fas ${isLecture ? 'fa-book-open' : 'fa-users'}"></i>
                </div>
                <div class="material-content">
                    <h4>${fileTitle}</h4>
                    <div class="material-actions">
                        <button onclick="openPDF('${filePath}', false)" class="btn-view">
                            <i class="fas fa-eye"></i> View
                        </button>
                        <button onclick="openPDF('${filePath}', true)" class="btn-external">
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                    </div>
                </div>
            `;
        } else {
            // New format - object with title, src, type, messages
            const filePath = `files/${course.code}_${file.src}`;
            console.log(filePath)
            let quizButton = '';
            
            // Add quiz button if quizzes are available
            if (file.quizzes && file.quizzes.length > 0) {
                const quizId = file.quizzes[0]; // Get first quiz
                const hasCompleted = quizSystem.hasCompletedQuiz(quizId);
                quizButton = `
                    <button onclick="quizSystem.startQuiz('${quizId}')" class="btn-quiz ${hasCompleted ? 'completed' : ''}">
                        <i class="fas fa-${hasCompleted ? 'check-circle' : 'question-circle'}"></i>
                        ${hasCompleted ? 'Retake Quiz' : 'Take Quiz'}
                    </button>
                `;
            }

            card.innerHTML = `
                <div class="material-icon">
                    <i class="fas ${file.type === 'lecture' ? 'fa-book-open' : 'fa-users'}"></i>
                </div>
                <div class="material-content">
                    <h4>${file.title}</h4>
                    ${file.messages ? file.messages.map(msg => `
                        <div class="message">
                            <i class="fas fa-exclamation-circle"></i>
                            ${msg.text}
                        </div>
                    `).join('') : ''}
                    <div class="material-actions">
                        <button onclick="openPDF('${filePath}', false)" class="btn-view">
                            <i class="fas fa-eye"></i> View
                        </button>
                        <button onclick="openPDF('${filePath}', true)" class="btn-external">
                            <i class="fas fa-external-link-alt"></i>
                        </button>
                        ${quizButton}
                    </div>
                </div>
            `;
        }
        grid.appendChild(card);
        return acc;
    }, { lectures: [], sections: [] });
}

function renderSchedule(courseId) {
    const container = document.getElementById('schedule');
    container.innerHTML = '<table class="schedule-table"></table>';
    const table = container.querySelector('.schedule-table');

    // Filter schedule entries for this course
    const courseSchedule = Object.values(courseData.schedule)
        .filter(schedule => schedule.course_id === courseId)
        .map(schedule => ({
            ...schedule,
            day: courseData.days[schedule.day_id],
            time: courseData.time_slots[schedule.time_slot_id],
            instructor: courseData.instructors[schedule.instructor_id],
            session: courseData.session_types[schedule.session_type_id]
        }));

    // Create schedule table
    table.innerHTML = `
        <thead>
            <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Session Type</th>
                <th>Instructor</th>
            </tr>
        </thead>
        <tbody>
            ${courseSchedule.map(schedule => `
                <tr>
                    <td>${schedule.day}</td>
                    <td>${schedule.time}</td>
                    <td>${schedule.session}</td>
                    <td>${schedule.instructor.title} ${schedule.instructor.name}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
}

function renderInstructors(course) {
    const container = document.getElementById('instructors');
    container.innerHTML = '<div class="instructors-grid"></div>';
    const grid = container.querySelector('.instructors-grid');

    course.instructors.forEach(instructorId => {
        const instructor = courseData.instructors[instructorId];
        const card = document.createElement('div');
        card.className = 'instructor-card';
        card.innerHTML = `
            <h3>${instructor.title} ${instructor.name}</h3>
            <p>Department: ${instructor.department_id}</p>
        `;
        grid.appendChild(card);
    });
}

function getFilePath(course, fileName) {
    return `files/${course.code}_${fileName}`;
}

async function openPDF(src, newTab) {
    if (newTab) {
        window.open(src, '_blank');
        return;
    }

    const modal = document.getElementById('pdfViewer');
    const fileName = src.split('/').pop().replace('.pdf', '');

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    try {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`Failed to fetch PDF: ${response.status}`);

        const blob = await response.blob();
        const pdfUrl = URL.createObjectURL(blob);

        modal.querySelector('.modal-content').innerHTML = `
            <div class="pdf-toolbar">
                <div class="pdf-title">
                    <i class="fas fa-file-pdf"></i> ${fileName}
                </div>
                <button onclick="window.open('${pdfUrl}', '_blank')" class="toolbar-button">
                    <i class="fas fa-external-link-alt"></i> Open in New Tab
                </button>
                <button onclick="downloadPDF('${src}')" class="toolbar-button">
                    <i class="fas fa-download"></i> Download
                </button>
                <button class="close toolbar-button">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <iframe src="${pdfUrl}#toolbar=0" width="100%" height="500px" style="border:none;"></iframe>
        `;

        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            URL.revokeObjectURL(pdfUrl);
        });

    } catch (error) {
        console.error("Error loading PDF:", error);
        alert("Failed to load PDF. Try opening it in a new tab.");
    }
}


// Add this helper function for downloading
function downloadPDF(src) {
    const link = document.createElement('a');
    link.href = src;
    link.download = src.split('/').pop();
    link.click();
}

// Add keyboard support for closing the modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('pdfViewer');
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    }
});

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