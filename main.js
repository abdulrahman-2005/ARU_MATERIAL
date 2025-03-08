let run = false;

function addMidtermMessageToFiles(meta_data) {
    if (run) {
        return meta_data; // Return the data if already run
    }
    
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
            
            if (!COURSE_ID) continue; // Skip if course not found
            
            const course_files = meta_data["courses"][COURSE_ID]["files"];
            
            for (let file of course_files) {
                for (const qid of midtermIncludedData[course_id]) {
                    const fileTitle = file.title.toLowerCase().replace(/\s/g, '');
                    if (fileTitle.includes(`${filePrefix}${qid}`)) {
                        if (!file["messages"]) {
                            file["messages"] = [];
                        }
                        file["messages"].push({...message}); // Use spread to create a new object
                    }
                }
            }
        }
    });
    
    return meta_data;
}

try {
    DATA = addMidtermMessageToFiles(DATA);
} catch (e) {
    console.error(e);
}


const version = JSON.parse(localStorage.getItem("MATERIAL_FCI_VERSION"));
DATA.metadata.version = version;

