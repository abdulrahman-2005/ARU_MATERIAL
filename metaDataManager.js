
class AcademicDataManager {
    constructor(data) {
        this.data = JSON.parse(JSON.stringify(data));
        this.history = [JSON.parse(JSON.stringify(data))];
        this.historyIndex = 0;
    }

    _saveState() {

        if (this.historyIndex < this.history.length - 1) {
            this.history = this.history.slice(0, this.historyIndex + 1);
        }


        this.history.push(JSON.parse(JSON.stringify(this.data)));
        this.historyIndex = this.history.length - 1;


        if (this.history.length > 50) {
            this.history.shift();
            this.historyIndex--;
        }
    }

    undo() {
        if (this.historyIndex > 0) {
            this.historyIndex--;
            this.data = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
        }
        return this.data;
    }

    redo() {
        if (this.historyIndex < this.history.length - 1) {
            this.historyIndex++;
            this.data = JSON.parse(JSON.stringify(this.history[this.historyIndex]));
        }
        return this.data;
    }

    getData() {
        return JSON.parse(JSON.stringify(this.data));
    }
    setData(newData) {
        this._saveState();
        this.data = JSON.parse(JSON.stringify(newData));
        return this.data;
    }


    getAllCourses() {
        return JSON.parse(JSON.stringify(this.data.courses));
    }

    getCourse(courseId) {
        return this.data.courses[courseId] ?
            JSON.parse(JSON.stringify(this.data.courses[courseId])) : null;
    }

    getCourseByCode(courseCode) {
        const courseId = Object.keys(this.data.courses).find(
            id => this.data.courses[id].code === courseCode
        );
        return courseId ? this.getCourse(courseId) : null;
    }

 
    addCourse(courseId, courseData) {
        if (this.data.courses[courseId]) {
            throw new Error(`Course with ID ${courseId} already exists`);
        }

        this._saveState();
        this.data.courses[courseId] = courseData;
        return this.data;
    }

    updateCourse(courseId, courseData) {
        if (!this.data.courses[courseId]) {
            throw new Error(`Course with ID ${courseId} does not exist`);
        }

        this._saveState();
        this.data.courses[courseId] = { ...this.data.courses[courseId], ...courseData };
        return this.data;
    }


    deleteCourse(courseId) {
        if (!this.data.courses[courseId]) {
            throw new Error(`Course with ID ${courseId} does not exist`);
        }

        this._saveState();


        Object.keys(this.data.schedule).forEach(scheduleId => {
            if (this.data.schedule[scheduleId].course_id === courseId) {
                delete this.data.schedule[scheduleId];
            }
        });


        delete this.data.courses[courseId];
        return this.data;
    }

    addCourseFile(courseId, fileData) {
        if (!this.data.courses[courseId]) {
            throw new Error(`Course with ID ${courseId} does not exist`);
        }

        this._saveState();

        if (!this.data.courses[courseId].files) {
            this.data.courses[courseId].files = [];
        }

        this.data.courses[courseId].files.push(fileData);
        return this.data;
    }

    updateCourseFile(courseId, fileIndex, fileData) {
        if (!this.data.courses[courseId]) {
            throw new Error(`Course with ID ${courseId} does not exist`);
        }

        if (!this.data.courses[courseId].files ||
            !this.data.courses[courseId].files[fileIndex]) {
            throw new Error(`File at index ${fileIndex} does not exist in course ${courseId}`);
        }

        this._saveState();
        this.data.courses[courseId].files[fileIndex] = {
            ...this.data.courses[courseId].files[fileIndex],
            ...fileData
        };

        return this.data;
    }

    deleteCourseFile(courseId, fileIndex) {
        if (!this.data.courses[courseId]) {
            throw new Error(`Course with ID ${courseId} does not exist`);
        }

        if (!this.data.courses[courseId].files ||
            !this.data.courses[courseId].files[fileIndex]) {
            throw new Error(`File at index ${fileIndex} does not exist in course ${courseId}`);
        }

        this._saveState();
        this.data.courses[courseId].files.splice(fileIndex, 1);
        return this.data;
    }


    getAllInstructors() {
        return JSON.parse(JSON.stringify(this.data.instructors));
    }

    getInstructor(instructorId) {
        return this.data.instructors[instructorId] ?
            JSON.parse(JSON.stringify(this.data.instructors[instructorId])) : null;
    }

    addInstructor(instructorId, instructorData) {
        if (this.data.instructors[instructorId]) {
            throw new Error(`Instructor with ID ${instructorId} already exists`);
        }

        this._saveState();
        this.data.instructors[instructorId] = instructorData;
        return this.data;
    }

    updateInstructor(instructorId, instructorData) {
        if (!this.data.instructors[instructorId]) {
            throw new Error(`Instructor with ID ${instructorId} does not exist`);
        }

        this._saveState();
        this.data.instructors[instructorId] = {
            ...this.data.instructors[instructorId],
            ...instructorData
        };

        return this.data;
    }

    deleteInstructor(instructorId) {
        if (!this.data.instructors[instructorId]) {
            throw new Error(`Instructor with ID ${instructorId} does not exist`);
        }

        this._saveState();


        Object.keys(this.data.courses).forEach(courseId => {
            const course = this.data.courses[courseId];
            if (course.instructors && course.instructors.includes(instructorId)) {
                course.instructors = course.instructors.filter(id => id !== instructorId);
            }
        });


        Object.keys(this.data.schedule).forEach(scheduleId => {
            if (this.data.schedule[scheduleId].instructor_id === instructorId) {
                delete this.data.schedule[scheduleId];
            }
        });


        delete this.data.instructors[instructorId];
        return this.data;
    }



    getAllScheduleEntries() {
        return JSON.parse(JSON.stringify(this.data.schedule));
    }

    getScheduleByDay(dayId) {
        const entries = Object.entries(this.data.schedule)
            .filter(([_, entry]) => entry.day_id === dayId)
            .map(([id, entry]) => ({ id, ...entry }));

        return JSON.parse(JSON.stringify(entries));
    }

    getScheduleByCourse(courseId) {
        const entries = Object.entries(this.data.schedule)
            .filter(([_, entry]) => entry.course_id === courseId)
            .map(([id, entry]) => ({ id, ...entry }));

        return JSON.parse(JSON.stringify(entries));
    }


    getScheduleByInstructor(instructorId) {
        const entries = Object.entries(this.data.schedule)
            .filter(([_, entry]) => entry.instructor_id === instructorId)
            .map(([id, entry]) => ({ id, ...entry }));

        return JSON.parse(JSON.stringify(entries));
    }


    addScheduleEntry(scheduleId, scheduleData) {
        if (this.data.schedule[scheduleId]) {
            throw new Error(`Schedule entry with ID ${scheduleId} already exists`);
        }


        const conflicts = Object.values(this.data.schedule).filter(entry =>
            entry.day_id === scheduleData.day_id &&
            entry.time_slot_id === scheduleData.time_slot_id
        );

        if (conflicts.length > 0) {
            throw new Error(`Time slot conflict: This day and time already has a scheduled class`);
        }

        this._saveState();
        this.data.schedule[scheduleId] = scheduleData;
        return this.data;
    }

    updateScheduleEntry(scheduleId, scheduleData) {
        if (!this.data.schedule[scheduleId]) {
            throw new Error(`Schedule entry with ID ${scheduleId} does not exist`);
        }


        if (scheduleData.day_id || scheduleData.time_slot_id) {
            const newDayId = scheduleData.day_id || this.data.schedule[scheduleId].day_id;
            const newTimeSlotId = scheduleData.time_slot_id || this.data.schedule[scheduleId].time_slot_id;

            const conflicts = Object.entries(this.data.schedule).filter(([id, entry]) =>
                id !== scheduleId &&
                entry.day_id === newDayId &&
                entry.time_slot_id === newTimeSlotId
            );

            if (conflicts.length > 0) {
                throw new Error(`Time slot conflict: This day and time already has a scheduled class`);
            }
        }

        this._saveState();
        this.data.schedule[scheduleId] = {
            ...this.data.schedule[scheduleId],
            ...scheduleData
        };

        return this.data;
    }

    deleteScheduleEntry(scheduleId) {
        if (!this.data.schedule[scheduleId]) {
            throw new Error(`Schedule entry with ID ${scheduleId} does not exist`);
        }

        this._saveState();
        delete this.data.schedule[scheduleId];
        return this.data;
    }


    searchCourses(query) {
        if (!query) return [];

        const normalizedQuery = query.toLowerCase();

        return Object.entries(this.data.courses)
            .filter(([_, course]) =>
                course.name.toLowerCase().includes(normalizedQuery) ||
                course.code.toLowerCase().includes(normalizedQuery)
            )
            .map(([id, course]) => ({ id, ...course }));
    }

    searchInstructors(query) {
        if (!query) return [];

        const normalizedQuery = query.toLowerCase();

        return Object.entries(this.data.instructors)
            .filter(([_, instructor]) =>
                instructor.name.toLowerCase().includes(normalizedQuery)
            )
            .map(([id, instructor]) => ({ id, ...instructor }));
    }

    searchFiles(query) {
        if (!query) return [];

        const normalizedQuery = query.toLowerCase();
        const results = [];

        Object.entries(this.data.courses).forEach(([courseId, course]) => {
            if (!course.files) return;

            course.files.forEach((file, index) => {
                if (file.title.toLowerCase().includes(normalizedQuery)) {
                    results.push({
                        courseId,
                        courseName: course.name,
                        courseCode: course.code,
                        fileIndex: index,
                        ...file
                    });
                }
            });
        });

        return results;
    }

    countCourses() {
        return Object.keys(this.data.courses).length;
    }


    countInstructors() {
        return Object.keys(this.data.instructors).length;
    }

    countFiles() {
        let count = 0;
        Object.values(this.data.courses).forEach(course => {
            if (course.files) {
                count += course.files.length;
            }
        });
        return count;
    }

    countScheduleEntries() {
        return Object.keys(this.data.schedule).length;
    }


    getInstructorLoadStats() {
        const stats = {};


        Object.keys(this.data.instructors).forEach(instructorId => {
            stats[instructorId] = {
                name: this.data.instructors[instructorId].name,
                title: this.data.instructors[instructorId].title,
                courseCount: 0,
                lectureCount: 0,
                sectionCount: 0,
                courses: []
            };
        });


        Object.values(this.data.schedule).forEach(entry => {
            const instructorId = entry.instructor_id;
            if (stats[instructorId]) {
                const courseId = entry.course_id;
                const course = this.data.courses[courseId];
                const sessionType = this.data.session_types[entry.session_type_id];

                if (!stats[instructorId].courses.includes(courseId)) {
                    stats[instructorId].courses.push(courseId);
                    stats[instructorId].courseCount++;
                }

                if (sessionType === "Lecture") {
                    stats[instructorId].lectureCount++;
                } else if (sessionType === "Section") {
                    stats[instructorId].sectionCount++;
                }
            }
        });

        return stats;
    }

    getCourseStats() {
        return Object.entries(this.data.courses).map(([id, course]) => {
            const lectureCount = course.files ?
                course.files.filter(file => file.type === "lecture").length : 0;

            const sectionCount = course.files ?
                course.files.filter(file => file.type === "section").length : 0;

            const totalWordCount = course.files ?
                course.files.reduce((sum, file) => sum + (file.wordCount || 0), 0) : 0;

            const scheduleEntries = Object.values(this.data.schedule)
                .filter(entry => entry.course_id === id);

            const scheduledLectureCount = scheduleEntries
                .filter(entry => this.data.session_types[entry.session_type_id] === "Lecture")
                .length;

            const scheduledSectionCount = scheduleEntries
                .filter(entry => this.data.session_types[entry.session_type_id] === "Section")
                .length;

            return {
                id,
                code: course.code,
                name: course.name,
                creditHours: course.credit_hours,
                instructors: course.instructors ? course.instructors.map(instId => ({
                    id: instId,
                    name: this.data.instructors[instId]?.name,
                    title: this.data.instructors[instId]?.title
                })) : [],
                lectureCount,
                sectionCount,
                totalWordCount,
                scheduledLectureCount,
                scheduledSectionCount,
                hasFiles: course.files && course.files.length > 0,
                fileCount: course.files ? course.files.length : 0
            };
        });
    }

    getScheduleStatsByDay() {
        const stats = {};

        Object.keys(this.data.days).forEach(dayId => {
            stats[dayId] = {
                name: this.data.days[dayId],
                totalSessions: 0,
                lectures: 0,
                sections: 0,
                timeSlots: {}
            };


            Object.keys(this.data.time_slots).forEach(timeSlotId => {
                stats[dayId].timeSlots[timeSlotId] = {
                    time: this.data.time_slots[timeSlotId],
                    isOccupied: false,
                    courseId: null,
                    courseName: null,
                    instructorId: null,
                    instructorName: null,
                    sessionType: null
                };
            });
        });


        Object.values(this.data.schedule).forEach(entry => {
            const dayId = entry.day_id;
            const timeSlotId = entry.time_slot_id;
            const courseId = entry.course_id;
            const instructorId = entry.instructor_id;
            const sessionTypeId = entry.session_type_id;

            stats[dayId].totalSessions++;

            const sessionType = this.data.session_types[sessionTypeId];
            if (sessionType === "Lecture") {
                stats[dayId].lectures++;
            } else if (sessionType === "Section") {
                stats[dayId].sections++;
            }

            stats[dayId].timeSlots[timeSlotId] = {
                time: this.data.time_slots[timeSlotId],
                isOccupied: true,
                courseId,
                courseName: this.data.courses[courseId]?.name,
                courseCode: this.data.courses[courseId]?.code,
                instructorId,
                instructorName: this.data.instructors[instructorId]?.name,
                sessionType
            };
        });

        return stats;
    }

    getMidtermIncludedLectures(courseCode) {
        return this.data.midterm_included_lectures[courseCode] || null;
    }

    updateMidtermIncludedLectures(courseCode, lectureIndices) {
        this._saveState();
        this.data.midterm_included_lectures[courseCode] = lectureIndices;
        return this.data;
    }

    getMidtermIncludedSections(courseCode) {
        return this.data.midterm_included_sections[courseCode] || null;
    }
    updateMidtermIncludedSections(courseCode, sectionIndices) {
        this._saveState();
        this.data.midterm_included_sections[courseCode] = sectionIndices;
        return this.data;
    }
    getMetadata() {
        return JSON.parse(JSON.stringify(this.data.metadata));
    }
    updateMetadata(metadata) {
        this._saveState();
        this.data.metadata = { ...this.data.metadata, ...metadata };
        return this.data;
    }
    getDeveloperInfo() {
        return JSON.parse(JSON.stringify(this.data.developer));
    }
    updateDeveloperInfo(developerInfo) {
        this._saveState();
        this.data.developer = { ...this.data.developer, ...developerInfo };
        return this.data;
    }
    exportToJSON() {
        return JSON.stringify(this.data, null, 2);
    }

    importFromJSON(jsonString) {
        try {
            const newData = JSON.parse(jsonString);
            this._saveState();
            this.data = newData;
            return this.data;
        } catch (error) {
            throw new Error(`Invalid JSON: ${error.message}`);
        }
    }
}

function createDataManager(data) {
    return new AcademicDataManager(data);
}

function generateUniqueId(prefix, existingIds) {
    let highestNum = 0;

    existingIds.forEach(id => {
        if (id.startsWith(prefix)) {
            const num = parseInt(id.substring(prefix.length), 10);
            if (!isNaN(num) && num > highestNum) {
                highestNum = num;
            }
        }
    });

    const newNum = highestNum + 1;
    const paddedNum = String(newNum).padStart(3, '0');
    return `${prefix}${paddedNum}`;
}

