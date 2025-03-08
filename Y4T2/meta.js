let DATA = {
    "metadata": {
        "institution_id": "ARISH_001",
        "institution_name": "ARISH University",
        "faculty_id": "FAC_001",
        "faculty_name": "Faculty of Computers and Information",
        "level": 4,
        "term": 2,
        "schedule_type": "Face to Face",
        "version": "2.0.0-alpha",
    },
    "developer": {
        "name": "Abdelrahman Azmy",
        "role": "Software Developer",
        "website": "https://abdoazmy.netlify.app",
        "social": {
            "github": "https://github.com/AbdelrahmanAzmy",
            "linkedin": "https://linkedin.com/in/abdelrahman-azmy",
            "globe": "https://abdoazmy.netlify.app"
        },
        "description": "Passionate about creating intuitive and efficient web applications"
    },
    "session_types": {
        "ST_001": "Lecture",
        "ST_002": "Section"
    },
    "instructors": {
        "INS_001": {
            "name": "Sample Instructor",
            "title": "Ass.lec. or Dr.",
            "department_id": "DEP_001"
        }
    },
    "contributors": {
        "CON_001": {
            "name": "Sample Contributor"
        }
    },
    "courses": {
        "CRS_001": {
            "name": "SAMEPLE COURSE",
            "code": "SAMPLE COURSE CODE",
            "credit_hours": 3,
            "instructors": ["INSTRUCTOR IDS"],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "SAMPLE LECTURE TITLE",
                    "src": "SAMPLE LECTURE SOURCE",
                    "type": "lecture or section",
                    "quizzes": ["QUIZ IDS"],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                }
            ]
        },
    },
    "time_slots": {
        "TS_001": "8-10",
        "TS_002": "10-12",
        "TS_003": "12-2",
        "TS_004": "2-4"
    },
    "days": {
        "D_001": "Saturday",
        "D_002": "Sunday",
        "D_003": "Monday",
        "D_004": "Tuesday",
        "D_005": "Wednesday"
    },
    "schedule": {
        "SCH_001": {
            "day_id": "D_001",
            "time_slot_id": "TS_001",
            "course_id": "CRS_001",
            "instructor_id": "INSTRUCTOR ID",
            "session_type_id": "SESSION TYPE ID"
        }
    }
}


const QUIZ_DATA = {
    "QZ_001": {
        "title": "SAMPLE QUIZ TITLE",
        "course_id": "SAMPLE COURSE ID",
        "related_file": "SAMPLE RELATED FILE",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "SAMPLE QUESTION TEXT",
                "type": "multiple_choice",
                "options": [
                    "SAMPLE OPTION A",
                    "SAMPLE OPTION B",
                    "SAMPLE OPTION C",
                    "SAMPLE OPTION D"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "SAMPLE EXPLANATION"
            }
        ],
        "instructions": [
            "You have 10 minutes to complete this quiz",
            "Each question is worth 2 points",
            "You need 70% to pass",
            "All questions must be answered before submission",
            "Questions and answers are randomized for each attempt"
        ]
    },
    
}