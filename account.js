class AccountSystem {
    constructor() {
        this.currentUser = this.loadUser() || this.createDefaultUser();
        this.initializeUI();
    }

    loadUser() {
        return JSON.parse(localStorage.getItem('userData'));
    }

    createDefaultUser() {
        return { quizResults: {} };
    }

    initializeUI() {
        // Update HTML structure first
        const header = document.querySelector('header .header-content');
        const statsSection = document.createElement('div');
        statsSection.className = 'stats-section';
        statsSection.innerHTML = `
            <button class="stats-btn" title="View Quiz Statistics">
                <i class="fas fa-chart-bar"></i>
                Statistics
            </button>
        `;
        header.appendChild(statsSection);

        // Add notification if has results
        const hasResults = Object.keys(this.currentUser.quizResults).length > 0;
        if (hasResults) {
            statsSection.querySelector('.stats-btn').classList.add('has-results');
        }

        // Add click handler
        statsSection.querySelector('.stats-btn').addEventListener('click', () => {
            this.showStats();
        });
    }

    showStats() {
        const analytics = this.getQuizAnalytics();
        const modal = document.createElement('div');
        modal.className = 'stats-modal';
        modal.innerHTML = `
            <div class="stats-container">
                <div class="stats-header">
                    <h2><i class="fas fa-chart-line"></i> Your Progress Dashboard</h2>
                    <button class="close-stats"><i class="fas fa-times"></i></button>
                </div>
                <div class="stats-content">
                    ${this.generateOverviewSection(analytics)}
                    ${this.generateRecentActivitySection(analytics)}
                    ${this.generateCoursePerformanceSection(analytics)}
                    ${this.generateProgressTrendSection(analytics)}
                    ${this.generateTimeAnalysisSection(analytics)}
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        this.attachStatHandlers(modal);
    }

    generateRecentActivitySection(analytics) {
        const recentQuizzes = analytics.recentQuizzes;
        if (!recentQuizzes.length) return '';

        return `
            <div class="recent-activity">
                <h3><i class="fas fa-history"></i> Recent Activity</h3>
                <div class="activity-list">
                    ${recentQuizzes.map(quiz => `
                        <div class="activity-item ${quiz.passed ? 'passed' : 'failed'}">
                            <div class="activity-icon">
                                <i class="fas fa-${quiz.passed ? 'check' : 'times'}"></i>
                            </div>
                            <div class="activity-details">
                                <h4>${quiz.title}</h4>
                                <p>Score: ${quiz.percentage.toFixed(1)}%</p>
                                <span class="activity-date">${quiz.date}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateCoursePerformanceSection(analytics) {
        if (!analytics.coursePerformance.length) return '';
        
        return `
            <div class="performance-section">
                <h3><i class="fas fa-book"></i> Course Performance</h3>
                <div class="course-performance-grid">
                    ${analytics.coursePerformance.map(course => `
                        <div class="course-stat-card">
                            <h4>${course.name}</h4>
                            <div class="course-stats">
                                <div class="course-stat">
                                    <span class="stat-value">${course.averageScore}%</span>
                                    <span class="stat-label">Average Score</span>
                                </div>
                                <div class="course-stat">
                                    <span class="stat-value">${course.successRate}%</span>
                                    <span class="stat-label">Success Rate</span>
                                </div>
                            </div>
                            <div class="quiz-count">
                                <i class="fas fa-${course.quizzesPassed === course.quizzesTaken ? 'check-circle' : 'circle'}"></i>
                                Quizzes: ${course.quizzesPassed}/${course.quizzesTaken} Passed
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }

    generateProgressTrendSection(analytics) {
        const trend = analytics.progressTrend;
        if (!trend.trend.length) return '';

        const improvement = trend.improvement;
        const improvementText = improvement.percentage >= 0 ? 
            `+${improvement.percentage}` : 
            improvement.percentage;
        const passesText = improvement.count >= 0 ?
            `+${improvement.count}` :
            improvement.count;

        return `
            <div class="progress-trend">
                <h3><i class="fas fa-chart-line"></i> Progress Trend</h3>
                <div class="trend-chart">
                    <canvas id="progressChart"></canvas>
                </div>
                <div class="improvement-summary">
                    <div class="metric-grid">
                        <div class="metric">
                            <span class="metric-label">Overall Improvement</span>
                            <span class="metric-value">${improvementText}%</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Additional Passes</span>
                            <span class="metric-value">${passesText}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateTimeAnalysisSection(analytics) {
        const timeData = analytics.timeAnalysis;
        if (!timeData) return '';

        return `
            <div class="time-analysis">
                <h3><i class="fas fa-clock"></i> Time Analysis</h3>
                <div class="time-stats">
                    <div class="time-stat-card">
                        <div class="stat-icon"><i class="fas fa-stopwatch"></i></div>
                        <div class="stat-info">
                            <span class="stat-value">${timeData.averageTime} min</span>
                            <span class="stat-label">Average Quiz Time</span>
                        </div>
                    </div>
                    <div class="time-stat-card">
                        <div class="stat-icon"><i class="fas fa-sun"></i></div>
                        <div class="stat-info">
                            <span class="stat-value">${timeData.bestTimeOfDay}</span>
                            <span class="stat-label">Most Productive Time</span>
                        </div>
                    </div>
                </div>
                <div class="time-vs-score">
                    <h4>Performance Metrics</h4>
                    <div class="metric-grid">
                        <div class="metric">
                            <span class="metric-label">Avg. Score</span>
                            <span class="metric-value">${timeData.timeVsScore.averageScore}%</span>
                        </div>
                        <div class="metric">
                            <span class="metric-label">Typical Duration</span>
                            <span class="metric-value">${timeData.timeVsScore.averageTime} min</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    generateStrengthAreasSection(analytics) {
        const strengths = analytics.strengthAreas;
        const weaknesses = analytics.weakAreas;
        
        if (!strengths && !weaknesses) return '';


        return `
            <div class="strength-areas">
                <h3><i class="fas fa-star"></i> Strengths and Weaknesses</h3>
                <div class="areas-grid">
                    ${strengths ? `
                        <div class="area-card">
                            <h4>Strengths</h4>
                            <p>${strengths}</p>
                        </div>
                    ` : ''}
                    ${weaknesses ? `
                        <div class="area-card">
                            <h4>Weaknesses</h4>
                            <p>${weaknesses}</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
    
    countPassedQuizzes(results) {
        return Object.values(results).filter(result => result.passed).length;
    }
    
    getQuizAnalytics() {
        const results = this.currentUser.quizResults;
        const coursePerformance = this.getCoursePerformance(results);
        const timeAnalysis = this.getTimeAnalysis(results);
        const progressTrend = this.getProgressTrend(results);
        
        return {
            totalQuizzes: Object.keys(results).length,
            averageScore: this.calculateAverageScore(results),
            quizzesPassed: this.countPassedQuizzes(results),
            recentQuizzes: this.getRecentQuizzes(results),
            coursePerformance,
            timeAnalysis,
            progressTrend,
            strengthAreas: this.identifyStrengthAreas(results),
            weakAreas: this.identifyWeakAreas(results),
            improvement: this.calculateOverallImprovement(results)
        };
    }

    calculateAverageScore(results) {
        if (Object.keys(results).length === 0) return 0;
        const totalScore = Object.values(results).reduce((acc, curr) => acc + curr.percentage, 0);
        return totalScore / Object.keys(results).length;
    }

    calculateAverageTime(timeData) {
        if (timeData.length === 0) return 0;
        const totalTime = timeData.reduce((acc, curr) => acc + curr.timeSpent, 0);
        return totalTime / timeData.length;
    }

    findBestTimeOfDay(timeData) {
        if (timeData.length < 3) return null;

        const scoresByHour = {};
        const countsByHour = {};

        timeData.forEach(data => {
            const hour = data.timestamp.getHours();
            if (!scoresByHour[hour]) {
                scoresByHour[hour] = 0;
                countsByHour[hour] = 0;
            }
            scoresByHour[hour] += data.score;
            countsByHour[hour]++;
        });

        let bestHour = null;
        let bestAverage = 0;

        Object.keys(scoresByHour).forEach(hour => {
            const average = scoresByHour[hour] / countsByHour[hour];
            if (average > bestAverage && countsByHour[hour] >= 2) {
                bestAverage = average;
                bestHour = parseInt(hour);
            }
        });

        return bestHour;
    }

    analyzeTimeVsScore(timeData) {
        const scores = timeData.map(t => t.score);
        const times = timeData.map(t => t.timeSpent);
        return {
            averageScore: scores.reduce((acc, curr) => acc + curr, 0) / scores.length,
            averageTime: times.reduce((acc, curr) => acc + curr, 0) / times.length
        };
    }

    calculateImprovement(results) {
        const sortedResults = Object.values(results)
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        const improvements = [];
        for (let i = 1; i < sortedResults.length; i++) {
            const current = sortedResults[i];
            const previous = sortedResults[i - 1];
            if (current.percentage > previous.percentage) {
                improvements.push({
                    quiz: current.quiz,
                    improvement: current.percentage - previous.percentage
                });
            }
        }
        return improvements;
    }

    identifyStrengthAreas(results) {
        let strengths = 0;
        Object.values(results).forEach(result => {
            if (result.percentage >= 80) strengths++;
        });
        return strengths;
    }

    identifyWeakAreas(results) {
        let weakAreas = 0;
        Object.values(results).forEach(result => {
            if (result.percentage < 70) weakAreas++;
        });
        return weakAreas;
    }

    getCoursePerformance(results) {
        const courseStats = {};
        
        Object.entries(results).forEach(([quizId, result]) => {
            // Get quiz data from meta.js
            const quiz = DATA.quizzes?.[quizId];
            if (!quiz) return;
            
            const courseId = quiz.course_id;
            const course = DATA.courses[courseId];
            
            if (!courseStats[courseId]) {
                courseStats[courseId] = {
                    name: course?.name || 'Unknown Course',
                    code: course?.code || '',
                    quizzes: 0,
                    totalScore: 0,
                    passed: 0
                };
            }
            
            courseStats[courseId].quizzes++;
            courseStats[courseId].totalScore += result.percentage;
            if (result.passed) courseStats[courseId].passed++;
        });

        return Object.entries(courseStats).map(([id, stats]) => ({
            courseId: id,
            name: `${stats.name} (${stats.code})`,
            averageScore: (stats.totalScore / stats.quizzes).toFixed(1),
            quizzesTaken: stats.quizzes,
            quizzesPassed: stats.passed,
            successRate: ((stats.passed / stats.quizzes) * 100).toFixed(1)
        }));
    }

    getRecentQuizzes(results) {
        return Object.entries(results)
            .map(([quizId, result]) => ({
                ...result,
                title: QUIZ_DATA[quizId]?.title || 'Unknown Quiz',
                date: new Date(result.timestamp).toLocaleDateString()
            }))
            .slice(-5)
            .reverse(); // Show most recent first
    }

    getTimeAnalysis(results) {
        if (Object.keys(results).length === 0) return null;

        const timeData = Object.values(results).map(result => ({
            timestamp: new Date(result.timestamp),
            timeSpent: result.timeSpent || 0,
            score: result.percentage
        }));

        const avgTime = this.calculateAverageTime(timeData);
        const bestTime = this.findBestTimeOfDay(timeData);
        const timeVsScore = this.analyzeTimeVsScore(timeData);

        return {
            averageTime: Math.round(avgTime),
            bestTimeOfDay: this.formatTimeOfDay(bestTime),
            timeVsScore: {
                averageScore: Number(timeVsScore.averageScore.toFixed(1)),
                averageTime: Math.round(timeVsScore.averageTime)
            }
        };
    }

    formatTimeOfDay(hour) {
        if (hour === null) return 'Not enough data';
        const period = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 || 12;
        return `${formattedHour}${period}`;
    }

    getProgressTrend(results) {
        const sortedResults = Object.values(results)
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp))
            .map(r => ({
                date: new Date(r.timestamp).toLocaleDateString(),
                score: r.percentage
            }));

        return {
            trend: sortedResults,
            improvement: this.calculateOverallImprovement(results)
        };
    }

    calculateOverallImprovement(results) {
        const sortedResults = Object.values(results)
            .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
        
        if (sortedResults.length < 2) {
            return {
                percentage: 0,
                count: 0
            };
        }

        // Calculate improvement between first and last quiz
        const firstQuiz = sortedResults[0];
        const lastQuiz = sortedResults[sortedResults.length - 1];
        const percentageImprovement = lastQuiz.percentage - firstQuiz.percentage;

        // Count additional passes in the second half compared to first half
        const midpoint = Math.floor(sortedResults.length / 2);
        const firstHalf = sortedResults.slice(0, midpoint);
        const secondHalf = sortedResults.slice(midpoint);

        const firstHalfPasses = firstHalf.filter(r => r.passed).length;
        const secondHalfPasses = secondHalf.filter(r => r.passed).length;

        return {
            percentage: Number(percentageImprovement.toFixed(1)),
            count: secondHalfPasses - firstHalfPasses
        };
    }

    generateOverviewSection(analytics) {
        return `
            <div class="stats-cards">
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
                    <div class="stat-info">
                        <span class="stat-value">${analytics.totalQuizzes}</span>
                        <span class="stat-label">Quizzes Taken</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-percentage"></i></div>
                    <div class="stat-info">
                        <span class="stat-value">${Number(analytics.averageScore).toFixed(1)}%</span>
                        <span class="stat-label">Average Score</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-trophy"></i></div>
                    <div class="stat-info">
                        <span class="stat-value">${analytics.quizzesPassed}</span>
                        <span class="stat-label">Quizzes Passed</span>
                    </div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-graduation-cap"></i></div>
                    <div class="stat-info">
                        <span class="stat-value">${analytics.coursePerformance.length}</span>
                        <span class="stat-label">Courses Active</span>
                    </div>
                </div>
            </div>
        `;
    }

    attachStatHandlers(modal) {
        modal.querySelector('.close-stats').addEventListener('click', () => modal.remove());
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

        // Initialize progress chart if it exists
        const chartCanvas = modal.querySelector('#progressChart');
        if (chartCanvas) {
            const analytics = this.getQuizAnalytics();
            const trend = analytics.progressTrend.trend;
            
            new Chart(chartCanvas, {
                type: 'line',
                data: {
                    labels: trend.map(t => t.date),
                    datasets: [{
                        label: 'Quiz Scores',
                        data: trend.map(t => t.score),
                        borderColor: '#6366f1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#94a3b8'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#94a3b8'
                            }
                        }
                    }
                }
            });
        }
    }

    saveQuizResult(quizId, result) {
        this.currentUser.quizResults[quizId] = {
            ...result,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('userData', JSON.stringify(this.currentUser));
        
        // Add notification dot if this is the first result
        if (Object.keys(this.currentUser.quizResults).length === 1) {
            document.querySelector('.stats-btn').classList.add('has-results');
        }
    }
}

// Initialize account system
const accountSystem = new AccountSystem(); 