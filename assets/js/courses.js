document.addEventListener('DOMContentLoaded', () => {
    initializeCourseListing();
    initializeHeader();
    initializeFooter();
});

function initializeHeader() {
    document.getElementById('institutionName').textContent = DATA.metadata.institution_name;
    document.getElementById('facultyName').textContent = DATA.metadata.faculty_name;
    document.getElementById('level').textContent = `Level ${DATA.metadata.level}`;
    document.getElementById('term').textContent = `Term ${DATA.metadata.term}`;
}

function initializeCourseListing() {
    const courseGrid = document.getElementById('courseGrid');
    
    Object.entries(DATA.courses).forEach(([id, course]) => {
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
            window.location.href = `../course/?id=${id}`;
        });
        
        courseGrid.appendChild(card);
    });

    // Add search functionality
    const searchInput = document.getElementById('courseSearch');
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const justSearchTerm = e.target.value;

        if (justSearchTerm === "ADMIN") {
            e.target.value = '';
            window.location.href = `../admin/`;
        }

        document.querySelectorAll('.course-card').forEach(card => {
            const courseName = card.querySelector('.course-card-name').textContent.toLowerCase();
            const courseCode = card.querySelector('.course-card-code').textContent.toLowerCase();
            const shouldShow = courseName.includes(searchTerm) || courseCode.includes(searchTerm);
            card.style.display = shouldShow ? 'block' : 'none';
        });
    });
} 