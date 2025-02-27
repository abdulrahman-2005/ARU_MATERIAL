class MetaEditor {
    constructor() {
        // DATA and QUIZ_DATA are now global variables from meta.js
        this.data = structuredClone(DATA); // Deep clone to avoid modifying original
        this.quizData = structuredClone(QUIZ_DATA);
        this.currentSection = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadSection('metadata'); // Load default section
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-section a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.target.dataset.section;
                this.loadSection(section);
            });
        });

        // Save button
        document.getElementById('saveBtn').addEventListener('click', () => {
            this.generateOutput();
        });

        // Copy button
        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyToClipboard();
        });
    }

    loadSection(section) {
        this.currentSection = section;
        const editorArea = document.getElementById('editorArea');
        
        // Update active nav item
        document.querySelectorAll('.nav-section a').forEach(link => {
            link.classList.toggle('active', link.dataset.section === section);
        });

        // Clear current content
        editorArea.innerHTML = '';
        
        // Load section content
        switch(section) {
            case 'metadata':
                this.loadMetadataEditor();
                break;
            case 'developer':
                this.loadDeveloperEditor();
                break;
            case 'instructors':
                this.loadInstructorsEditor();
                break;
            case 'courses':
                this.loadCoursesEditor();
                break;
            case 'quizzes':
                this.loadQuizzesEditor();
                break;
            case 'schedule':
                this.loadScheduleEditor();
                break;
        }
    }

    loadMetadataEditor() {
        const metadata = this.data.metadata;
        const html = `
            <h2>Metadata</h2>
            <div class="form-group">
                <label>Institution Name</label>
                <input type="text" id="institution_name" value="${metadata.institution_name}" 
                    onchange="metaEditor.updateMetadata('institution_name', this.value)">
            </div>
            <div class="form-group">
                <label>Faculty Name</label>
                <input type="text" id="faculty_name" value="${metadata.faculty_name}"
                    onchange="metaEditor.updateMetadata('faculty_name', this.value)">
            </div>
            <div class="form-group">
                <label>Level</label>
                <input type="number" id="level" value="${metadata.level}"
                    onchange="metaEditor.updateMetadata('level', Number(this.value))">
            </div>
            <div class="form-group">
                <label>Term</label>
                <input type="number" id="term" value="${metadata.term}"
                    onchange="metaEditor.updateMetadata('term', Number(this.value))">
            </div>
        `;
        
        document.getElementById('editorArea').innerHTML = html;
    }

    updateMetadata(field, value) {
        this.data.metadata[field] = value;
    }

    loadDeveloperEditor() {
        const dev = this.data.developer;
        const html = `
            <h2>Developer Information</h2>
            <div class="form-group">
                <label>Name</label>
                <input type="text" value="${dev.name}" 
                    onchange="metaEditor.updateDeveloper('name', this.value)">
            </div>
            <div class="form-group">
                <label>Role</label>
                <input type="text" value="${dev.role}"
                    onchange="metaEditor.updateDeveloper('role', this.value)">
            </div>
            <div class="form-group">
                <label>Website</label>
                <input type="url" value="${dev.website}"
                    onchange="metaEditor.updateDeveloper('website', this.value)">
            </div>
            <div class="form-group">
                <label>Description</label>
                <textarea onchange="metaEditor.updateDeveloper('description', this.value)">${dev.description}</textarea>
            </div>
            <h3>Social Links</h3>
            <div class="form-group">
                <label>GitHub</label>
                <input type="url" value="${dev.social.github}"
                    onchange="metaEditor.updateDeveloperSocial('github', this.value)">
            </div>
            <div class="form-group">
                <label>LinkedIn</label>
                <input type="url" value="${dev.social.linkedin}"
                    onchange="metaEditor.updateDeveloperSocial('linkedin', this.value)">
            </div>
            <div class="form-group">
                <label>Website</label>
                <input type="url" value="${dev.social.globe}"
                    onchange="metaEditor.updateDeveloperSocial('globe', this.value)">
            </div>
        `;
        document.getElementById('editorArea').innerHTML = html;
    }

    updateDeveloper(field, value) {
        this.data.developer[field] = value;
    }

    updateDeveloperSocial(platform, value) {
        this.data.developer.social[platform] = value;
    }

    loadInstructorsEditor() {
        const instructors = this.data.instructors;
        let html = `
            <h2>Instructors</h2>
            <button class="btn primary" onclick="metaEditor.addInstructor()">
                <i class="fas fa-plus"></i> Add Instructor
            </button>
            <div class="instructors-list">
        `;

        Object.entries(instructors).forEach(([id, instructor]) => {
            html += this.createInstructorCard(id, instructor);
        });

        html += `</div>`;
        document.getElementById('editorArea').innerHTML = html;
    }

    createInstructorCard(id, instructor) {
        return `
            <div class="instructor-card" data-id="${id}">
                <div class="card-header">
                    <div class="card-title">
                        <i class="fas fa-user card-icon"></i>
                        ${instructor.name}
                    </div>
                </div>
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" value="${id}" readonly>
                </div>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" value="${instructor.title}"
                        onchange="metaEditor.updateInstructor('${id}', 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>Department</label>
                    <input type="text" value="${instructor.department_id}"
                        onchange="metaEditor.updateInstructor('${id}', 'department_id', this.value)">
                </div>
                <div class="card-actions">
                    <button class="btn danger" onclick="metaEditor.deleteInstructor('${id}')">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
            </div>
        `;
    }

    updateInstructor(id, field, value) {
        this.data.instructors[id][field] = value;
    }

    loadCoursesEditor() {
        const courses = this.data.courses;
        let html = `
            <h2>Courses</h2>
            <button class="btn primary" onclick="metaEditor.addCourse()">
                <i class="fas fa-plus"></i> Add Course
            </button>
            <div class="courses-list">
        `;

        Object.entries(courses).forEach(([id, course]) => {
            html += this.createCourseCard(id, course);
        });

        html += `</div>`;
        document.getElementById('editorArea').innerHTML = html;
    }

    createCourseCard(id, course) {
        return `
            <div class="course-card" data-id="${id}">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" value="${id}" readonly>
                </div>
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" value="${course.name}"
                        onchange="metaEditor.updateCourse('${id}', 'name', this.value)">
                </div>
                <div class="form-group">
                    <label>Code</label>
                    <input type="text" value="${course.code}"
                        onchange="metaEditor.updateCourse('${id}', 'code', this.value)">
                </div>
                <div class="form-group">
                    <label>Credit Hours</label>
                    <input type="number" value="${course.credit_hours}"
                        onchange="metaEditor.updateCourse('${id}', 'credit_hours', Number(this.value))">
                </div>
                <div class="form-group">
                    <label>Instructors</label>
                    <select multiple onchange="metaEditor.updateCourseInstructors('${id}', this)">
                        ${Object.entries(this.data.instructors).map(([insId, ins]) => `
                            <option value="${insId}" ${course.instructors.includes(insId) ? 'selected' : ''}>
                                ${ins.name}
                            </option>
                        `).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Has Lecture</label>
                    <input type="checkbox" ${course.has_lecture ? 'checked' : ''}
                        onchange="metaEditor.updateCourse('${id}', 'has_lecture', this.checked)">
                </div>
                <div class="form-group">
                    <label>Has Section</label>
                    <input type="checkbox" ${course.has_section ? 'checked' : ''}
                        onchange="metaEditor.updateCourse('${id}', 'has_section', this.checked)">
                </div>
                <button class="btn danger" onclick="metaEditor.deleteCourse('${id}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
    }

    updateCourse(id, field, value) {
        this.data.courses[id][field] = value;
    }

    updateCourseInstructors(courseId, selectElement) {
        const selectedOptions = Array.from(selectElement.selectedOptions);
        this.data.courses[courseId].instructors = selectedOptions.map(option => option.value);
    }

    loadQuizzesEditor() {
        let html = `
            <h2>Quizzes</h2>
            <button class="btn primary" onclick="metaEditor.addQuiz()">
                <i class="fas fa-plus"></i> Add Quiz
            </button>
            <div class="quizzes-list">
        `;

        Object.entries(this.quizData).forEach(([id, quiz]) => {
            html += this.createQuizCard(id, quiz);
        });

        html += `</div>`;
        document.getElementById('editorArea').innerHTML = html;
    }

    createQuizCard(id, quiz) {
        return `
            <div class="quiz-card" data-id="${id}">
                <div class="form-group">
                    <label>ID</label>
                    <input type="text" value="${id}" readonly>
                </div>
                <div class="form-group">
                    <label>Title</label>
                    <input type="text" value="${quiz.title}"
                        onchange="metaEditor.updateQuiz('${id}', 'title', this.value)">
                </div>
                <div class="form-group">
                    <label>Course ID</label>
                    <select onchange="metaEditor.updateQuiz('${id}', 'course_id', this.value)">
                        ${Object.entries(this.data.courses).map(([courseId, course]) => `
                            <option value="${course.code}" ${quiz.course_id === course.code ? 'selected' : ''}>
                                ${course.name} (${course.code})
                            </option>
                        `).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label>Time Limit (minutes)</label>
                    <input type="number" value="${quiz.time_limit}"
                        onchange="metaEditor.updateQuiz('${id}', 'time_limit', Number(this.value))">
                </div>
                <div class="form-group">
                    <label>Passing Score (%)</label>
                    <input type="number" value="${quiz.passing_score}"
                        onchange="metaEditor.updateQuiz('${id}', 'passing_score', Number(this.value))">
                </div>
                <div class="form-group">
                    <label>Randomize Questions</label>
                    <input type="checkbox" ${quiz.randomize_questions ? 'checked' : ''}
                        onchange="metaEditor.updateQuiz('${id}', 'randomize_questions', this.checked)">
                </div>
                <button class="btn secondary" onclick="metaEditor.editQuizQuestions('${id}')">
                    <i class="fas fa-list"></i> Edit Questions
                </button>
                <button class="btn danger" onclick="metaEditor.deleteQuiz('${id}')">
                    <i class="fas fa-trash"></i> Delete
                </button>
            </div>
        `;
    }

    updateQuiz(id, field, value) {
        this.quizData[id][field] = value;
    }

    // Add methods
    addInstructor() {
        const id = `INS_${Object.keys(this.data.instructors).length + 1}`.padStart(7, '0');
        this.data.instructors[id] = {
            name: "New Instructor",
            title: "",
            department_id: "DEP_001"
        };
        this.loadInstructorsEditor();
    }

    addCourse() {
        const id = `CRS_${Object.keys(this.data.courses).length + 1}`.padStart(7, '0');
        this.data.courses[id] = {
            name: "New Course",
            code: "",
            credit_hours: 3,
            instructors: [],
            has_lecture: true,
            has_section: true,
            files: []
        };
        this.loadCoursesEditor();
    }

    addQuiz() {
        const id = `QZ_${Object.keys(this.quizData).length + 1}`.padStart(7, '0');
        this.quizData[id] = {
            title: "New Quiz",
            course_id: "",
            time_limit: 10,
            passing_score: 70,
            randomize_questions: true,
            questions: [],
            instructions: [
                "You have 10 minutes to complete this quiz",
                "Each question is worth 2 points",
                "You need 70% to pass",
                "All questions must be answered before submission",
                "Questions and answers are randomized for each attempt"
            ]
        };
        this.loadQuizzesEditor();
    }

    // Delete methods
    deleteInstructor(id) {
        if (confirm(`Are you sure you want to delete instructor ${this.data.instructors[id].name}?`)) {
            delete this.data.instructors[id];
            this.loadInstructorsEditor();
        }
    }

    deleteCourse(id) {
        if (confirm(`Are you sure you want to delete course ${this.data.courses[id].name}?`)) {
            delete this.data.courses[id];
            this.loadCoursesEditor();
        }
    }

    deleteQuiz(id) {
        if (confirm(`Are you sure you want to delete quiz ${this.quizData[id].title}?`)) {
            delete this.quizData[id];
            this.loadQuizzesEditor();
        }
    }

    generateOutput() {
        const output = `const DATA = ${JSON.stringify(this.data, null, 2)};\n\nconst QUIZ_DATA = ${JSON.stringify(this.quizData, null, 2)};`;
        document.getElementById('outputText').value = output;
        document.getElementById('outputArea').classList.remove('hidden');
    }

    copyToClipboard() {
        const outputText = document.getElementById('outputText');
        outputText.select();
        document.execCommand('copy');
        
        // Show feedback
        const copyBtn = document.getElementById('copyBtn');
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
        }, 2000);
    }

    loadScheduleEditor() {
        const days = this.data.days;
        const timeSlots = this.data.time_slots;
        const schedule = this.data.schedule;

        let html = `
            <div class="schedule-editor">
                <h2 class="section-title">Schedule Editor</h2>
                <div class="schedule-controls">
                    <button class="btn primary" onclick="metaEditor.addScheduleItem()">
                        <i class="fas fa-plus"></i> Add Schedule Item
                    </button>
                </div>
                
                <div class="schedule-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Time / Day</th>
                                ${Object.values(days).map(day => `
                                    <th>${day}</th>
                                `).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${Object.entries(timeSlots).map(([slotId, time]) => `
                                <tr>
                                    <td class="time-slot">${time}</td>
                                    ${Object.entries(days).map(([dayId, day]) => {
                                        const scheduleItem = Object.values(schedule).find(item => 
                                            item.day_id === dayId && item.time_slot_id === slotId
                                        );
                                        
                                        return `
                                            <td class="schedule-cell ${scheduleItem ? 'has-class' : ''}" 
                                                data-day="${dayId}" 
                                                data-slot="${slotId}"
                                                onclick="metaEditor.editScheduleItem('${scheduleItem ? Object.keys(schedule).find(key => schedule[key] === scheduleItem) : ''}', '${dayId}', '${slotId}')">
                                                ${scheduleItem ? this.renderScheduleItemContent(scheduleItem) : ''}
                                            </td>
                                        `;
                                    }).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;

        document.getElementById('editorArea').innerHTML = html;
    }

    // Add this method to generate consistent colors for courses
    getCourseColor(courseId) {
        // Predefined vibrant colors with good contrast on dark theme
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
        
        // Use course ID to consistently pick a color
        const index = parseInt(courseId.replace('CRS_', '')) % colors.length;
        return colors[index];
    }

    // Update the renderScheduleItemContent method
    renderScheduleItemContent(item) {
        const course = this.data.courses[item.course_id];
        const instructor = this.data.instructors[item.instructor_id];
        const sessionType = this.data.session_types[item.session_type_id];
        const color = this.getCourseColor(item.course_id);
        
        return `
            <div class="schedule-item" style="background: ${color.bg}; border-color: ${color.border};">
                <div class="course-code">${course.code}</div>
                <div class="course-name">${course.name}</div>
                <div class="instructor">${instructor.name}</div>
                <div class="session-type">${sessionType}</div>
            </div>
        `;
    }

    editScheduleItem(scheduleId, dayId, slotId) {
        const item = scheduleId ? this.data.schedule[scheduleId] : null;
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${item ? 'Edit Schedule Item' : 'Add Schedule Item'}</h3>
                    <button class="close-btn" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>Course</label>
                        <select id="schedule-course">
                            <option value="">Select Course</option>
                            ${Object.entries(this.data.courses).map(([id, course]) => `
                                <option value="${id}" ${item && item.course_id === id ? 'selected' : ''}>
                                    ${course.code} - ${course.name}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Instructor</label>
                        <select id="schedule-instructor">
                            <option value="">Select Instructor</option>
                            ${Object.entries(this.data.instructors).map(([id, instructor]) => `
                                <option value="${id}" ${item && item.instructor_id === id ? 'selected' : ''}>
                                    ${instructor.name} (${instructor.title})
                                </option>
                            `).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label>Session Type</label>
                        <select id="schedule-session-type">
                            ${Object.entries(this.data.session_types).map(([id, type]) => `
                                <option value="${id}" ${item && item.session_type_id === id ? 'selected' : ''}>
                                    ${type}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    ${item ? `
                        <button class="btn danger" onclick="metaEditor.deleteScheduleItem('${scheduleId}')">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                    ` : ''}
                    <button class="btn primary" onclick="metaEditor.saveScheduleItem('${scheduleId || ''}', '${dayId}', '${slotId}')">
                        <i class="fas fa-save"></i> Save
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    saveScheduleItem(scheduleId, dayId, slotId) {
        const courseId = document.getElementById('schedule-course').value;
        const instructorId = document.getElementById('schedule-instructor').value;
        const sessionTypeId = document.getElementById('schedule-session-type').value;
        
        if (!courseId || !instructorId || !sessionTypeId) {
            alert('Please fill in all fields');
            return;
        }
        
        const newItem = {
            day_id: dayId,
            time_slot_id: slotId,
            course_id: courseId,
            instructor_id: instructorId,
            session_type_id: sessionTypeId
        };
        
        if (scheduleId) {
            this.data.schedule[scheduleId] = newItem;
        } else {
            const newId = `SCH_${Object.keys(this.data.schedule).length + 1}`.padStart(7, '0');
            this.data.schedule[newId] = newItem;
        }
        
        document.querySelector('.modal').remove();
        this.loadScheduleEditor();
    }

    deleteScheduleItem(scheduleId) {
        if (confirm('Are you sure you want to delete this schedule item?')) {
            delete this.data.schedule[scheduleId];
            document.querySelector('.modal').remove();
            this.loadScheduleEditor();
        }
    }

    editQuizQuestions(quizId) {
        const quiz = this.quizData[quizId];
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content question-editor">
                <div class="modal-header">
                    <h3>Edit Questions - ${quiz.title}</h3>
                    <button class="close-btn" onclick="this.closest('.modal').remove()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <button class="btn primary" onclick="metaEditor.addQuestion('${quizId}')">
                        <i class="fas fa-plus"></i> Add Question
                    </button>
                    
                    <div class="question-list">
                        ${quiz.questions.map((question, index) => this.renderQuestion(quizId, question, index)).join('')}
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    renderQuestion(quizId, question, index) {
        return `
            <div class="question-item" data-index="${index}">
                <div class="question-header">
                    <h4>Question ${index + 1}</h4>
                    <button class="btn danger small" onclick="metaEditor.deleteQuestion('${quizId}', ${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                
                <div class="form-group">
                    <label>Question Text</label>
                    <textarea onchange="metaEditor.updateQuestion('${quizId}', ${index}, 'text', this.value)">${question.text}</textarea>
                </div>
                
                <div class="form-group">
                    <label>Points</label>
                    <input type="number" value="${question.points}" 
                        onchange="metaEditor.updateQuestion('${quizId}', ${index}, 'points', Number(this.value))">
                </div>
                
                <div class="form-group">
                    <label>Options</label>
                    <div class="option-list">
                        ${question.options.map((option, optIndex) => `
                            <div class="option-item ${optIndex === question.correct_answer ? 'correct' : ''}">
                                <input type="radio" name="correct_${index}" value="${optIndex}" 
                                    ${optIndex === question.correct_answer ? 'checked' : ''}
                                    onchange="metaEditor.updateQuestion('${quizId}', ${index}, 'correct_answer', ${optIndex})">
                                <input type="text" value="${option}" 
                                    onchange="metaEditor.updateQuestionOption('${quizId}', ${index}, ${optIndex}, this.value)">
                                <button class="btn danger small" onclick="metaEditor.deleteOption('${quizId}', ${index}, ${optIndex})">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                        `).join('')}
                        <button class="btn secondary small" onclick="metaEditor.addOption('${quizId}', ${index})">
                            <i class="fas fa-plus"></i> Add Option
                        </button>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>Explanation</label>
                    <textarea onchange="metaEditor.updateQuestion('${quizId}', ${index}, 'explanation', this.value)">${question.explanation}</textarea>
                </div>
            </div>
        `;
    }

    addQuestion(quizId) {
        const newQuestion = {
            id: `Q${this.quizData[quizId].questions.length + 1}`,
            text: "New Question",
            type: "multiple_choice",
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            correct_answer: 0,
            points: 2,
            explanation: "Explanation for the correct answer"
        };
        
        this.quizData[quizId].questions.push(newQuestion);
        this.editQuizQuestions(quizId); // Refresh the modal
    }

    deleteQuestion(quizId, index) {
        if (confirm('Are you sure you want to delete this question?')) {
            this.quizData[quizId].questions.splice(index, 1);
            this.editQuizQuestions(quizId); // Refresh the modal
        }
    }

    updateQuestion(quizId, index, field, value) {
        this.quizData[quizId].questions[index][field] = value;
    }

    updateQuestionOption(quizId, questionIndex, optionIndex, value) {
        this.quizData[quizId].questions[questionIndex].options[optionIndex] = value;
    }

    addOption(quizId, questionIndex) {
        this.quizData[quizId].questions[questionIndex].options.push(`Option ${this.quizData[quizId].questions[questionIndex].options.length + 1}`);
        this.editQuizQuestions(quizId); // Refresh the modal
    }

    deleteOption(quizId, questionIndex, optionIndex) {
        if (this.quizData[quizId].questions[questionIndex].options.length <= 2) {
            alert('A question must have at least 2 options');
            return;
        }
        
        this.quizData[quizId].questions[questionIndex].options.splice(optionIndex, 1);
        
        // Update correct answer if needed
        if (this.quizData[quizId].questions[questionIndex].correct_answer >= optionIndex) {
            this.quizData[quizId].questions[questionIndex].correct_answer = Math.max(0, this.quizData[quizId].questions[questionIndex].correct_answer - 1);
        }
        
        this.editQuizQuestions(quizId); // Refresh the modal
    }
}

// Make editor instance globally available
let metaEditor;

// Initialize the editor when the page loads
document.addEventListener('DOMContentLoaded', () => {
    metaEditor = new MetaEditor();

    // Add these icons to the navigation
    document.querySelectorAll('.nav-section a').forEach(link => {
        const icons = {
            'metadata': '<i class="fas fa-cog card-icon"></i>',
            'developer': '<i class="fas fa-code card-icon"></i>',
            'instructors': '<i class="fas fa-chalkboard-teacher card-icon"></i>',
            'courses': '<i class="fas fa-book card-icon"></i>',
            'schedule': '<i class="fas fa-calendar-alt card-icon"></i>',
            'quizzes': '<i class="fas fa-question-circle card-icon"></i>'
        };
        const section = link.dataset.section;
        link.insertAdjacentHTML('afterbegin', icons[section]);
    });
}); 