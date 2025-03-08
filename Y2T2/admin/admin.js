document.addEventListener('DOMContentLoaded', () => {
    // Set version
    document.getElementById('version').textContent = DATA.metadata.version;

    // Display all data sections
    displayMetadata();
    displayDeveloper();
    displayInstructors();
    displayCourses();
    displaySchedule();
    displayQuizzes();

    // Add click handlers for expandable content
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('expandable-content')) {
            e.target.classList.toggle('expanded');
            e.target.nextElementSibling.classList.toggle('visible');
        }
    });
});

function formatValue(value) {
    if (typeof value === 'string') return `<span class="json-string">"${value}"</span>`;
    if (typeof value === 'number') return `<span class="json-number">${value}</span>`;
    if (typeof value === 'boolean') return `<span class="json-boolean">${value}</span>`;
    if (value === null) return `<span class="json-null">null</span>`;
    return value;
}

function calculateStats() {
    const stats = {
        totalLectures: 0,
        totalSections: 0,
        totalContributions: 0,
        totalQuizzes: Object.keys(QUIZ_DATA).length,
        totalQuestions: 0,
        totalMessages: 0,
        filesWithQuizzes: 0,
        coursesWithoutFiles: 0
    };

    // Calculate course-related stats
    Object.values(DATA.courses).forEach(course => {
        if (course.files.length === 0) {
            stats.coursesWithoutFiles++;
        }

        course.files.forEach(file => {
            if (file.type === 'lecture') stats.totalLectures++;
            if (file.type === 'section') stats.totalSections++;
            if (file.type === 'contribution') stats.totalContributions++;
            if (file.quizzes && file.quizzes.length > 0) stats.filesWithQuizzes++;
            if (file.messages) stats.totalMessages += file.messages.length;
        });
    });

    // Calculate total questions
    Object.values(QUIZ_DATA).forEach(quiz => {
        stats.totalQuestions += quiz.questions.length;
    });

    return stats;
}

function displayMetadata() {
    const container = document.getElementById('metadata-content');
    const stats = calculateStats();
    
    let html = `
        <div class="stats-grid">
            <div class="stat-card">
                <i class="fas fa-book-open"></i>
                <div class="stat-details">
                    <div class="stat-value">${stats.totalLectures}</div>
                    <div class="stat-label">Lectures</div>
                </div>
            </div>
            <div class="stat-card">
                <i class="fas fa-laptop-code"></i>
                <div class="stat-details">
                    <div class="stat-value">${stats.totalSections}</div>
                    <div class="stat-label">Sections</div>
                </div>
            </div>
            <div class="stat-card">
                <i class="fas fa-users"></i>
                <div class="stat-details">
                    <div class="stat-value">${stats.totalContributions}</div>
                    <div class="stat-label">Contributions</div>
                </div>
            </div>
            <div class="stat-card">
                <i class="fas fa-question-circle"></i>
                <div class="stat-details">
                    <div class="stat-value">${stats.totalQuizzes}</div>
                    <div class="stat-label">Quizzes</div>
                </div>
            </div>
            <div class="stat-card">
                <i class="fas fa-tasks"></i>
                <div class="stat-details">
                    <div class="stat-value">${stats.totalQuestions}</div>
                    <div class="stat-label">Questions</div>
                </div>
            </div>
            <div class="stat-card">
                <i class="fas fa-comment-alt"></i>
                <div class="stat-details">
                    <div class="stat-value">${stats.totalMessages}</div>
                    <div class="stat-label">Messages</div>
                </div>
            </div>
        </div>

        <div class="warnings-section">
            ${stats.coursesWithoutFiles > 0 ? `
                <div class="warning">
                    <i class="fas fa-exclamation-triangle"></i>
                    ${stats.coursesWithoutFiles} courses have no files
                </div>
            ` : ''}
        </div>

        <table class="data-table">
            <tr><th colspan="2">System Information</th></tr>
            ${Object.entries(DATA.metadata).map(([key, value]) => `
                <tr>
                    <td><span class="json-key">${key}</span></td>
                    <td>${formatValue(value)}</td>
                </tr>
            `).join('')}
        </table>
    `;
    
    container.innerHTML = html;
}

function displayDeveloper() {
    const container = document.getElementById('developer-content');
    let html = '<table class="data-table">';
    
    Object.entries(DATA.developer).forEach(([key, value]) => {
        if (key === 'social') {
            html += `
                <tr>
                    <td><span class="json-key">${key}</span></td>
                    <td class="expandable-content">Social Links</td>
                </tr>
                <tr>
                    <td colspan="2">
                        <div class="nested-content">
                            ${Object.entries(value).map(([platform, link]) => `
                                ${platform}: ${formatValue(link)}
                            `).join('<br>')}
                        </div>
                    </td>
                </tr>
            `;
        } else {
            html += `
                <tr>
                    <td><span class="json-key">${key}</span></td>
                    <td>${formatValue(value)}</td>
                </tr>
            `;
        }
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function displayInstructors() {
    const container = document.getElementById('instructors-content');
    let html = '<table class="data-table">';
    
    html += `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Title</th>
            <th>Department</th>
        </tr>
    `;
    
    Object.entries(DATA.instructors).forEach(([id, instructor]) => {
        html += `
            <tr>
                <td>${id}</td>
                <td>${instructor.name}</td>
                <td>${instructor.title}</td>
                <td>${instructor.department_id}</td>
            </tr>
        `;
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function displayCourses() {
    const container = document.getElementById('courses-content');
    let html = '<table class="data-table">';
    
    html += `
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Code</th>
            <th>Credits</th>
            <th>Instructors</th>
            <th>Files</th>
        </tr>
    `;
    
    Object.entries(DATA.courses).forEach(([id, course]) => {
        const instructorNames = course.instructors
            .map(insId => DATA.instructors[insId].name)
            .join(', ');
            
        html += `
            <tr>
                <td>${id}</td>
                <td>${course.name}</td>
                <td>${course.code}</td>
                <td>${course.credit_hours}</td>
                <td>${instructorNames}</td>
                <td>
                    <button class="expandable-content" onclick="toggleNestedContent(this)">
                        ${course.files.length} files
                        ${course.files.some(f => f.messages?.length > 0) ? 
                            '<i class="fas fa-comment-alt text-warning"></i>' : ''}
                    </button>
                </td>
            </tr>
            <tr>
                <td colspan="6">
                    <div class="nested-content">
                        ${course.files.map(file => `
                            <div class="file-item">
                                <div class="file-header">
                                    <i class="fas ${getFileIcon(file.type)}"></i>
                                    ${file.title} (${file.type})
                                    ${file.quizzes ? `
                                        <span class="badge quiz-badge">
                                            <i class="fas fa-question-circle"></i>
                                            ${file.quizzes.length} quizzes
                                        </span>
                                    ` : ''}
                                </div>
                                ${file.messages ? `
                                    <div class="file-messages">
                                        ${file.messages.map(msg => `
                                            <div class="message ${msg.type}">
                                                <i class="fas ${getMessageIcon(msg.type)}"></i>
                                                ${msg.text}
                                            </div>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                    </div>
                </td>
            </tr>
        `;
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function getFileIcon(type) {
    switch(type) {
        case 'lecture': return 'fa-book-open';
        case 'section': return 'fa-laptop-code';
        case 'contribution': return 'fa-users';
        default: return 'fa-file';
    }
}

function getMessageIcon(type) {
    switch(type) {
        case 'quiz_available': return 'fa-question-circle';
        case 'warning': return 'fa-exclamation-triangle';
        case 'info': return 'fa-info-circle';
        default: return 'fa-comment';
    }
}

function displaySchedule() {
    const container = document.getElementById('schedule-content');
    let html = '<table class="schedule-table">';
    
    // Add header with time slots
    html += '<tr><th></th>'; // Empty corner cell
    Object.values(DATA.time_slots).forEach(time => {
        html += `<th>${time}</th>`;
    });
    html += '</tr>';

    // Generate schedule grid - days as rows
    Object.entries(DATA.days).forEach(([dayId, day]) => {
        html += `<tr>
            <th>${day}</th>`; // Day label in first column
        
        // For each time slot in this day
        Object.entries(DATA.time_slots).forEach(([slotId, time]) => {
            html += '<td class="schedule-cell">';
            
            // Find schedule items for this day and time
            const scheduleItem = Object.entries(DATA.schedule).find(([id, item]) => 
                item.day_id === dayId && item.time_slot_id === slotId
            );
            
            if (scheduleItem) {
                const [id, item] = scheduleItem;
                const course = DATA.courses[item.course_id];
                const instructor = DATA.instructors[item.instructor_id];
                const sessionType = DATA.session_types[item.session_type_id];
                const color = getCourseColor(item.course_id);
                
                html += `
                    <div class="schedule-item" style="background: ${color.bg}; border-color: ${color.border};">
                        <div class="course-code">${course.code}</div>
                        <div class="course-name">${course.name}</div>
                        <div class="instructor-name">${instructor.name}</div>
                        <div class="session-type">${sessionType}</div>
                    </div>
                `;
            }
            
            html += '</td>';
        });
        
        html += '</tr>';
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function getCourseColor(courseId) {
    const colors = [
        { bg: 'rgba(99, 102, 241, 0.15)', border: '#6366f1' },   // Indigo
        { bg: 'rgba(34, 197, 94, 0.15)', border: '#22c55e' },    // Green
        { bg: 'rgba(239, 68, 68, 0.15)', border: '#ef4444' },    // Red
        { bg: 'rgba(234, 179, 8, 0.15)', border: '#eab308' },    // Yellow
        { bg: 'rgba(168, 85, 247, 0.15)', border: '#a855f7' },   // Purple
        { bg: 'rgba(14, 165, 233, 0.15)', border: '#0ea5e9' },   // Sky
        { bg: 'rgba(249, 115, 22, 0.15)', border: '#f97316' },   // Orange
        { bg: 'rgba(236, 72, 153, 0.15)', border: '#ec4899' }    // Pink
    ];
    
    const index = parseInt(courseId.replace('CRS_', '')) % colors.length;
    return colors[index];
}

function displayQuizzes() {
    const container = document.getElementById('quizzes-content');
    let html = '<table class="data-table">';
    
    html += `
        <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Course</th>
            <th>Time Limit</th>
            <th>Questions</th>
        </tr>
    `;
    
    Object.entries(QUIZ_DATA).forEach(([id, quiz]) => {
        html += `
            <tr>
                <td>${id}</td>
                <td>${quiz.title}</td>
                <td>${quiz.course_id}</td>
                <td>${quiz.time_limit} min</td>
                <td>
                    <button class="expandable-content" onclick="toggleNestedContent(this)">
                        ${quiz.questions.length} questions
                    </button>
                </td>
            </tr>
            <tr>
                <td colspan="5">
                    <div class="nested-content">
                        ${quiz.questions.map((q, i) => `
                            <div style="margin-bottom: 1rem;">
                                <strong>Q${i + 1}:</strong> ${q.text}
                                <br>
                                <small>Options: ${q.options.map((opt, j) => 
                                    `${j === q.correct_answer ? '<strong>' : ''}${opt}${j === q.correct_answer ? '</strong>' : ''}`
                                ).join(' | ')}</small>
                            </div>
                        `).join('')}
                    </div>
                </td>
            </tr>
        `;
    });
    
    html += '</table>';
    container.innerHTML = html;
}

function toggleNestedContent(button) {
    button.classList.toggle('expanded');
    const row = button.closest('tr');
    const nestedRow = row.nextElementSibling;
    nestedRow.querySelector('.nested-content').classList.toggle('visible');
} 