class AccountSystem {
    constructor() {
        this.LOCAL_STORAGE_KEY = 'ARU_UNI_MATERIAL_FCI_ACCOUNT';
        this.currentUser = this.loadUser() || this.createDefaultUser();
        this.initializeUI();
        this.id = window.location.pathname.split('/')[1];
        this.id = this.id.toUpperCase();


        const oldData = localStorage.getItem("userData");
        if (oldData) {
            const newData = JSON.parse(oldData);
            this.currentUser["Y2T2"] = newData;
            localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.currentUser));
            localStorage.removeItem("userData");
        }

    }

    loadUser() {
        return JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
    }

    createDefaultUser() {
        return {
            "Y1T2": {
                "quizResults": {}
            },
            "Y2T2": {
                "quizResults": {}
            },
            "Y3T2": {
                "quizResults": {}
            },
            "Y4T2": {
                "quizResults": {}
            },
            
        };
    }

    initializeUI() {
        const header = document.querySelector('header .header-content');
    }

    countPassedQuizzes(results) {
        return Object.values(results).filter(result => result.passed).length;
    }
    
    getQuizAnalytics() {
        console.log(this.currentUser);
        const results = this.currentUser[this.id].quizResults;
        const coursePerformance = this.getCoursePerformance(results);
        const timeAnalysis = this.getTimeAnalysis(results);
        const progressTrend = this.getProgressTrend(results);
        const accuracy = this.calculateAccuracy(results);
        
        return {
            totalQuizzes: Object.keys(results).length,
            averageScore: this.calculateAverageScore(results),
            quizzesPassed: this.countPassedQuizzes(results),
            recentQuizzes: this.getRecentQuizzes(results),
            coursePerformance,
            timeAnalysis,
            progressTrend,
            accuracy
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

    calculateAccuracy(results) {
        if (Object.keys(results).length === 0) return 0;
        
        const totalQuestions = Object.values(results).reduce((acc, curr) => 
            acc + (curr.correctAnswers + curr.wrongAnswers), 0);
        const totalCorrect = Object.values(results).reduce((acc, curr) => 
            acc + curr.correctAnswers, 0);
        
        return totalQuestions > 0 ? (totalCorrect / totalQuestions) * 100 : 0;
    }

    saveQuizResult(quizId, result) {
        this.currentUser[this.id].quizResults[quizId] = {
            ...result,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.currentUser));
    }
}

// Initialize account system
const accountSystem = new AccountSystem(); 