let run = false;

function getCourses(meta_data) {
    return meta_data["courses"];
}

function getCoursesArray(meta_data) {
    const courses = getCourses(meta_data);
    const coursesArray = [];
    Object.keys(courses).forEach(key => {
        coursesArray.push(courses[key]);
    });
    return coursesArray;
}

function getCourseFiles(course) {
    return course["files"];
}

function getCourseByCode(meta_data, code) {
    const courses = getCourses(meta_data);
    for (const course of courses) {
        if (course["code"] === code) {
            return course;
        }
    }
    return null;
}

function getDataFromCourse(meta_data, course_code, data_key) {
    const course = getCourseByCode(meta_data, course_code);
    if (!course) {
        return null;
    }
    return course[data_key];
}

function addMidtermMessageToFiles(meta_data) {
    if (run) { return meta_data; }

    run = true;

    const message = {
        "type": "midterm-included",
        "text": "في الميييييييييييد 💔💔💔"
    }

    const structures = [
        { source: "midterm_included_lectures", filePrefix: "lecture" },
        { source: "midterm_included_sections", filePrefix: "section" }
    ];

    structures.forEach(structure => {
        const { source, filePrefix } = structure;
        const midtermIncludedData = meta_data[source];

        if (!midtermIncludedData) return; // Skip if this source doesn't exist

        for (const course_id in midtermIncludedData) {
            let COURSE_ID;

            // Find the matching course ID
            for (const cid in meta_data["courses"]) {
                if (meta_data["courses"][cid]["code"] === course_id) {
                    COURSE_ID = cid;
                    break;
                }
            }

            if (!COURSE_ID) continue;

            const course_files = meta_data["courses"][COURSE_ID]["files"];

            for (let file of course_files) {
                for (const qid of midtermIncludedData[course_id]) {
                    const fileTitle = file.title.toLowerCase().replace(/\s/g, '');
                    if (fileTitle.includes(`${filePrefix}${qid}`)) {
                        if (!file["messages"]) {
                            file["messages"] = [];
                        }
                        file["messages"].push({ ...message }); // Use spread to create a new object
                    }
                }
            }
        }
    });

    return meta_data;
}


function getTotalWordCount(meta_data) {
    let totalWords = 0;
    const courses = getCoursesArray(meta_data);
    for (const course of courses) {
        const files = getCourseFiles(course);
        for (const file of files) {
            if (file["wordCount"]) {
                totalWords += file["wordCount"];
            }
        }
    }
}



try {
    DATA = addMidtermMessageToFiles(DATA);
    const totalWords = getTotalWordCount(DATA);
    console.log(`Total word count: ${totalWords}`);
} catch (e) {
    console.error(e);
}


const version = JSON.parse(localStorage.getItem("MATERIAL_FCI_VERSION"));
DATA.metadata.version = version;



