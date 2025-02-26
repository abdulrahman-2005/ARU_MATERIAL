document.addEventListener('DOMContentLoaded', () => {
    initializeHeader();
    initializeFooter();
    renderStats();
});

function renderStats() {
    const accountSystem = new AccountSystem();
    const analytics = accountSystem.getQuizAnalytics();
    
    // Update last updated time
    document.getElementById('lastUpdated').textContent = new Date().toLocaleString();
    
    // Render sections
    document.getElementById('overview-section').innerHTML = generateOverviewSection(analytics);
    document.getElementById('progress-trend-section').innerHTML = generateProgressTrendSection(analytics);
    document.getElementById('course-performance-section').innerHTML = generateCoursePerformanceSection(analytics);
    document.getElementById('time-analysis-section').innerHTML = generateTimeAnalysisSection(analytics);
    document.getElementById('recent-activity-section').innerHTML = generateRecentActivitySection(analytics);
    
    // Initialize charts
    initializeCharts(analytics);
}

// Copy all the generate* functions from AccountSystem class
// but remove the class context (this.) since we're using them as standalone functions

function generateOverviewSection(analytics) {
    const totalTime = Object.values(analytics.timeAnalysis || {}).reduce((acc, curr) => acc + curr.timeSpent, 0);
    const accuracy = Number(analytics.accuracy || 0).toFixed(1);

    return `
        <div class="stats-cards">
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
                <div class="stat-info">
                    <span class="stat-value">${analytics.totalQuizzes}</span>
                    <span class="stat-label">Quizzes Completed</span>
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
                <div class="stat-icon"><i class="fas fa-bullseye"></i></div>
                <div class="stat-info">
                    <span class="stat-value">${accuracy}%</span>
                    <span class="stat-label">Answer Accuracy</span>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-clock"></i></div>
                <div class="stat-info">
                    <span class="stat-value">${Math.round(totalTime / 60)}</span>
                    <span class="stat-label">Total Hours Studied</span>
                </div>
            </div>
        </div>
    `;
}

function generateRecentActivitySection(analytics) {
    if (!analytics.recentQuizzes.length) {
        return `
            <div class="performance-section">
                <h3><i class="fas fa-history"></i> Recent Activity</h3>
                <div class="empty-state">No quiz activity yet</div>
            </div>
        `;
    }

    return `
        <div class="performance-section">
            <h3><i class="fas fa-history"></i> Recent Activity</h3>
            <div class="recent-activity-grid">
                ${analytics.recentQuizzes.map(quiz => `
                    <div class="activity-card">
                        <div class="activity-header">
                            <span class="activity-title">${quiz.title}</span>
                            <span class="activity-date">${quiz.date}</span>
                        </div>
                        <div class="activity-stats">
                            <div class="activity-score">
                                <i class="fas fa-chart-pie"></i>
                                ${Math.round(quiz.percentage)}%
                            </div>
                            <div class="activity-status ${quiz.passed ? 'passed' : 'failed'}">
                                <i class="fas fa-${quiz.passed ? 'check' : 'times'}-circle"></i>
                                ${quiz.passed ? 'Passed' : 'Failed'}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateCoursePerformanceSection(analytics) {
    if (!analytics.coursePerformance.length) return ''; // Empty state handling

    const sortedCourses = analytics.coursePerformance
        .sort((a, b) => b.averageScore - a.averageScore);

    return `
        <div class="performance-section">
            <h3><i class="fas fa-graduation-cap"></i> Course Performance</h3>
            <div class="course-performance-grid">
                ${sortedCourses.map(course => `
                    <div class="course-stat-card">
                        <h4>${course.name}</h4>
                        <div class="course-stats">
                            <div class="course-stat">
                                <div class="stat-value">${course.averageScore}%</div>
                                <div class="stat-label">Average Score</div>
                            </div>
                            <div class="course-stat">
                                <div class="stat-value">${course.successRate}%</div>
                                <div class="stat-label">Success Rate</div>
                            </div>
                        </div>
                        <div class="quiz-count">
                            <i class="fas fa-check-circle"></i>
                            ${course.quizzesPassed} of ${course.quizzesTaken} quizzes passed
                        </div>
                        <div class="course-progress-bar">
                            <div class="progress-fill" style="width: ${course.successRate}%"></div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function generateProgressTrendSection(analytics) {
    if (!analytics.progressTrend.trend.length) {
        return `
            <div class="performance-section">
                <h3><i class="fas fa-chart-line"></i> Progress Trend</h3>
                <div class="empty-state">Not enough data to show progress</div>
            </div>
        `;
    }

    const improvement = analytics.progressTrend.improvement;
    const improvementText = improvement.percentage > 0 
        ? `<span class="positive">+${improvement.percentage}%</span> improvement`
        : improvement.percentage < 0 
            ? `<span class="negative">${improvement.percentage}%</span> decline`
            : 'No change';

    return `
        <div class="performance-section">
            <h3><i class="fas fa-chart-line"></i> Progress Trend</h3>
            <div class="progress-stats">
                <div class="progress-info">
                    <div class="progress-metric">
                        <span class="metric-label">Overall Progress:</span>
                        <span class="metric-value">${improvementText}</span>
                    </div>
                    <div class="progress-metric">
                        <span class="metric-label">Additional Passes:</span>
                        <span class="metric-value ${improvement.count >= 0 ? 'positive' : 'negative'}">
                            ${improvement.count > 0 ? '+' : ''}${improvement.count}
                        </span>
                    </div>
                </div>
                <div class="progress-chart">
                    <canvas id="progressChart"></canvas>
                </div>
            </div>
        </div>
    `;
}

function generateTimeAnalysisSection(analytics) {
    if (!analytics.timeAnalysis) {
        return `
            <div class="performance-section">
                <h3><i class="fas fa-clock"></i> Time Analysis</h3>
                <div class="empty-state">Not enough time data available</div>
            </div>
        `;
    }

    const { averageTime, bestTimeOfDay, timeVsScore } = analytics.timeAnalysis;

    return `
        <div class="performance-section">
            <h3><i class="fas fa-clock"></i> Time Analysis</h3>
            <div class="time-analysis-grid">
                <div class="time-stat-card">
                    <div class="time-stat-icon">
                        <i class="fas fa-stopwatch"></i>
                    </div>
                    <div class="time-stat-info">
                        <div class="time-stat-value">${averageTime} min</div>
                        <div class="time-stat-label">Average Quiz Time</div>
                    </div>
                </div>
                <div class="time-stat-card">
                    <div class="time-stat-icon">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div class="time-stat-info">
                        <div class="time-stat-value">${bestTimeOfDay}</div>
                        <div class="time-stat-label">Best Time of Day</div>
                    </div>
                </div>
                <div class="time-stat-card">
                    <div class="time-stat-icon">
                        <i class="fas fa-tachometer-alt"></i>
                    </div>
                    <div class="time-stat-info">
                        <div class="time-stat-value">
                            ${timeVsScore.averageScore}% in ${timeVsScore.averageTime}min
                        </div>
                        <div class="time-stat-label">Average Performance</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initializeCharts(analytics) {
    const chartCanvas = document.querySelector('#progressChart');
    if (!chartCanvas) return;

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
                fill: true,
                pointBackgroundColor: '#fff',
                pointBorderColor: '#6366f1',
                pointRadius: 4,
                pointHoverRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#fff',
                    bodyColor: '#94a3b8',
                    borderColor: '#334155',
                    borderWidth: 1,
                    padding: 12
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(51, 65, 85, 0.1)'
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                },
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: '#94a3b8'
                    }
                }
            }
        }
    });
} 