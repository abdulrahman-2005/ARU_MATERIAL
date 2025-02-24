class QuizSystem {
    constructor() {
        this.currentQuiz = null;
        this.quizTimer = null;
        this.timeLeft = 0;
        this.results = this.loadSavedResults();
        this.shuffledOptions = new Map(); // Store shuffled options for each question
    }

    loadSavedResults() {
        return JSON.parse(localStorage.getItem('quizResults')) || {};
    }

    hasCompletedQuiz(quizId) {
        return this.results[quizId] !== undefined;
    }

    startQuiz(quizId) {
        this.currentQuiz = { ...QUIZ_DATA[quizId], id: quizId };
        this.timeLeft = this.currentQuiz.time_limit * 60;
        this.shuffledOptions.clear();
        
        // Shuffle questions if enabled
        if (this.currentQuiz.randomize_questions) {
            this.currentQuiz.questions = this.shuffleArray([...this.currentQuiz.questions]);
        }

        // Shuffle options for each question
        this.currentQuiz.questions.forEach(question => {
            const shuffledIndices = this.shuffleArray([...question.options.keys()]);
            this.shuffledOptions.set(question.id, shuffledIndices);
        });

        this.showQuizModal();
        this.startTimer();
        this.attachQuizHandlers();
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    generateQuestionHTML(question, index) {
        const shuffledIndices = this.shuffledOptions.get(question.id);
        const options = shuffledIndices.map(i => ({
            text: question.options[i],
            value: i
        }));

        // Process question text for code blocks
        const processedText = this.processCodeBlocks(question.text);

        return `
            <div class="quiz-question" data-id="${question.id}">
                <div class="question-header">
                    <span class="question-number">Question ${index + 1} of ${this.currentQuiz.questions.length}</span>
                    <span class="question-points">${question.points} points</span>
                </div>
                <div class="question-text">${processedText}</div>
                <div class="question-options">
                    ${options.map((opt, i) => `
                        <label class="option">
                            <input type="radio" name="q${question.id}" value="${opt.value}">
                            <div class="option-text">${this.processCodeBlocks(opt.text)}</div>
                            <span class="option-check"></span>
                        </label>
                    `).join('')}
                </div>
                <div class="question-progress">
                    <div class="progress-bar">
                        <div class="progress" style="width: ${((index + 1) / this.currentQuiz.questions.length) * 100}%"></div>
                    </div>
                </div>
            </div>
        `;
    }

    processCodeBlocks(text) {
        // Handle code blocks with language specification
        text = text.replace(/```(\w+)\n([\s\S]*?)```/g, (match, lang, code) => {
            const highlightedCode = Prism.highlight(
                code.trim(),
                Prism.languages[lang] || Prism.languages.plaintext,
                lang
            );
            return `<pre class="language-${lang}"><code class="language-${lang}">${highlightedCode}</code></pre>`;
        });

        // Handle inline code
        text = text.replace(/`([^`]+)`/g, '<code class="language-plaintext">$1</code>');

        return text;
    }

    showQuizModal() {
        const modal = document.createElement('div');
        modal.className = 'quiz-modal';
        modal.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <div class="quiz-info">
                        <h2>${this.currentQuiz.title}</h2>
                        <div class="quiz-meta">
                            <span><i class="fas fa-clock"></i> ${this.currentQuiz.time_limit} minutes</span>
                            <span><i class="fas fa-star"></i> Passing score: ${this.currentQuiz.passing_score}%</span>
                            <span><i class="fas fa-question-circle"></i> ${this.currentQuiz.questions.length} questions</span>
                            <div class="quiz-timer">
                                <i class="fas fa-hourglass-half"></i>
                                <span id="timer">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <button class="quiz-exit-btn" title="Exit Quiz">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="quiz-content">
                    <div class="quiz-instructions">
                        <h3><i class="fas fa-info-circle"></i> Instructions</h3>
                        ${this.currentQuiz.instructions.map(i => `<p>• ${i}</p>`).join('')}
                    </div>
                    <div class="quiz-progress">
                        <span class="progress-text">Overall Progress</span>
                        <div class="progress-bar">
                            <div class="progress" style="width: 0%"></div>
                        </div>
                    </div>
                    <div class="quiz-questions">
                        ${this.currentQuiz.questions.map((q, idx) => this.generateQuestionHTML(q, idx)).join('')}
                    </div>
                </div>
                <div class="quiz-actions">
                    <div class="quiz-status">
                        <span id="answeredCount">0</span>/${this.currentQuiz.questions.length} questions answered
                    </div>
                    <button class="quiz-submit-btn" disabled>
                        <i class="fas fa-check-circle"></i> Submit Quiz
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Initialize progress tracking
        this.initializeProgressTracking();

        // Initialize Prism highlighting after adding content
        requestAnimationFrame(() => {
            Prism.highlightAll();
        });
    }

    initializeProgressTracking() {
        const options = document.querySelectorAll('.option input');
        const submitBtn = document.querySelector('.quiz-submit-btn');
        const answeredCount = document.getElementById('answeredCount');
        const progressBar = document.querySelector('.quiz-progress .progress');

        options.forEach(option => {
            option.addEventListener('change', () => {
                const answered = document.querySelectorAll('.option input:checked').length;
                answeredCount.textContent = answered;
                progressBar.style.width = `${(answered / this.currentQuiz.questions.length) * 100}%`;
                submitBtn.disabled = answered < this.currentQuiz.questions.length;
            });
        });
    }

    startTimer() {
        const timerDisplay = document.getElementById('timer');
        this.updateTimerDisplay(timerDisplay);

        this.quizTimer = setInterval(() => {
            this.timeLeft--;
            this.updateTimerDisplay(timerDisplay);

            if (this.timeLeft <= 0) {
                this.submitQuiz(true);
            }
        }, 1000);
    }

    updateTimerDisplay(display) {
        const minutes = Math.floor(this.timeLeft / 60);
        const seconds = this.timeLeft % 60;
        display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

        // Add warning class when time is running low
        if (this.timeLeft <= 60) {
            display.parentElement.classList.add('warning');
        }
    }

    submitQuiz(timeUp = false) {
        clearInterval(this.quizTimer);
        
        const answers = this.collectAnswers();
        const result = this.calculateResult(answers);
        
        this.saveResults(this.currentQuiz.id, result);
        this.showResults(result, timeUp);
    }

    collectAnswers() {
        const answers = {};
        this.currentQuiz.questions.forEach(q => {
            const selected = document.querySelector(`input[name="q${q.id}"]:checked`);
            answers[q.id] = selected ? parseInt(selected.value) : null;
        });
        return answers;
    }

    calculateResult(answers) {
        let score = 0;
        let totalPoints = 0;
        let questionsCorrect = 0;
        let questionsAnswered = 0;
        let detailedResults = [];

        this.currentQuiz.questions.forEach(q => {
            const shuffledAnswer = answers[q.id];
            totalPoints += q.points;
            
            if (shuffledAnswer !== null) {
                questionsAnswered++;
                const isCorrect = shuffledAnswer === q.correct_answer;
                if (isCorrect) {
                    score += q.points;
                    questionsCorrect++;
                }

                detailedResults.push({
                    questionId: q.id,
                    question: q.text,
                    userAnswer: shuffledAnswer,
                    correctAnswer: q.correct_answer,
                    isCorrect,
                    points: isCorrect ? q.points : 0,
                    maxPoints: q.points
                });
            }
        });

        const percentage = (score / totalPoints) * 100;
        const passed = percentage >= this.currentQuiz.passing_score;

        return {
            score,
            totalPoints,
            percentage,
            passed,
            answers,
            questionsCorrect,
            questionsAnswered,
            totalQuestions: this.currentQuiz.questions.length,
            detailedResults,
            quizId: this.currentQuiz.id,
            timestamp: new Date().toISOString()
        };
    }

    showResults(result, timeUp) {
        const modal = document.querySelector('.quiz-container');
        modal.innerHTML = `
            <div class="quiz-results">
                <div class="results-header ${result.passed ? 'passed' : 'failed'}">
                    <i class="fas fa-${result.passed ? 'check-circle' : 'times-circle'}"></i>
                    <h2>${timeUp ? 'Time\'s Up!' : (result.passed ? 'Congratulations!' : 'Quiz Completed')}</h2>
                </div>
                <div class="results-content">
                    <div class="result-stats">
                        <div class="stat">
                            <span class="stat-label">Score</span>
                            <span class="stat-value">${result.score}/${result.totalPoints}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Percentage</span>
                            <span class="stat-value">${result.percentage.toFixed(1)}%</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Questions Correct</span>
                            <span class="stat-value">${result.questionsCorrect}/${result.totalQuestions}</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Status</span>
                            <span class="stat-value ${result.passed ? 'passed' : 'failed'}">
                                ${result.passed ? 'PASSED' : 'FAILED'}
                            </span>
                        </div>
                    </div>
                    <div class="results-actions">
                        <button class="review-btn">
                            <i class="fas fa-search"></i> Review Answers
                        </button>
                        <button class="close-quiz">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Attach close handler
        modal.querySelector('.close-quiz').addEventListener('click', () => {
            document.querySelector('.quiz-modal').remove();
            document.body.style.overflow = '';
        });

        // Attach review handler
        modal.querySelector('.review-btn').addEventListener('click', () => {
            this.showAnswerReview(result);
        });
    }

    showAnswerReview(result) {
        const modal = document.querySelector('.quiz-container');
        modal.innerHTML = `
            <div class="quiz-review">
                <div class="review-header">
                    <h2>Quiz Review</h2>
                </div>
                <div class="review-content">
                    ${this.currentQuiz.questions.map((q, idx) => this.generateReviewQuestionHTML(q, idx, result.answers)).join('')}
                </div>
                <div class="review-actions">
                    <button class="close-review">
                        <i class="fas fa-arrow-left"></i> Back to Results
                    </button>
                </div>
            </div>
        `;

        // Attach back handler
        modal.querySelector('.close-review').addEventListener('click', () => {
            this.showResults(result);
        });
    }

    generateReviewQuestionHTML(question, index, answers) {
        const userAnswer = answers[question.id];
        const isCorrect = userAnswer === question.correct_answer;

        return `
            <div class="review-question ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="question-header">
                    <span class="question-number">Question ${index + 1}</span>
                    <span class="question-status">
                        <i class="fas fa-${isCorrect ? 'check' : 'times'}"></i>
                        ${isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                </div>
                <div class="question-text">${this.processCodeBlocks(question.text)}</div>
                <div class="question-options">
                    ${question.options.map((opt, i) => `
                        <div class="review-option ${i === question.correct_answer ? 'correct' : ''} ${i === userAnswer ? 'selected' : ''}">
                            ${this.processCodeBlocks(opt)}
                            ${i === question.correct_answer ? '<i class="fas fa-check"></i>' : ''}
                            ${i === userAnswer && i !== question.correct_answer ? '<i class="fas fa-times"></i>' : ''}
                        </div>
                    `).join('')}
                </div>
                ${question.explanation ? `
                    <div class="question-explanation">
                        <h4><i class="fas fa-info-circle"></i> Explanation</h4>
                        ${this.processCodeBlocks(question.explanation)}
                    </div>
                ` : ''}
            </div>
        `;
    }

    saveResults(quizId, result) {
        this.results[quizId] = {
            ...result,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('quizResults', JSON.stringify(this.results));
        
        // Save to account if logged in
        if (accountSystem.currentUser) {
            accountSystem.saveQuizResult(quizId, result);
        }
    }

    attachQuizHandlers() {
        // Add event listeners for quiz interactions
        const modal = document.querySelector('.quiz-modal');
        
        // Close quiz on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.body.style.overflow = '';
                clearInterval(this.quizTimer);
            }
        });

        // Handle question navigation
        const questions = modal.querySelectorAll('.quiz-question');
        questions.forEach((question, index) => {
            const options = question.querySelectorAll('.option');
            options.forEach(option => {
                option.addEventListener('click', () => {
                    // Visual feedback when selecting an option
                    options.forEach(opt => opt.classList.remove('selected'));
                    option.classList.add('selected');
                });
            });
        });

        // Submit button handler
        modal.querySelector('.quiz-submit-btn').addEventListener('click', () => {
            // Show confirmation dialog
            if (confirm('Are you sure you want to submit the quiz?')) {
                this.submitQuiz();
            }
        });

        // Exit button handler
        const exitBtn = modal.querySelector('.quiz-exit-btn');
        exitBtn.addEventListener('click', () => {
            if (confirm('Are you sure you want to exit the quiz?')) {
                this.submitQuiz(true);
            }
        });

        // Add this new exit handler
        modal.querySelector('.quiz-exit-btn').addEventListener('click', () => {
            if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
                modal.remove();
                document.body.style.overflow = '';
                clearInterval(this.quizTimer);
            }
        });
    }

    // Add this helper method to check if all questions are answered
    areAllQuestionsAnswered() {
        const answers = this.collectAnswers();
        return Object.keys(answers).length === this.currentQuiz.questions.length;
    }
}

// Initialize quiz system
const quizSystem = new QuizSystem(); 