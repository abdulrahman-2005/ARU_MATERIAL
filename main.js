let run = false;

function addMidtermMessageToFiles(meta_data) {
    if (run) {
        return meta_data; // Return the data if already run
    }

    const midterm_included_data = meta_data["midterm_included_files"];

    run = true;

    const message = {
        "type": "midterm-included",
        "text": "في الميييييييييييد 💔💔💔"
    }

    for (const course_id in midterm_included_data) {
        let COURSE_ID;

        for (const cid in meta_data["courses"]) {
            if (meta_data["courses"][cid]["code"] === course_id) {
                COURSE_ID = cid;
                break;
            }
        }

        if (COURSE_ID) { // Only proceed if we found a matching course
            const course_files = meta_data["courses"][COURSE_ID]["files"];

            for (let file of course_files) {
                for (const qid of midterm_included_data[course_id]) {
                    const fileTitle = file.title.toLowerCase().replace(/\s/g, '');
                    if (
                        fileTitle.includes(`lecture${qid}`) ||
                        fileTitle.includes(`section${qid}`)
                    ) {
                        if (!file["messages"]) {
                            file["messages"] = [];
                        }
                        file["messages"].push(message);
                    }
                }
            }
        }
    }

    return meta_data; // Return the modified data
}


try {
    DATA = addMidtermMessageToFiles(DATA);
} catch (e) {
    console.error(e);
}

