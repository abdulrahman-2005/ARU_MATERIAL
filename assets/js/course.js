pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

let pdfDoc = null;
let pageNum = 1;
let pageRendering = false;
let pageNumPending = null;
let scale = 1.5;

const fileMessageTypeIcon = {
    "quiz-available": "fa-solid fa-brain",
    "midterm-included": "fa-solid fa-bomb"
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = urlParams.get('id');
    
    if (courseId && DATA.courses[courseId]) {
        document.title = `${DATA.courses[courseId].name} · FCI Material Y2T2`;
        renderCourse(courseId);
        initializeHeader();
        initializeFooter();
    } else {
        window.location.href = '../courses/';
    }
});

function renderCourse(courseId) {
    const course = DATA.courses[courseId];
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
            <div class="materials-section">
                <h3><i class="fas fa-hands-helping"></i> Contributions</h3>
                <div class="materials-grid" id="contributions-grid"></div>
            </div>
        </div>
    `;

    const lecturesGrid = container.querySelector('#lectures-grid');
    const sectionsGrid = container.querySelector('#sections-grid');
    const contributionsGrid = container.querySelector('#contributions-grid');

    if (!course.files || course.files.length === 0) {
        container.innerHTML = '<div class="empty-state">No materials available for this course.</div>';
        return;
    }

    // Calculate total course word count
    const totalWordCount = course.files.reduce((sum, file) => sum + (file.wordCount || 0), 0);

    course.files.forEach(file => {
        if (typeof file === 'string') {
            // Handle old format files...
        } else {
            // New format with file object
            const card = document.createElement('div');
            card.className = 'material-card';
            
            let grid;
            let icon;
            
            switch(file.type) {
                case 'lecture':
                    grid = lecturesGrid;
                    icon = 'fa-book-open';
                    break;
                case 'section':
                    grid = sectionsGrid;
                    icon = 'fa-users';
                    break;
                case 'contribution':
                    grid = contributionsGrid;
                    icon = 'fa-hands-helping';
                    break;
                default:
                    grid = lecturesGrid;
                    icon = 'fa-file';
            }

            // Calculate word count percentage
            const percentage = totalWordCount > 0 
                ? Math.round((file.wordCount / totalWordCount) * 100) 
                : 0;

            const wordCountHtml = `
                <div class="word-count-badge">
                    <i class="fas fa-chart-pie"></i>
                    <span>${percentage}% of course content</span>
                </div>
            `;

            const contributorsHtml = file.contributors ? `
                <div class="material-contributors">
                    ${file.contributors.map(id => {
                        const contributor = DATA.contributors[id];
                        return `<span class="contributor-tag">
                            <i class="fas fa-user-edit"></i> ${contributor.name}
                        </span>`;
                    }).join('')}
                </div>
            ` : '';

            card.innerHTML = `
                <div class="material-icon">
                    <i class="fas ${icon}"></i>
                </div>
                <div class="material-content">
                    <h4>${file.title}</h4>
                    ${wordCountHtml}
                    ${contributorsHtml}
                    ${file.messages ? file.messages.map(msg => `
                        <div class="message">
                            <i class="${fileMessageTypeIcon[msg.type]}"></i>
                            ${msg.text}
                        </div>
                    `).join('') : ''}
                    <div class="material-actions">
                        <button onclick="openPDF('../files/${course.code}_${file.src}', true)" class="btn-external">
                            <i class="fas fa-external-link-alt"></i> Open PDF
                        </button>
                        ${file.quizzes && file.quizzes.length > 0 ? `
                            <button onclick="quizSystem.startQuiz('${file.quizzes[0]}')" 
                                class="btn-quiz ${quizSystem.hasCompletedQuiz(file.quizzes[0]) ? 'completed' : ''}">
                                <i class="fas fa-${quizSystem.hasCompletedQuiz(file.quizzes[0]) ? 'check-circle' : 'question-circle'}"></i>
                                ${quizSystem.hasCompletedQuiz(file.quizzes[0]) ? 'Retake Quiz' : 'Take Quiz'}
                            </button>
                        ` : ''}
                    </div>
                </div>
            `;
            
            grid.appendChild(card);
        }
    });

    // Add empty state messages for each section if needed
    if (!lecturesGrid.hasChildNodes()) {
        lecturesGrid.innerHTML = '<div class="empty-state">No lectures available.</div>';
    }
    if (!sectionsGrid.hasChildNodes()) {
        sectionsGrid.innerHTML = '<div class="empty-state">No sections available.</div>';
    }
    if (!contributionsGrid.hasChildNodes()) {
        contributionsGrid.innerHTML = '<div class="empty-state">No contributions available.</div>';
    }
}

function renderSchedule(courseId) {
    const container = document.getElementById('schedule');
    container.innerHTML = '<table class="schedule-table"></table>';
    const table = container.querySelector('.schedule-table');

    // Filter schedule entries for this course
    const courseSchedule = Object.values(DATA.schedule)
        .filter(schedule => schedule.course_id === courseId)
        .map(schedule => ({
            ...schedule,
            day: DATA.days[schedule.day_id],
            time: DATA.time_slots[schedule.time_slot_id],
            instructor: DATA.instructors[schedule.instructor_id],
            session: DATA.session_types[schedule.session_type_id]
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
        const instructor = DATA.instructors[instructorId];
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
    return `../files/${course.code}_${fileName}`;
}

async function openPDF(src, newTab = false) {
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
                <div class="pdf-actions">
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
            </div>
            <iframe src="${pdfUrl}#toolbar=0" width="100%" height="90vh" style="border:none;"></iframe>
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