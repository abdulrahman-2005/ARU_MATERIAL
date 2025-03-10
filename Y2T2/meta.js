let DATA = {
    "metadata": {
        "institution_id": "ARISH_001",
        "institution_name": "ARISH University",
        "faculty_id": "FAC_001",
        "faculty_name": "Faculty of Computers and Information",
        "level": 2,
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
    },
    "midterm_included_lectures": {
        "IS101": [1, 2, 3],
        "DS101": [1, 2, 3, 4],
        "SE101": [1, 2, 3],
        "DB101": [1, 2, 3],
        "SAD101": [1, 2, 3],
        "NET101": [1, 2, 3],
        "ALG101": [0, 1],
    },
    "midterm_included_sections": {
        "NET101": [1, 2, 3],
        "ALG101": [0, 1],
    },
    "session_types": {
        "ST_001": "Lecture",
        "ST_002": "Section"
    },
    "instructors": {
        "INS_001": {
            "name": "Bothaina hussien",
            "title": "Ass.lec.",
            "department_id": "DEP_001"
        },
        "INS_002": {
            "name": "Shymaa Saad",
            "title": "Ass.lec.",
            "department_id": "DEP_001"
        },
        "INS_003": {
            "name": "Asmaa Gad",
            "title": "Dr.",
            "department_id": "DEP_001"
        },
        "INS_004": {
            "name": "Hossam Fawzan",
            "title": "Dr.",
            "department_id": "DEP_001"
        },
        "INS_005": {
            "name": "Mona Abbas",
            "title": "Dr.",
            "department_id": "DEP_001"
        },
        "INS_006": {
            "name": "Mohamed Gamal",
            "title": "Dr.",
            "department_id": "DEP_001"
        },
        "INS_007": {
            "name": "Sara Marwan",
            "title": "Eng.",
            "department_id": "DEP_001"
        },
        "INS_008": {
            "name": "Eslam Elsaba",
            "title": "Eng.",
            "department_id": "DEP_001"
        },
        "INS_009": {
            "name": "Gaber Hassan",
            "title": "Dr.",
            "department_id": "DEP_001"
        },
        "INS_010": {
            "name": "Eman Abd El-maksoud",
            "title": "Dr.",
            "department_id": "DEP_001"
        }
    },
    "contributors": {
        "CON_001": {
            "name": "Mostafa Tamer Zahran"
        },
        "CON_002": {
            "name": "Saad Mohamed Saad"
        }
    },
    "courses": {
        "CRS_001": {
            "name": "Introduction to Database Systems",
            "code": "DB101",
            "credit_hours": 3,
            "instructors": [
                "INS_001",
                "INS_005"
            ],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Introduction to DBMS",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_001"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 1561
                },
                {
                    "title": "Lecture 2: Database System Concepts and Architecture",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 1398
                }
            ]
        },
        "CRS_002": {
            "name": "Introduction to Information System",
            "code": "IS101",
            "credit_hours": 3,
            "instructors": [
                "INS_001",
                "INS_010"
            ],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Information Systems Overview",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_002"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 1529
                },
                {
                    "title": "Lecture 2: Introduction to Information Systems",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_015"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 21
                },
                {
                    "title": "Lecture 3: System Development Methodologies",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 184
                },
                {
                    "title": "Lecture 4: SLDS steps",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 1688
                }
            ]
        },
        "CRS_003": {
            "name": "Introduction to Software Engineering",
            "code": "SE101",
            "credit_hours": 3,
            "instructors": [
                "INS_002",
                "INS_004"
            ],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Introduction to Software Engineering",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_005"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 3022
                },
                {
                    "title": "Lecture 2: SOFTWARE PROCESSES",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_006"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 2882
                },
                {
                    "title": "Lecture 3: Requirements Engineering",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_007"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 3183
                },
                {
                    "title": "Lecture 4: System Modeling",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_008"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 2161
                },
                {
                    "title": "Section 1: Lab 1 UML, SRS",
                    "src": "Section1.pdf",
                    "type": "section",
                    "quizzes": [
                        "QZ_009"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 1489
                },
                {
                    "title": "Section 2: Lab 2",
                    "src": "Section2.pdf",
                    "type": "section",
                    "quizzes": [
                        "QZ_010"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 3998
                },
                {
                    "title": "ATM Software Summary",
                    "src": "ATMSoftware.pdf",
                    "type": "contribution",
                    "contributors": [
                        "CON_001",
                        "CON_002"
                    ],
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 1332
                },
                {
                    "title": "Section 3: ENTITY RELATIONSHIP DIAGRAM",
                    "src": "Section3.pdf",
                    "type": "section",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 1840
                },
                {
                    "title": "Section 4: Use Case Diagram using Rational Rose or smart draw",
                    "src": "Section4.pdf",
                    "type": "section",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 2613
                }
            ]
        },
        "CRS_004": {
            "name": "Analysis and Design of Algorithm",
            "code": "ALG101",
            "credit_hours": 3,
            "instructors": [
                "INS_002",
                "INS_006"
            ],
            "has_lecture": true,
            "has_section": true,
            "files": []
        },
        "CRS_005": {
            "name": "Data Structure",
            "code": "DS101",
            "credit_hours": 3,
            "instructors": [
                "INS_003",
                "INS_008"
            ],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Introduction to Data Structures",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_011"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 2723
                },
                {
                    "title": "Lecture 2: Introduction (2)",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_012"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 3037
                },
                {
                    "title": "Lecture 3: Arrays and Linked Lists",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_013"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 1717
                },
                {
                    "title": "Lecture 4:  Circular and Doubly Linked Lists",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_014"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 1940
                },
                {
                    "title": "Section 3: Linked Lists",
                    "src": "Section3.pdf",
                    "type": "section",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 147
                }
            ]
        },
        "CRS_006": {
            "name": "Introduction to System Analysis and Design",
            "code": "SAD101",
            "credit_hours": 3,
            "instructors": [
                "INS_005",
                "INS_007"
            ],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Introduction to System Analysis and Design",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_004"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 1105
                },
                {
                    "title": "Lecture 2",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 883
                },
                {
                    "title": "Lecture 3",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 813
                }
            ]
        },
        "CRS_007": {
            "name": "Introduction to Computer network",
            "code": "NET101",
            "credit_hours": 3,
            "instructors": [
                "INS_008",
                "INS_009"
            ],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Network Fundamentals",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_003"
                    ],
                    "messages": [
                        {
                            "type": "quiz-available",
                            "text": "Quiz available for this lecture"
                        }
                    ],
                    "wordCount": 1023
                },
                {
                    "title": "Lecture 2: Network Models",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 1743
                },
                {
                    "title": "Lecture 3: Physical Layer",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 1334
                },
                {
                    "title": "Lecture 4: DataLink Layer",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": [],
                    "messages": [],
                    "wordCount": 591
                }
            ]
        }
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
            "instructor_id": "INS_001",
            "session_type_id": "ST_002"
        },
        "SCH_002": {
            "day_id": "D_001",
            "time_slot_id": "TS_002",
            "course_id": "CRS_002",
            "instructor_id": "INS_001",
            "session_type_id": "ST_002"
        },
        "SCH_003": {
            "day_id": "D_001",
            "time_slot_id": "TS_003",
            "course_id": "CRS_003",
            "instructor_id": "INS_002",
            "session_type_id": "ST_002"
        },
        "SCH_004": {
            "day_id": "D_002",
            "time_slot_id": "TS_002",
            "course_id": "CRS_004",
            "instructor_id": "INS_002",
            "session_type_id": "ST_002"
        },
        "SCH_005": {
            "day_id": "D_002",
            "time_slot_id": "TS_003",
            "course_id": "CRS_005",
            "instructor_id": "INS_003",
            "session_type_id": "ST_001"
        },
        "SCH_006": {
            "day_id": "D_002",
            "time_slot_id": "TS_004",
            "course_id": "CRS_003",
            "instructor_id": "INS_004",
            "session_type_id": "ST_001"
        },
        "SCH_007": {
            "day_id": "D_003",
            "time_slot_id": "TS_001",
            "course_id": "CRS_006",
            "instructor_id": "INS_005",
            "session_type_id": "ST_001"
        },
        "SCH_008": {
            "day_id": "D_003",
            "time_slot_id": "TS_002",
            "course_id": "CRS_001",
            "instructor_id": "INS_005",
            "session_type_id": "ST_001"
        },
        "SCH_009": {
            "day_id": "D_003",
            "time_slot_id": "TS_003",
            "course_id": "CRS_004",
            "instructor_id": "INS_006",
            "session_type_id": "ST_001"
        },
        "SCH_010": {
            "day_id": "D_004",
            "time_slot_id": "TS_001",
            "course_id": "CRS_006",
            "instructor_id": "INS_007",
            "session_type_id": "ST_002"
        },
        "SCH_011": {
            "day_id": "D_004",
            "time_slot_id": "TS_002",
            "course_id": "CRS_005",
            "instructor_id": "INS_008",
            "session_type_id": "ST_002"
        },
        "SCH_012": {
            "day_id": "D_004",
            "time_slot_id": "TS_003",
            "course_id": "CRS_007",
            "instructor_id": "INS_008",
            "session_type_id": "ST_002"
        },
        "SCH_013": {
            "day_id": "D_005",
            "time_slot_id": "TS_001",
            "course_id": "CRS_007",
            "instructor_id": "INS_009",
            "session_type_id": "ST_001"
        },
        "SCH_014": {
            "day_id": "D_005",
            "time_slot_id": "TS_002",
            "course_id": "CRS_002",
            "instructor_id": "INS_010",
            "session_type_id": "ST_001"
        }
    }
}


const QUIZ_DATA = {
    "QZ_001": {
        "title": "Database Fundamentals Quiz",
        "course_id": "DB101",
        "related_file": "DB101_Lecture1.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the relationship between a database and its mini-world?",
                "type": "multiple_choice",
                "options": [
                    "A database is an exact duplicate of the mini-world it represents",
                    "A database stores known facts about some part of the real world (mini-world)",
                    "The mini-world is a simplified model of the database",
                    "A database and its mini-world are independent systems with no direct relationship"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "As defined in the lecture, a database is 'a collection of related data' where data represents 'known facts that can be recorded and have an implicit meaning.' The mini-world is 'some part of the real world about which data is stored in a database.' Therefore, a database stores information about the mini-world it represents."
            },
            {
                "id": "Q2",
                "text": "In a relational database, what is the relationship between tables, fields, and records?",
                "type": "multiple_choice",
                "options": [
                    "Tables contain fields; fields contain records",
                    "Records contain tables; tables contain fields",
                    "Tables contain records; records contain fields",
                    "Tables contain records; records consist of fields"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "In an RDBMS, tables are collections of related data entries consisting of rows and columns. Records (rows) are individual entries in a table, and fields (columns) are designed to maintain specific information about every record in the table. Therefore, tables contain records, and records consist of fields (or data values for each column in that row)."
            },
            {
                "id": "Q3",
                "text": "What is the primary benefit of program-data independence in a database system?",
                "type": "multiple_choice",
                "options": [
                    "It allows programs to directly access physical storage structures",
                    "It eliminates the need for database designers",
                    "It allows changing data structures without having to change the DBMS access programs",
                    "It prevents unauthorized users from accessing the database"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Program-data independence, also described as 'insulation between programs and data' in the lecture, allows changing data structures and storage organization without having to change the DBMS access programs. This is a key characteristic of the database approach that provides flexibility and maintainability."
            },
            {
                "id": "Q4",
                "text": "Which of the following best describes the role of a Database Administrator (DBA)?",
                "type": "multiple_choice",
                "options": [
                    "Primarily focuses on using the database for casual queries and reports",
                    "Develops and implements the DBMS software itself",
                    "Responsible for authorizing access, monitoring use, and ensuring efficient operation of the database",
                    "Designs and implements tools for database modeling and performance monitoring"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the lecture, Database Administrators are 'responsible for authorizing access to the database, for coordinating and monitoring its use, acquiring software and hardware resources, controlling its use and monitoring efficiency of operations.' The other options describe different database users like end-users, system designers/implementors, and tool developers."
            },
            {
                "id": "Q5",
                "text": "What is the purpose of metadata in a database system?",
                "type": "multiple_choice",
                "options": [
                    "To store raw data for quick retrieval",
                    "To store descriptions of data structures, types, and constraints of the database",
                    "To create a backup of the database content",
                    "To encrypt sensitive information within the database"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Metadata, or 'data about data,' is stored in the DBMS catalog and contains the description of a particular database (data structures, types, and constraints). This self-describing nature allows the DBMS software to work with different database applications by referencing the metadata to understand the structure and rules of the specific database it's working with."
            },
            {
                "id": "Q6",
                "text": "Which of the following users would be classified as a 'Parametric' end-user?",
                "type": "multiple_choice",
                "options": [
                    "A bank teller who processes customer transactions through predefined interfaces",
                    "A database administrator who monitors system performance",
                    "A business analyst who performs complex custom queries",
                    "A system designer who implements new DBMS features"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "The lecture defines Naive or Parametric users as those who 'use previously well-defined functions in the form of canned transactions against the database.' Bank tellers are specifically mentioned as an example of parametric users who perform this activity for an entire shift of operations. They use predefined interfaces and don't typically create custom complex queries."
            },
            {
                "id": "Q7",
                "text": "In the university database example from the lecture, which of the following represents a mini-world relationship?",
                "type": "multiple_choice",
                "options": [
                    "STUDENTs have prerequisite STUDENTs",
                    "INSTRUCTORs major in DEPARTMENTs",
                    "STUDENTs take SECTIONs",
                    "COURSEs teach INSTRUCTORs"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "In the university database example, 'STUDENTs take SECTIONs' is listed as one of the mini-world relationships. The other options either reverse the actual relationship ('COURSEs teach INSTRUCTORs' instead of 'INSTRUCTORs teach SECTIONs') or create relationships that weren't mentioned ('STUDENTs have prerequisite STUDENTs' instead of 'COURSEs have prerequisite COURSEs')."
            },
            {
                "id": "Q8",
                "text": "What is the main purpose of data abstraction in a database system?",
                "type": "multiple_choice",
                "options": [
                    "To prevent unauthorized access to sensitive data",
                    "To compress data for more efficient storage",
                    "To hide storage details and present users with a conceptual view of the database",
                    "To eliminate the need for database designers"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Data abstraction, as explained in the lecture, uses a data model 'to hide storage details and present the users with a conceptual view of the database.' This allows programs to refer to the data model constructs rather than data storage details, providing an abstraction layer that simplifies database interaction."
            },
            {
                "id": "Q9",
                "text": "In what situation would using a DBMS likely be unnecessary?",
                "type": "multiple_choice",
                "options": [
                    "When multiple users need concurrent access to data",
                    "When the database and applications are complex and frequently changing",
                    "When the database and applications are simple, well-defined, and not expected to change",
                    "When data integrity and security are critical concerns"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The lecture states that a DBMS may be unnecessary 'if the database and applications are simple, well defined, and not expected to change' and 'if access to data by multiple users is not required.' In such simple, stable scenarios, the overhead of a full DBMS might not be justified."
            },
            {
                "id": "Q10",
                "text": "Which statement best describes the relationship between transaction processing and database systems?",
                "type": "multiple_choice",
                "options": [
                    "Transaction processing is incompatible with database systems",
                    "OLTP (Online Transaction Processing) allows hundreds of concurrent transactions to execute per second",
                    "Database systems can only process one transaction at a time",
                    "Transaction processing is only relevant in non-relational database systems"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The lecture states that 'OLTP (Online Transaction Processing) is a major part of database applications. This allows hundreds of concurrent transactions to execute per second.' This is mentioned as part of the 'sharing of data and multi-user transaction processing' characteristic of database systems."
            },
            {
                "id": "Q11",
                "text": "What is the primary role of a system analyst in the database environment?",
                "type": "multiple_choice",
                "options": [
                    "To manage the actual running and maintenance of database hardware",
                    "To design and implement the DBMS software itself",
                    "To understand user requirements and design applications to meet those requirements",
                    "To enforce security policies and monitor database usage"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the lecture, system analysts 'understand the user requirements of naive and sophisticated users and design applications including canned transactions to meet those requirements.' They act as intermediaries between end-users and application developers, translating user needs into application specifications."
            },
            {
                "id": "Q12",
                "text": "Which scenario demonstrates the concept of 'multiple views of data' in a database system?",
                "type": "multiple_choice",
                "options": [
                    "A database storing data in multiple backup locations simultaneously",
                    "Different users accessing the same database through different network connections",
                    "A professor seeing student grades while students only see their own grades in the same database",
                    "Database designers creating multiple versions of the same database for testing"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The lecture explains that 'support of multiple views of the data' means 'each user may see a different view of the database, which describes only the data of interest to that user.' The example of a professor seeing all student grades while students only see their own grades from the same underlying database demonstrates this concept of presenting different views of the same data based on user roles."
            },
            {
                "id": "Q13",
                "text": "In what type of system might a DBMS be infeasible, according to the lecture?",
                "type": "multiple_choice",
                "options": [
                    "Large corporate environments with many concurrent users",
                    "Educational institutions tracking student records",
                    "Embedded systems with limited storage capacity",
                    "E-commerce platforms handling customer orders"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The lecture states that a DBMS may be infeasible 'in embedded systems where a general purpose DBMS may not fit in available storage.' Embedded systems often have strict hardware limitations that make full-featured database management systems impractical to implement."
            },
            {
                "id": "Q14",
                "text": "What is the relationship between a DBMS and the catalog?",
                "type": "multiple_choice",
                "options": [
                    "The catalog contains the actual data records, while the DBMS contains the metadata",
                    "The catalog stores metadata about the database structure, which the DBMS uses to manage different databases",
                    "The catalog and DBMS are different terms for the same component",
                    "The catalog is a newer technology designed to replace traditional DBMS systems"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "As explained in the lecture under 'Self-describing nature of a database system,' the DBMS catalog stores the description of a particular database (data structures, types, and constraints) - this description is called metadata. This allows the DBMS software to work with different database applications by referencing the metadata stored in the catalog."
            },
            {
                "id": "Q15",
                "text": "Which of the following best illustrates the concept of enforcing integrity constraints in a database?",
                "type": "multiple_choice",
                "options": [
                    "Creating backup copies of the database at regular intervals",
                    "Encrypting sensitive data stored in the database",
                    "Ensuring a student cannot enroll in a course without completing prerequisites",
                    "Providing different user interfaces for different types of users"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Enforcing integrity constraints, listed as one of the advantages of using the database approach, refers to the database's ability to maintain the accuracy and consistency of the data. The example of preventing a student from enrolling in a course without completing prerequisites illustrates an integrity constraint that ensures the data remains valid according to the business rules of the university."
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
    "QZ_002": {
        "title": "Information Systems Fundamentals Quiz",
        "course_id": "IS101",
        "related_file": "IS101_Lecture1.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What distinguishes a cybernetic system from a basic system?",
                "type": "multiple_choice",
                "options": [
                    "It only processes digital data",
                    "It includes feedback and control mechanisms",
                    "It requires human intervention",
                    "It must be computer-based"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A cybernetic system adds feedback and control mechanisms to the basic system functions (input, processing, output). The lecture defines it as 'a self-monitoring, self-regulating system' where feedback provides data about the system's performance, and control involves monitoring and evaluating that feedback to determine if the system is achieving its goals."
            },
            {
                "id": "Q2",
                "text": "In the context of information systems, what is the relationship between data and information?",
                "type": "multiple_choice",
                "options": [
                    "They are synonymous terms that can be used interchangeably",
                    "Data is structured while information is unstructured",
                    "Data is raw facts, while information is data converted into a meaningful context",
                    "Information is collected first, then converted into data for storage"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "As defined in the lecture, data consists of raw facts about physical phenomena or business transactions, while information is data that has been converted into a meaningful and useful context for end users. For example, sales data might be names, quantities, and dollar amounts, while sales information would be the amount of sales organized by product type, territory, or salesperson."
            },
            {
                "id": "Q3",
                "text": "A manufacturing company wants to monitor its production line in real-time and automatically adjust machine settings when quality issues are detected. Which type of operations support system would be most appropriate for this purpose?",
                "type": "multiple_choice",
                "options": [
                    "Transaction Processing System (TPS)",
                    "Enterprise Collaboration System (ECS)",
                    "Process Control System (PCS)",
                    "Management Information System (MIS)"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Process Control Systems (PCS) are specifically designed to monitor and control physical processes, such as those in a manufacturing environment. The lecture gives an example of using sensors in a petroleum refinery to monitor chemical processes. This type of system would be ideal for monitoring production quality and making automatic adjustments."
            },
            {
                "id": "Q4",
                "text": "What is the primary difference between Information Systems (IS) and Information Technology (IT)?",
                "type": "multiple_choice",
                "options": [
                    "IS is focused on software while IT is focused on hardware",
                    "IS is all components necessary to deliver information and functions, while IT refers to hardware, software, networking, and data management",
                    "IT is theoretical while IS is practical implementation",
                    "IS is paper-based while IT is computer-based"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "As explained in the lecture, IS (Information Systems) encompasses all components and resources necessary to deliver information and functions to an organization, including people, processes, and technology. IT (Information Technology) specifically refers to the technical components: hardware, software, networking, and data management. IS is the broader concept that includes IT as a component."
            },
            {
                "id": "Q5",
                "text": "A marketing manager wants a system that will allow them to test different scenarios by changing variables such as advertising spend, pricing, and market factors to predict potential outcomes. Which type of management support system would best meet this need?",
                "type": "multiple_choice",
                "options": [
                    "Management Information System (MIS)",
                    "Decision Support System (DSS)",
                    "Executive Information System (EIS)",
                    "Expert System"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A Decision Support System (DSS) provides interactive ad hoc support for decision making, which is exactly what the marketing manager needs. The lecture specifically mentions 'what-if-analysis to determine where to spend advertising dollars' as an example of DSS functionality. This type of system allows users to manipulate variables and see potential outcomes, supporting complex decision-making processes."
            },
            {
                "id": "Q6",
                "text": "In the Autosystems case study, what was the primary benefit of integrating the ActivEntry shop floor reporting system with their manufacturing planning and control system?",
                "type": "multiple_choice",
                "options": [
                    "It reduced the cost of IT infrastructure",
                    "It automated employee time tracking",
                    "It enabled real-time capture of production data across all plants",
                    "It eliminated the need for team meetings"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the case study, the integration of ActivEntry with the TRANS4M system gave Autosystems 'the ability to capture labor, efficiency, production, scrap, etc., on time and by work center, for every cell' and allowed production managers to 'review information from all three plants.' This real-time data capture across all facilities was the primary benefit, enabling daily discussions in team meetings."
            },
            {
                "id": "Q7",
                "text": "Which of the following best describes the concept of 'smart products' as discussed in the Heidelberg, Honeywell, and Eaton case study?",
                "type": "multiple_choice",
                "options": [
                    "Products that can be controlled remotely via smartphone apps",
                    "Products with built-in artificial intelligence capabilities",
                    "Products with awareness and connectivity that can detect and alert about potential failures",
                    "Products that automatically update their software"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The case study defines 'smart products' as 'products with awareness and connectivity into the products themselves.' It specifically states that 'smart products can detect that a part is approaching failure and alert users,' giving the company an opportunity to provide maintenance services. This functionality involves embedding sensors and communication capabilities directly into the products."
            },
            {
                "id": "Q8",
                "text": "What distinguishes efficiency from effectiveness in measuring the success of an information system?",
                "type": "multiple_choice",
                "options": [
                    "Efficiency focuses on technical performance while effectiveness focuses on user satisfaction",
                    "Efficiency measures how well a system works while effectiveness measures if it's worth implementing",
                    "Efficiency relates to minimizing costs and resources used, while effectiveness relates to supporting business goals and adding value",
                    "Efficiency is a short-term measure while effectiveness is a long-term measure"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the lecture, efficiency is about minimizing cost, time, and use of information resources (how well resources are used), while effectiveness relates to supporting business strategies, enabling business processes, enhancing organizational structure and culture, and increasing customer and business value (achieving business goals). An IS can be efficient (using minimal resources) without being effective (supporting business objectives), or vice versa."
            },
            {
                "id": "Q9",
                "text": "A company has implemented a system that records sales transactions, updates inventory levels, and generates financial reports. Which fundamental role of information systems does this primarily demonstrate?",
                "type": "multiple_choice",
                "options": [
                    "Support of strategies for competitive advantage",
                    "Support of decision making by employees and managers",
                    "Support of business processes and operations",
                    "Support of enterprise collaboration"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "This system primarily demonstrates the role of 'Support of business processes and operations,' which is one of the three fundamental roles of IS in business mentioned in the lecture. The system described is automating and supporting core business operations (sales transactions, inventory management) and operational reporting, rather than primarily focusing on decision support or competitive advantage."
            },
            {
                "id": "Q10",
                "text": "Which of the following best represents the 'People Resources' component of an information system?",
                "type": "multiple_choice",
                "options": [
                    "Developers who create software applications",
                    "Both end users and IS specialists",
                    "Consultants who recommend system improvements",
                    "Network administrators who maintain the IT infrastructure"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The lecture defines People Resources in an IS as including both end users (people who use the IS or the information from it) and IS specialists (people who develop and operate the IS). Options A, C, and D represent specific roles that would fall under 'IS specialists' but are not comprehensive of all people resources in an information system."
            },
            {
                "id": "Q11",
                "text": "What is the primary focus of a Knowledge Management System in an organization?",
                "type": "multiple_choice",
                "options": [
                    "Providing expert advice for specific problems",
                    "Supporting creation, organization, and dissemination of business knowledge",
                    "Analyzing big data to identify patterns",
                    "Automating routine decision-making processes"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "According to the lecture, Knowledge Management Systems 'support creation, organization, and dissemination of business knowledge throughout the company.' The example given is 'Intranet access to best business practices.' These systems focus on capturing and sharing organizational knowledge, unlike Expert Systems which provide specific advice or automated decision systems."
            },
            {
                "id": "Q12",
                "text": "A retail company wants to implement a system that will provide its executives with critical information about market trends, competitor actions, and internal performance metrics in an easily accessible format. Which type of management support system would be most appropriate?",
                "type": "multiple_choice",
                "options": [
                    "Transaction Processing System (TPS)",
                    "Management Information System (MIS)",
                    "Decision Support System (DSS)",
                    "Executive Information System (EIS)"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "An Executive Information System (EIS) is specifically designed to 'provide critical information for executives and managers,' as stated in the lecture. The example given is 'easy access to actions of competitors,' which aligns with the retail company's need to track competitor actions alongside internal metrics and market trends. EIS systems are tailored to high-level strategic information needs of executives."
            },
            {
                "id": "Q13",
                "text": "In the context of e-business, which of the following best describes 'enterprise collaboration systems'?",
                "type": "multiple_choice",
                "options": [
                    "Systems that facilitate electronic commerce transactions",
                    "Systems that support communications, coordination, and collaboration among teams",
                    "Systems that reengineer internal business processes",
                    "Systems that integrate with supplier and customer systems"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "As defined in the lecture, enterprise collaboration systems 'support communications, coordination, and collaboration among teams and work groups.' The lecture gives the example of virtual teams. These systems focus on internal collaboration rather than external transactions (e-commerce) or process reengineering, though they may support these activities indirectly."
            },
            {
                "id": "Q14",
                "text": "What key transformation has occurred in how information systems are used in business, according to the lecture?",
                "type": "multiple_choice",
                "options": [
                    "A shift from hardware focus to software focus",
                    "A move from custom development to packaged solutions",
                    "Greater integration, connectivity, and strategic utilization of systems",
                    "Replacement of human decision-making with artificial intelligence"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The lecture states that while IS has expanded, it's still doing the same basic things, but what has changed is: '1. more integration of functions, 2. greater connectivity across components, 3. better use for maximum advantage of business and strategic opportunities.' This represents a transformation in how systems are connected and strategically utilized, rather than fundamental changes in their basic functions."
            },
            {
                "id": "Q15",
                "text": "A company is implementing a new system that will help them differentiate their products in the market and gain an edge over competitors. This system would be classified as:",
                "type": "multiple_choice",
                "options": [
                    "A functional business system",
                    "An operational support system",
                    "A management support system",
                    "A strategic information system"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "Based on the lecture's classification of IS by scope, this would be a strategic information system, which 'helps get a strategic advantage over customers.' The examples given include 'shipment tracking, e-commerce web systems.' The key characteristic is that the system is being implemented specifically to gain competitive advantage, which is the definition of a strategic system."
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
    "QZ_003": {
        "title": "Computer Networks Fundamentals Quiz",
        "course_id": "NET101",
        "related_file": "NET101_Lecture1.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "Which historical event prompted the creation of ARPA (later DARPA) in 1958?",
                "type": "multiple_choice",
                "options": [
                    "The launch of the first IBM mainframe computer",
                    "The development of the first TCP/IP protocol",
                    "The Soviet Union's launch of Sputnik 1 in 1957",
                    "The creation of the Department of Defense networking model"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "As mentioned in the lecture, ARPA (Advanced Research Projects Agency), which later became DARPA (Defense Advanced Research Projects Agency), was created on February 7, 1958, by President Dwight D. Eisenhower specifically in response to the Soviet launching of Sputnik 1 in 1957. This event sparked concern about technological advancement in the United States."
            },
            {
                "id": "Q2",
                "text": "If a network consists of 6 devices in a full mesh topology, how many cables are required?",
                "type": "multiple_choice",
                "options": [
                    "6",
                    "12",
                    "15",
                    "30"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the mesh topology formula provided in the lecture, the number of cables needed is n(n-1)/2, where n is the number of devices. With 6 devices, this calculation becomes: 6(6-1)/2 = 6(5)/2 = 30/2 = 15 cables."
            },
            {
                "id": "Q3",
                "text": "What is the primary difference between physical and logical topology in networks?",
                "type": "multiple_choice",
                "options": [
                    "Physical topology uses cables while logical topology is always wireless",
                    "Physical topology describes how devices are physically connected, while logical topology describes how data flows between devices",
                    "Logical topology is only used in WANs, while physical topology applies to LANs",
                    "Physical topology is determined by the network manufacturer, while logical topology is set by the network administrator"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "As explained in the lecture, physical topology refers to the actual physical arrangement of network components (how they are physically connected), while logical topology describes how devices communicate internally (how data flows between devices). A network can have a star physical topology but function logically as a bus or point-to-point topology."
            },
            {
                "id": "Q4",
                "text": "Which network protocol is responsible for browsing remote servers such as Google or Facebook?",
                "type": "multiple_choice",
                "options": [
                    "FTP (File Transfer Protocol)",
                    "SMTP (Simple Mail Transfer Protocol)",
                    "HTTP (Hyper Text Transfer Protocol)",
                    "POP3 (Post Office Protocol)"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the lecture, HTTP (Hyper Text Transfer Protocol) is the protocol responsible for browsing remote servers such as Google, Facebook, etc. It enables the retrieval and display of web pages from web servers to client browsers."
            },
            {
                "id": "Q5",
                "text": "Which network topology connects all nodes in a closed loop where messages travel in one direction?",
                "type": "multiple_choice",
                "options": [
                    "Star topology",
                    "Bus topology",
                    "Mesh topology",
                    "Ring topology"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "As described in the lecture, Ring topology connects all nodes in a closed loop on which messages travel in one direction. The lecture notes that this topology was designed by IBM company. In this arrangement, data passes from one node to the next in a circular fashion until it reaches its destination."
            },
            {
                "id": "Q6",
                "text": "Which of the following is the distinguishing characteristic of a Metropolitan Area Network (MAN)?",
                "type": "multiple_choice",
                "options": [
                    "It connects components within a local area only",
                    "It connects LANs within the same city",
                    "It is the largest type of network, connecting countries and continents",
                    "It exclusively uses wireless connections"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "According to the lecture, a Metropolitan Area Network (MAN) is defined as a group of LANs within the same city. This distinguishes it from LANs (which cover smaller, local areas) and WANs (which connect cities, countries, and continents)."
            },
            {
                "id": "Q7",
                "text": "What is the primary function of a networking model?",
                "type": "multiple_choice",
                "options": [
                    "To physically connect network devices",
                    "To provide a graphical user interface for network administrators",
                    "To define a comprehensive set of documents that explain how networks should work",
                    "To increase network speed and reduce latency"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The lecture defines a networking model (also called networking architecture or blueprint) as 'a comprehensive set of documents' that collectively 'define everything that should happen for a computer network to work.' These documents describe protocols and physical requirements necessary for network functionality."
            },
            {
                "id": "Q8",
                "text": "Which topology would experience a data collision problem when multiple devices transmit simultaneously?",
                "type": "multiple_choice",
                "options": [
                    "Star topology",
                    "Ring topology",
                    "Bus topology",
                    "Mesh topology"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "As mentioned in the lecture, in Bus topology, when more than one device sends data simultaneously, collisions may occur. This is because all devices share the same communication medium (the bus cable), and there's no central device to manage transmission."
            },
            {
                "id": "Q9",
                "text": "What is the primary distinction between public WAN and private WAN?",
                "type": "multiple_choice",
                "options": [
                    "Public WANs use wireless technology, while private WANs use cables",
                    "Public WANs connect countries, while private WANs connect cities",
                    "Public WANs like the Internet are accessible to everyone, while private WANs connect branches of a specific company",
                    "Public WANs are faster than private WANs"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the lecture, the Internet is considered a public WAN because it's openly accessible. In contrast, a private WAN (sometimes called an Enterprise WAN) connects branches of a specific company together, making it accessible only to that organization's users and not the general public."
            },
            {
                "id": "Q10",
                "text": "Which of the following statements accurately describes the historical progression of networking models?",
                "type": "multiple_choice",
                "options": [
                    "TCP/IP was developed first, followed by proprietary models, and finally the OSI model",
                    "The OSI model was developed first, followed by TCP/IP, and then proprietary models appeared",
                    "Proprietary vendor models appeared first, followed by OSI and TCP/IP development in parallel, with TCP/IP eventually becoming dominant",
                    "All networking models were developed simultaneously through international cooperation"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the lecture, proprietary vendor models like IBM's SNA (1974) came first. Then, both the OSI model (developed by ISO starting in the late 1970s) and TCP/IP (developed through U.S. Department of Defense contracts) were developed as competing open standards. By the end of the 1990s, TCP/IP had become the dominant standard."
            },
            {
                "id": "Q11",
                "text": "In a star topology network, what happens if one computer fails?",
                "type": "multiple_choice",
                "options": [
                    "The entire network stops functioning",
                    "Only the failed computer is affected, while others continue to communicate",
                    "Half of the network stops functioning",
                    "All computers except one will continue to function"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "In a star topology, all devices connect to a central device (switch), not directly to each other. If one computer fails, only that specific computer is affected. All other computers can continue to communicate through the central device. This is one of the advantages of star topology over other topologies like bus, where a single point of failure could affect the entire network."
            },
            {
                "id": "Q12",
                "text": "Which networking component is primarily responsible for connecting different network segments and determining the best path for data to travel?",
                "type": "multiple_choice",
                "options": [
                    "Hub",
                    "Switch",
                    "Router",
                    "Repeater"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "While the lecture lists various intermediate devices, routers are specifically designed to connect different network segments and determine optimal data paths. Routers operate at the network layer, allowing them to forward data between different networks based on logical addressing, unlike switches which primarily operate within a single network segment."
            },
            {
                "id": "Q13",
                "text": "What are the most common topologies used in modern networks according to the lecture?",
                "type": "multiple_choice",
                "options": [
                    "Ring and Bus topologies",
                    "Mesh and Ring topologies",
                    "Point-to-Point (for two devices) and Star (for multiple devices)",
                    "Bus and Mesh topologies"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the lecture, the most common network topologies are Point-to-Point topology in case of two devices, and Star topology in case of multiple devices. These have become standard due to their reliability, scalability, and ease of management compared to other topologies."
            },
            {
                "id": "Q14",
                "text": "Why was TCP/IP ultimately more successful than the OSI model despite both being open standards?",
                "type": "multiple_choice",
                "options": [
                    "TCP/IP was legally mandated by government regulations while OSI was optional",
                    "TCP/IP was already implemented and used before OSI was fully defined",
                    "OSI was too expensive to implement compared to TCP/IP",
                    "TCP/IP only worked with UNIX systems which were more common"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "While the lecture doesn't explicitly state all the reasons for TCP/IP's success, it mentions that TCP/IP had practical implementation through university research efforts while OSI was being formally developed. By the time OSI was ready, TCP/IP already had widespread adoption. The lecture notes that 'by the end of the 1990s, TCP/IP had become the common choice, and OSI fell away,' suggesting that TCP/IP's earlier practical implementation gave it an advantage."
            },
            {
                "id": "Q15",
                "text": "If an operating system is installed without its network model, what capability would the device lack?",
                "type": "multiple_choice",
                "options": [
                    "The ability to run multiple applications simultaneously",
                    "The ability to connect with other devices",
                    "The ability to power on correctly",
                    "The ability to display graphical user interfaces"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "According to the lecture, 'If the operating system install on any device without the network model, this device can't connect with other devices.' The network model provides the essential protocols and standards needed for network communication, without which a device would be isolated and unable to communicate with other devices on a network."
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
    "QZ_004": {
        "title": "System Analysis and Design Quiz",
        "course_id": "SAD101",
        "related_file": "SAD101_Lecture1.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "Which of the following best defines a system?",
                "type": "multiple_choice",
                "options": [
                    "A collection of unrelated components.",
                    "An organized relationship among functioning units and components.",
                    "A set of isolated elements performing different tasks.",
                    "A single unit performing a specific task."
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A system is a group of interrelated components that function together to achieve a desired result."
            },
            {
                "id": "Q2",
                "text": "What are the three main types of resources a system requires?",
                "type": "multiple_choice",
                "options": [
                    "Human, financial, and digital.",
                    "Software, hardware, and liveware.",
                    "Data, processes, and technology.",
                    "Infrastructure, applications, and networks."
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A system requires hardware (physical devices), software (applications and programs), and liveware (people who operate the system)."
            },
            {
                "id": "Q3",
                "text": "Which statement about system procedures is correct?",
                "type": "multiple_choice",
                "options": [
                    "Procedures define how a system operates to achieve its goal.",
                    "Procedures are optional in system design.",
                    "Systems can function without predefined procedures.",
                    "Procedures only apply to automated systems."
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Every system follows a set of procedures that govern its operations to accomplish the defined goal."
            },
            {
                "id": "Q4",
                "text": "What is the correct order in the Data to Wisdom hierarchy?",
                "type": "multiple_choice",
                "options": [
                    "Data → Wisdom → Information → Knowledge",
                    "Information → Data → Knowledge → Wisdom",
                    "Data → Information → Knowledge → Wisdom",
                    "Wisdom → Knowledge → Information → Data"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The correct order is: Data (raw facts) → Information (processed data) → Knowledge (refined data) → Wisdom (integrated knowledge)."
            },
            {
                "id": "Q5",
                "text": "Which of the following is NOT a characteristic of a system?",
                "type": "multiple_choice",
                "options": [
                    "Objective",
                    "Standards",
                    "Randomness",
                    "Feedback"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "A system has defined objectives, standards, and feedback loops. Randomness is not a system characteristic."
            },
            {
                "id": "Q6",
                "text": "Which type of system does NOT interact with its environment?",
                "type": "multiple_choice",
                "options": [
                    "Open system",
                    "Closed system",
                    "Physical system",
                    "Abstract system"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Closed systems do not interact with their environment, while open systems do."
            },
            {
                "id": "Q7",
                "text": "Which system is specifically designed for assisting high-level executives?",
                "type": "multiple_choice",
                "options": [
                    "Transaction Processing System (TPS)",
                    "Management Information System (MIS)",
                    "Executive Support System (ESS)",
                    "Knowledge Work System (KWS)"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "ESS helps executives by providing data visualization, modeling tools, and strategic decision-making support."
            },
            {
                "id": "Q8",
                "text": "Which system supports group decision-making?",
                "type": "multiple_choice",
                "options": [
                    "Expert System (ES)",
                    "Decision Support System (DSS)",
                    "Group Decision Support System (GDSS)",
                    "Transaction Processing System (TPS)"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "GDSS is designed to assist groups in collaborative decision-making."
            },
            {
                "id": "Q9",
                "text": "What is the primary function of a Transaction Processing System (TPS)?",
                "type": "multiple_choice",
                "options": [
                    "Capturing and processing routine business transactions.",
                    "Helping executives make strategic decisions.",
                    "Providing support for group decision-making.",
                    "Automating office tasks like word processing."
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "TPS captures and processes routine business transactions like payroll and inventory management."
            }
        ],
        "instructions": [
            "You have 10 minutes to complete this quiz.",
            "Each question is worth 2 points.",
            "You need 70% to pass.",
            "All questions must be answered before submission.",
            "Questions and answers are randomized for each attempt."
        ]
    },
    "QZ_005": {
        "title": "Software Engineering Introduction Quiz",
        "course_id": "SE101",
        "related_file": "SE101_Lecture1.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the primary concern of software engineering?",
                "type": "multiple_choice",
                "options": [
                    "Developing software quickly without documentation",
                    "Writing code using the latest programming languages",
                    "Theories, methods, and tools for professional software development",
                    "Focusing only on hardware development"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Software engineering focuses on theories, methods, and tools for professional software development, ensuring reliability and maintainability."
            },
            {
                "id": "Q2",
                "text": "Which of the following is NOT an essential attribute of good software?",
                "type": "multiple_choice",
                "options": [
                    "Maintainability",
                    "High cost",
                    "Efficiency",
                    "Dependability and security"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Good software should be maintainable, efficient, dependable, and secure. High cost is not a desirable attribute."
            },
            {
                "id": "Q3",
                "text": "Which of the following is an example of a generic software product?",
                "type": "multiple_choice",
                "options": [
                    "Custom-built ERP system for a company",
                    "A web-based ticketing system developed for a specific airline",
                    "Microsoft Office Suite",
                    "A hospital management system developed for a single hospital"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Generic software products, such as Microsoft Office, are developed for a broad audience, not a specific client."
            },
            {
                "id": "Q4",
                "text": "What is the main difference between software engineering and computer science?",
                "type": "multiple_choice",
                "options": [
                    "Software engineering focuses on theoretical aspects, while computer science is practical",
                    "Computer science focuses on theory, while software engineering focuses on practical development",
                    "There is no difference; both are the same",
                    "Software engineering is only about writing code, whereas computer science includes networking"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Software engineering deals with the practical aspects of software production, whereas computer science focuses more on theoretical concepts."
            },
            {
                "id": "Q5",
                "text": "Which software process activity involves defining what the software should do?",
                "type": "multiple_choice",
                "options": [
                    "Software specification",
                    "Software validation",
                    "Software evolution",
                    "Software development"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Software specification is the process where customers and engineers define the software's functionality and constraints."
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
    "QZ_006": {
        "title": "Software Processes Quiz",
        "course_id": "SE101",
        "related_file": "SE101_Lecture2.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "Which of the following is NOT a fundamental activity in a software process?",
                "type": "multiple_choice",
                "options": [
                    "Specification",
                    "Design and Implementation",
                    "Market Analysis",
                    "Validation"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Market analysis is not a core activity in a software process. The key activities are Specification, Design and Implementation, Validation, and Evolution."
            },
            {
                "id": "Q2",
                "text": "Which software process model follows a sequential design flow with distinct phases?",
                "type": "multiple_choice",
                "options": [
                    "Waterfall Model",
                    "Incremental Model",
                    "Agile Model",
                    "Spiral Model"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "The Waterfall Model follows a strict sequential approach, where each phase must be completed before moving to the next."
            },
            {
                "id": "Q3",
                "text": "What is a major disadvantage of the Waterfall Model?",
                "type": "multiple_choice",
                "options": [
                    "Requires a lot of documentation",
                    "Difficult to accommodate changes",
                    "Requires customer involvement at every step",
                    "Software is delivered in increments"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The Waterfall Model does not easily accommodate changes because each phase must be completed before the next begins."
            },
            {
                "id": "Q4",
                "text": "In Incremental Development, how is the software delivered?",
                "type": "multiple_choice",
                "options": [
                    "All at once after complete development",
                    "In increments, with each version adding functionality",
                    "Only after final testing",
                    "As a prototype before actual development begins"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Incremental Development delivers the software in multiple versions (increments), with each version building on the previous one."
            },
            {
                "id": "Q5",
                "text": "Which of the following is NOT an advantage of the Incremental Model?",
                "type": "multiple_choice",
                "options": [
                    "Easier to accommodate changing requirements",
                    "More rapid delivery of functional software",
                    "Customer feedback is easier to gather",
                    "The total cost of the system is lower than Waterfall"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "Incremental development provides flexibility and faster delivery, but it does not necessarily lower the total cost of the project."
            },
            {
                "id": "Q6",
                "text": "Which software process model uses risk assessment at each phase?",
                "type": "multiple_choice",
                "options": [
                    "Waterfall Model",
                    "V-Model",
                    "Spiral Model",
                    "Agile Model"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The Spiral Model incorporates risk assessment at each phase, making it suitable for large and complex projects."
            },
            {
                "id": "Q7",
                "text": "What is a key characteristic of Agile Development?",
                "type": "multiple_choice",
                "options": [
                    "Follows a rigid sequential flow",
                    "Minimizes customer involvement",
                    "Focuses on iterative development and collaboration",
                    "Requires extensive upfront documentation"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Agile Development focuses on iterative progress, customer collaboration, and the ability to adapt to changes quickly."
            },
            {
                "id": "Q8",
                "text": "Which Agile method emphasizes pair programming and continuous integration?",
                "type": "multiple_choice",
                "options": [
                    "Scrum",
                    "Extreme Programming (XP)",
                    "Kanban",
                    "Waterfall"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Extreme Programming (XP) promotes practices such as pair programming, continuous integration, and frequent releases."
            },
            {
                "id": "Q9",
                "text": "What is the primary role of a Scrum Master?",
                "type": "multiple_choice",
                "options": [
                    "Write code for the project",
                    "Manage the budget and resources",
                    "Facilitate communication and remove obstacles",
                    "Decide product features"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "A Scrum Master is responsible for ensuring smooth collaboration and removing obstacles that might hinder the development team."
            }
        ],
        "instructions": [
            "You have 10 minutes to complete this quiz.",
            "Each question is worth 2 points.",
            "You need 70% to pass.",
            "All questions must be answered before submission.",
            "Questions and answers are randomized for each attempt."
        ]
    },
    "QZ_007": {
        "title": "Requirements Engineering Quiz",
        "course_id": "SE101",
        "related_file": "SE101_Lecture3.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the primary goal of requirements engineering?",
                "type": "multiple_choice",
                "options": [
                    "To establish system constraints and services needed by the customer.",
                    "To design the system architecture.",
                    "To implement system functionalities.",
                    "To test the developed software."
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Requirements engineering focuses on gathering, analyzing, and documenting customer needs before system design and implementation."
            },
            {
                "id": "Q2",
                "text": "Which of the following is NOT a type of requirement?",
                "type": "multiple_choice",
                "options": [
                    "User requirement",
                    "System requirement",
                    "Technical requirement",
                    "Domain requirement"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Technical requirement is not explicitly defined as a requirement type in the lecture. The three main types covered are user, system, and domain requirements."
            },
            {
                "id": "Q3",
                "text": "Which of the following best describes non-functional requirements?",
                "type": "multiple_choice",
                "options": [
                    "They define specific system functionalities.",
                    "They describe system behavior and constraints like performance and security.",
                    "They are optional requirements.",
                    "They specify how users interact with the system."
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Non-functional requirements specify system properties such as performance, reliability, and security, which impact the overall system rather than individual functions."
            },
            {
                "id": "Q4",
                "text": "Which requirement type is typically written in natural language for customer understanding?",
                "type": "multiple_choice",
                "options": [
                    "User requirements",
                    "System requirements",
                    "Functional requirements",
                    "Non-functional requirements"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "User requirements are written in natural language to be easily understood by non-technical stakeholders."
            },
            {
                "id": "Q5",
                "text": "What is a common problem when requirements are not precisely stated?",
                "type": "multiple_choice",
                "options": [
                    "Increased implementation speed",
                    "Reduced software cost",
                    "Ambiguous interpretation",
                    "Improved system performance"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Ambiguous requirements can lead to different interpretations by users and developers, causing issues in implementation."
            },
            {
                "id": "Q6",
                "text": "Which document serves as the official statement of what is required from system developers?",
                "type": "multiple_choice",
                "options": [
                    "Project plan",
                    "Software requirements specification",
                    "Test report",
                    "System architecture diagram"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The Software Requirements Specification (SRS) is the formal document detailing system requirements."
            },
            {
                "id": "Q7",
                "text": "What is the main purpose of requirements validation?",
                "type": "multiple_choice",
                "options": [
                    "To design the system",
                    "To check requirements for consistency, completeness, and correctness",
                    "To implement coding standards",
                    "To manage system changes"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Requirements validation ensures that system requirements are complete, consistent, and accurately reflect user needs."
            },
            {
                "id": "Q8",
                "text": "Which requirements engineering process involves discovering requirements through stakeholder interaction?",
                "type": "multiple_choice",
                "options": [
                    "Requirements specification",
                    "Requirements validation",
                    "Requirements elicitation",
                    "Requirements management"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Requirements elicitation involves discovering requirements through collaboration with stakeholders."
            },
            {
                "id": "Q9",
                "text": "Which of the following is NOT a technique for eliciting requirements?",
                "type": "multiple_choice",
                "options": [
                    "Interviewing stakeholders",
                    "Focus groups",
                    "User surveys",
                    "System architecture diagrams"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "System architecture diagrams are not a technique for eliciting requirements."
            }
        ],
        "instructions": [
            "You have 10 minutes to complete this quiz.",
            "Each question is worth 2 points.",
            "You need 70% to pass.",
            "All questions must be answered before submission.",
            "Questions and answers are randomized for each attempt."
        ]
    },
    "QZ_008": {
        "title": "System Modeling Quiz",
        "course_id": "SE101",
        "related_file": "SE101_Lecture4.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the primary purpose of system modeling?",
                "type": "multiple_choice",
                "options": [
                    "To provide an exact representation of a system",
                    "To develop abstract models that offer different perspectives",
                    "To replace software documentation",
                    "To generate system code automatically"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "System modeling is used to develop abstract representations of a system to understand its functionality and communicate it effectively."
            },
            {
                "id": "Q2",
                "text": "Which of the following is NOT a system perspective?",
                "type": "multiple_choice",
                "options": [
                    "External perspective",
                    "Behavioral perspective",
                    "Interaction perspective",
                    "Execution perspective"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "The four main system perspectives are external, interaction, structural, and behavioral. There is no 'Execution perspective'."
            },
            {
                "id": "Q3",
                "text": "Which UML diagram is used to model the interactions between system components?",
                "type": "multiple_choice",
                "options": [
                    "Use case diagram",
                    "Sequence diagram",
                    "Class diagram",
                    "Activity diagram"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Sequence diagrams are used to model interactions between actors and system components."
            },
            {
                "id": "Q4",
                "text": "What is the primary use of class diagrams?",
                "type": "multiple_choice",
                "options": [
                    "To show the static structure of a system",
                    "To represent user interactions",
                    "To define process workflows",
                    "To simulate real-time events"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Class diagrams depict the static structure of a system, including classes and their relationships."
            },
            {
                "id": "Q5",
                "text": "What do context models illustrate?",
                "type": "multiple_choice",
                "options": [
                    "The operational context of a system",
                    "The internal processing of data",
                    "The performance metrics of a system",
                    "The execution flow of a program"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Context models show the external environment of a system and its boundaries."
            },
            {
                "id": "Q6",
                "text": "Which UML diagram is used to model the flow of activities in a process?",
                "type": "multiple_choice",
                "options": [
                    "Use case diagram",
                    "Class diagram",
                    "Sequence diagram",
                    "Activity diagram"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "Activity diagrams illustrate workflows and the sequence of activities in a process."
            },
            {
                "id": "Q7",
                "text": "What is the significance of system boundaries in modeling?",
                "type": "multiple_choice",
                "options": [
                    "They define what is inside and outside the system",
                    "They determine the speed of execution",
                    "They replace use case diagrams",
                    "They are not relevant in system modeling"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "System boundaries define what is included in the system and what exists outside of it."
            },
            {
                "id": "Q8",
                "text": "What type of system modeling represents the system using UML notations?",
                "type": "multiple_choice",
                "options": [
                    "Graphical system modeling",
                    "Structural modeling",
                    "Behavioral modeling",
                    "Process modeling"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Graphical system modeling uses UML notations to visually represent a system."
            },
            {
                "id": "Q9",
                "text": "Which of the following is an example of a behavioral model?",
                "type": "multiple_choice",
                "options": [
                    "Class diagram",
                    "State diagram",
                    "Use case diagram",
                    "Context model"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "State diagrams model the dynamic behavior of a system in response to events."
            },
            {
                "id": "Q10",
                "text": "Which of the following statements about use cases is true?",
                "type": "multiple_choice",
                "options": [
                    "They only apply to object-oriented systems",
                    "They describe interactions between users and a system",
                    "They are not represented in UML",
                    "They replace sequence diagrams"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Use cases describe interactions between external actors and the system, helping in requirements elicitation."
            },
            {
                "id": "Q11",
                "text": "Which of these best describes generalization in system modeling?",
                "type": "multiple_choice",
                "options": [
                    "A way to group similar system entities under a common superclass",
                    "A method for increasing system complexity",
                    "A process used only in hardware design",
                    "A way to define system boundaries"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Generalization groups similar entities into a common superclass, making system design more modular."
            },
            {
                "id": "Q12",
                "text": "What is the primary function of a state diagram?",
                "type": "multiple_choice",
                "options": [
                    "To show the changes in state of a system in response to events",
                    "To depict the static structure of a system",
                    "To model interactions between system components",
                    "To illustrate data flow between processes"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "State diagrams represent the different states a system can be in and how it transitions between them."
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
    "QZ_009": {
        "title": "Software Engineering Lab Quiz",
        "course_id": "SE101",
        "related_file": "SE101_Section1.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the primary purpose of the Unified Modeling Language (UML)?",
                "type": "multiple_choice",
                "options": [
                    "A programming language for software development",
                    "A graphical modeling language for specifying, visualizing, and documenting software systems",
                    "A database management tool",
                    "A project management framework"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "UML is a graphical modeling language used to specify, visualize, and document software systems. It helps teams communicate and design complex software architectures."
            },
            {
                "id": "Q2",
                "text": "Which tool is commonly used in software engineering labs for drawing UML diagrams?",
                "type": "multiple_choice",
                "options": [
                    "Adobe Photoshop",
                    "Microsoft Visio or Rational Rose",
                    "AutoCAD",
                    "IntelliJ IDEA"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Software engineering labs commonly use Microsoft Visio or Rational Rose for creating UML diagrams."
            },
            {
                "id": "Q3",
                "text": "Which of the following is NOT a characteristic of a well-written Software Requirements Specification (SRS)?",
                "type": "multiple_choice",
                "options": [
                    "Ambiguous",
                    "Complete",
                    "Verifiable",
                    "Modifiable"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "A good SRS should be clear and unambiguous to ensure consistency in software development."
            },
            {
                "id": "Q4",
                "text": "What is the main goal of a problem statement in software development?",
                "type": "multiple_choice",
                "options": [
                    "To describe the final solution in detail",
                    "To provide a high-level description of the problem without specifying the solution",
                    "To list the software development tools required",
                    "To document the software testing strategies"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A problem statement describes what needs to be done at a high level, ensuring both technical and non-technical teams understand the issue without dictating the solution."
            },
            {
                "id": "Q5",
                "text": "Which of the following is an example of a non-functional requirement in an SRS?",
                "type": "multiple_choice",
                "options": [
                    "The system must allow users to register an account",
                    "The system must process transactions in under 2 seconds",
                    "Users should be able to reset their passwords",
                    "The application should support file uploads"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Non-functional requirements describe system properties, such as performance and security, rather than functionalities."
            },
            {
                "id": "Q6",
                "text": "Which UML diagram is used to represent the structure of a system using classes and their relationships?",
                "type": "multiple_choice",
                "options": [
                    "Activity Diagram",
                    "Class Diagram",
                    "Sequence Diagram",
                    "Use Case Diagram"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A class diagram in UML represents the structure of a system by showing its classes, attributes, and relationships."
            },
            {
                "id": "Q7",
                "text": "What is the purpose of requirements elicitation in software engineering?",
                "type": "multiple_choice",
                "options": [
                    "To design the system architecture",
                    "To gather information about user needs and system requirements",
                    "To write the final source code",
                    "To test the software after development"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Requirements elicitation is the first step in requirements engineering, focusing on gathering user needs and system expectations."
            },
            {
                "id": "Q8",
                "text": "Which of the following is NOT a major component of an SRS document?",
                "type": "multiple_choice",
                "options": [
                    "Functional requirements",
                    "Software architecture",
                    "Non-functional requirements",
                    "External interface requirements"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "An SRS does not include software architecture; it only specifies what the system should do, not how it should be designed."
            },
            {
                "id": "Q9",
                "text": "What is the primary role of an SRS in software development?",
                "type": "multiple_choice",
                "options": [
                    "To describe the exact implementation details of a system",
                    "To provide a clear understanding of what the software must do before development begins",
                    "To serve as a user manual for end-users",
                    "To outline the marketing strategies for the software"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "An SRS defines the requirements and expectations of the software system to guide development and prevent scope creep."
            },
            {
                "id": "Q10",
                "text": "Which of the following UML diagrams is best suited for modeling system interactions over time?",
                "type": "multiple_choice",
                "options": [
                    "Class Diagram",
                    "State Diagram",
                    "Sequence Diagram",
                    "Component Diagram"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "A sequence diagram models how objects interact over time through messages."
            },
            {
                "id": "Q11",
                "text": "Which attribute is NOT a characteristic of a good SRS?",
                "type": "multiple_choice",
                "options": [
                    "Traceable",
                    "Consistent",
                    "Incomplete",
                    "Unambiguous"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "A good SRS should be complete, meaning it covers all necessary requirements."
            },
            {
                "id": "Q12",
                "text": "What does a Use Case Diagram primarily represent?",
                "type": "multiple_choice",
                "options": [
                    "The database schema",
                    "The interactions between users and the system",
                    "The internal logic of a software function",
                    "The network architecture of a system"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A Use Case Diagram illustrates interactions between users (actors) and the system."
            },
            {
                "id": "Q13",
                "text": "Which of the following is an example of a functional requirement?",
                "type": "multiple_choice",
                "options": [
                    "The system should support at least 1000 concurrent users",
                    "The system should provide an option for users to reset their passwords",
                    "The system should be developed using Java",
                    "The database should use MySQL"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Functional requirements define system features, such as user password resets."
            },
            {
                "id": "Q14",
                "text": "Which UML diagram is useful for modeling the dynamic behavior of a system?",
                "type": "multiple_choice",
                "options": [
                    "Component Diagram",
                    "State Diagram",
                    "Class Diagram",
                    "Deployment Diagram"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A State Diagram models state changes in a system."
            },
            {
                "id": "Q15",
                "text": "What is the role of an SRS in software validation?",
                "type": "multiple_choice",
                "options": [
                    "It serves as a test case reference",
                    "It replaces the need for testing",
                    "It defines coding standards",
                    "It determines the system's pricing"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "An SRS helps ensure the system meets its defined requirements by serving as a reference for validation."
            }
        ],
        "instructions": [
            "You have 10 minutes to complete this quiz",
            "Each question is worth 2 points",
            "You need 70% to pass",
            "All questions must be answered before submission",
            "Questions and answers are randomized for each attempt"
        ]
    }
    ,
    "QZ_010": {
        "title": "ATM Software Requirements Quiz",
        "course_id": "SE101",
        "related_file": "SE101_Section2.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the primary purpose of the ATM software (ATMExcl 3.0TM)?",
                "type": "multiple_choice",
                "options": [
                    "To allow customers to perform banking transactions without a teller",
                    "To replace all physical bank branches",
                    "To store customer data permanently on the ATM",
                    "To facilitate manual transaction processing by bank staff"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "The ATM software enables users to perform financial transactions remotely without needing a human bank teller."
            },
            {
                "id": "Q2",
                "text": "Which of the following is NOT a core function of the ATM software?",
                "type": "multiple_choice",
                "options": [
                    "Balance Inquiry",
                    "Mobile Bill Payment",
                    "Stock Trading",
                    "Cash Withdrawal"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The ATM software supports banking transactions, but stock trading is not a supported feature."
            },
            {
                "id": "Q3",
                "text": "What happens after three consecutive invalid PIN attempts?",
                "type": "multiple_choice",
                "options": [
                    "The transaction is canceled but the card remains active",
                    "The ATM blocks the card until it is unblocked by the bank",
                    "The ATM deducts a penalty from the user's account",
                    "The ATM resets and allows another three attempts"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "For security reasons, after three incorrect attempts, the card is blocked and must be unblocked by the bank."
            },
            {
                "id": "Q4",
                "text": "Which programming interface requirement ensures users get a printed record of their transactions?",
                "type": "multiple_choice",
                "options": [
                    "User Interface Requirements",
                    "Hardware Interface Requirements",
                    "Software Interface Requirements",
                    "Communication Interface Requirements"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The hardware interface includes a printer that provides a printed receipt for transaction records."
            },
            {
                "id": "Q5",
                "text": "Which database is specified for use with the ATM software?",
                "type": "multiple_choice",
                "options": [
                    "MySQL",
                    "PostgreSQL",
                    "Oracle 7.0",
                    "MongoDB"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The software requirements specify the use of Oracle 7.0 for storing user account details."
            },
            {
                "id": "Q6",
                "text": "What is the maximum amount a user can withdraw per session?",
                "type": "multiple_choice",
                "options": [
                    "Rs 5,000",
                    "Rs 10,000",
                    "Rs 15,000",
                    "Rs 20,000"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The ATM software enforces a maximum withdrawal limit of Rs 10,000 per session."
            },
            {
                "id": "Q7",
                "text": "Which protocol is used for communication between the ATM and the bank's central server?",
                "type": "multiple_choice",
                "options": [
                    "HTTP",
                    "FTP",
                    "TCP/IP",
                    "SMTP"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The ATM software communicates with the central server using the TCP/IP protocol."
            },
            {
                "id": "Q8",
                "text": "What security mechanism is used to encrypt PIN transmission?",
                "type": "multiple_choice",
                "options": [
                    "AES",
                    "RSA",
                    "Triple DES",
                    "SHA-256"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Triple DES encryption is used for securing PIN transmissions."
            },
            {
                "id": "Q9",
                "text": "Which component is responsible for verifying login credentials?",
                "type": "multiple_choice",
                "options": [
                    "Transaction Management Software (BMS)",
                    "Card Management Software (CMS)",
                    "Security Module (SM)",
                    "Hardware Controller (HC)"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The Card Management Software (CMS) verifies PINs and login credentials."
            },
            {
                "id": "Q10",
                "text": "Which feature helps users locate other ATMs of the same bank?",
                "type": "multiple_choice",
                "options": [
                    "Billing Module",
                    "Account Maintenance",
                    "Map Locating Other Machines",
                    "Admin Panel"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The ATM provides a map feature to help users find other ATMs in the city."
            },
            {
                "id": "Q11",
                "text": "What is the minimum memory requirement for the ATM software?",
                "type": "multiple_choice",
                "options": [
                    "10GB",
                    "20MB",
                    "512MB",
                    "20GB"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "The ATM software requires a minimum of 20GB memory for operation."
            },
            {
                "id": "Q12",
                "text": "Which user type is responsible for refilling cash and repairing the ATM?",
                "type": "multiple_choice",
                "options": [
                    "User A",
                    "User B",
                    "Maintenance Personnel",
                    "Administrator"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Maintenance personnel are responsible for storing cash and repairing the ATM."
            },
            {
                "id": "Q13",
                "text": "What must a user do to unblock a blocked ATM card?",
                "type": "multiple_choice",
                "options": [
                    "Wait for 24 hours",
                    "Contact the bank",
                    "Insert the card again",
                    "Reset the PIN at an ATM"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Blocked cards must be unblocked by the bank."
            }
        ],
        "instructions": [
            "You have 10 minutes to complete this quiz.",
            "Each question is worth 2 points.",
            "You need 70% to pass.",
            "All questions must be answered before submission.",
            "Questions and answers are randomized for each attempt."
        ]
    },
    "QZ_011": {
        "title": "Data Structures Introduction Quiz",
        "course_id": "DS101",
        "related_file": "DS101_Lecture1.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the main purpose of a data structure?",
                "type": "multiple_choice",
                "options": [
                    "To store and organize data efficiently",
                    "To execute complex algorithms",
                    "To increase the speed of a processor",
                    "To replace programming languages"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Data structures are used to store and organize data efficiently, enabling optimized operations such as searching, inserting, and deleting elements."
            },
            {
                "id": "Q2",
                "text": "Which of the following is an example of a non-primitive data structure?",
                "type": "multiple_choice",
                "options": [
                    "Integer",
                    "Float",
                    "Array",
                    "Character"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Arrays are non-primitive data structures because they are derived from primitive types and allow multiple values to be stored in a structured format."
            },
            {
                "id": "Q3",
                "text": "Which of the following is an example of a linear data structure?",
                "type": "multiple_choice",
                "options": [
                    "Tree",
                    "Graph",
                    "Queue",
                    "Heap"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "A queue is a linear data structure that follows the FIFO (First-In-First-Out) principle, unlike trees or graphs, which are non-linear."
            },
            {
                "id": "Q4",
                "text": "What are the two main considerations when choosing a data structure?",
                "type": "multiple_choice",
                "options": [
                    "Ease of implementation and cost",
                    "Memory usage and execution time",
                    "Programming language and syntax",
                    "CPU speed and disk storage"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The efficiency of a data structure is determined by its memory consumption and execution time, affecting the overall performance of a program."
            },
            {
                "id": "Q5",
                "text": "Which of the following correctly defines an algorithm?",
                "type": "multiple_choice",
                "options": [
                    "A complete program written in C++",
                    "A sequence of steps to solve a problem",
                    "A type of data structure",
                    "A mathematical equation"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "An algorithm is a step-by-step set of instructions designed to solve a specific problem efficiently."
            },
            {
                "id": "Q6",
                "text": "Which data structure follows the Last In, First Out (LIFO) principle?",
                "type": "multiple_choice",
                "options": [
                    "Queue",
                    "Stack",
                    "Array",
                    "Graph"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A stack follows the LIFO principle, meaning the last element added is the first one to be removed."
            },
            {
                "id": "Q7",
                "text": "What is an Abstract Data Type (ADT)?",
                "type": "multiple_choice",
                "options": [
                    "A data type built into the C++ language",
                    "A conceptual model defining operations on a data structure",
                    "A specific implementation of a data structure",
                    "A type of database system"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "An Abstract Data Type (ADT) defines a set of operations for a data structure without specifying its implementation."
            },
            {
                "id": "Q8",
                "text": "Which operator in C++ is used for input?",
                "type": "multiple_choice",
                "options": [
                    "<<",
                    ">>",
                    "==",
                    "&&"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The '>>' operator in C++ is used for input, typically with 'cin'."
            },
            {
                "id": "Q9",
                "text": "Which loop in C++ always executes at least once?",
                "type": "multiple_choice",
                "options": [
                    "for",
                    "while",
                    "do-while",
                    "switch"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The 'do-while' loop guarantees at least one execution because the condition is checked after the loop body executes."
            },
            {
                "id": "Q10",
                "text": "Which of the following is NOT a characteristic of non-linear data structures?",
                "type": "multiple_choice",
                "options": [
                    "Data elements are arranged sequentially",
                    "Elements are connected in various ways",
                    "Used in trees and graphs",
                    "More complex to implement than linear structures"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "Non-linear data structures do not arrange data sequentially, unlike linear structures such as arrays and linked lists."
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
    "QZ_012": {
        "title": "Data Structures Fundamentals Quiz",
        "course_id": "DS101",
        "related_file": "DS101_Lecture2.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the main advantage of using arrays compared to declaring individual variables?",
                "type": "multiple_choice",
                "options": [
                    "Arrays always execute faster than individual variables",
                    "Arrays reduce the number of identifiers needed for related data",
                    "Arrays can store different data types in the same structure",
                    "Arrays automatically sort their elements"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "As mentioned in the lecture, one key motivation for using arrays is the reduction of identifiers. Instead of declaring many individual variables (like test1, test2, test3, etc.), you can declare a single array that holds multiple elements of the same type. This makes code cleaner and more manageable, especially when dealing with a large number of related values."
            },
            {
                "id": "Q2",
                "text": "Given the following code snippet, what will be the value of `sum` after execution?\n```cpp\nint x[5] = {10, 20, 30, 40, 50};\nint sum = 0;\nfor(int i = 0; i < 5; i += 2) {\n    sum += x[i];\n}\n```",
                "type": "multiple_choice",
                "options": [
                    "150",
                    "90",
                    "50",
                    "10"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The loop iterates with i = 0, 2, and 4 (incrementing by 2 each time). The values added to sum are x[0] = 10, x[2] = 30, and x[4] = 50. Therefore, sum = 10 + 30 + 50 = 90. This tests understanding of array indexing and loop behavior."
            },
            {
                "id": "Q3",
                "text": "What is the correct way to initialize all elements of an array `test` with 50 elements to zero?",
                "type": "multiple_choice",
                "options": [
                    "int test[50] = 0;",
                    "int test[50] = { 0 };",
                    "int test[50] = { 0, 0, 0, ... };",
                    "int test[50] = zero;"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The correct way to initialize all elements of an array to 0 is using the syntax `int test[50] = { 0 };`. As mentioned in the lecture (slide 9), this special initialization syntax sets the first element to 0 and all remaining elements to 0 as well."
            },
            {
                "id": "Q4",
                "text": "Which of the following statements is true about arrays in C++?",
                "type": "multiple_choice",
                "options": [
                    "Arrays can change size during runtime",
                    "The index of the first element in an array is 1",
                    "Elements are stored at contiguous memory locations",
                    "Arrays can store elements of different data types"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "As stated in the lecture (slide 12), elements in an array are stored at contiguous memory locations. This means they are stored one after another in memory, which enables efficient access using index offsets. Static arrays in C++ have fixed sizes, start at index 0, and can only store elements of the same data type."
            },
            {
                "id": "Q5",
                "text": "What is the purpose of a function prototype in C++?",
                "type": "multiple_choice",
                "options": [
                    "To execute the function before main()",
                    "To make the function run faster",
                    "To tell the compiler about the function's return type, name, and arguments",
                    "To make the function available in other source files"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "As explained in the lecture (slide 17), a function prototype tells the compiler what the function will return, what the function will be called (function name), as well as what arguments the function can be passed. This allows the compiler to check for proper usage of the function before encountering its full definition."
            },
            {
                "id": "Q6",
                "text": "What will be the output of the following recursive function call?\n```cpp\nint strange(int n) {\n    if (n <= 1) return 1;\n    return strange(n-2) + strange(n-1);\n}\n\nint main() {\n    cout << strange(4);\n    return 0;\n}\n```",
                "type": "multiple_choice",
                "options": [
                    "4",
                    "5",
                    "7",
                    "8"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "This is a recursive function. Let's trace its execution:\n- strange(4) = strange(2) + strange(3)\n- strange(2) = strange(0) + strange(1) = 1 + 1 = 2\n- strange(3) = strange(1) + strange(2) = 1 + (strange(0) + strange(1)) = 1 + (1 + 1) = 1 + 2 = 3\n- Therefore, strange(4) = strange(2) + strange(3) = 2 + 3 = 5\nThis tests understanding of recursive function execution."
            },
            {
                "id": "Q7",
                "text": "Which of the following is a valid function overloading in C++?",
                "type": "multiple_choice",
                "options": [
                    "```cpp\nint calculate(int a);\nfloat calculate(int a);\n```",
                    "```cpp\nint sum(int a, int b);\nint sum(int a, int b, int c);\n```",
                    "```cpp\nint process(int a);\nint Process(int a);\n```",
                    "```cpp\nint display(int a);\nint display(int b);\n```"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "According to the function overloading rules presented in the lecture (slide 28), valid overloading occurs when the parameter lists differ. The second option is valid because the functions have different numbers of parameters (two vs. three). The first option is invalid because only the return type differs, which is not enough for overloading. The third option has functions that differ only in capitalization, which makes them distinct functions in C++. The fourth option has functions with the same signature, just using different parameter names, which is not overloading."
            },
            {
                "id": "Q8",
                "text": "What is a required element in every proper recursive function?",
                "type": "multiple_choice",
                "options": [
                    "At least two recursive calls",
                    "A global variable to track recursion depth",
                    "At least one base case to stop recursion",
                    "A static variable inside the function"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "As explained in the lecture (slides 31-36), every proper recursive function must have at least one base case. The base case is essential as it stops the recursion by providing a direct answer without further recursive calls. Without a base case, the function would call itself indefinitely, resulting in infinite recursion and eventually a stack overflow."
            },
            {
                "id": "Q9",
                "text": "What happens in the following code?\n```cpp\nint *p;\n*p = 42;\n```",
                "type": "multiple_choice",
                "options": [
                    "The value 42 is stored at memory address 0",
                    "A memory leak occurs",
                    "The code will likely cause a segmentation fault/crash",
                    "The pointer p is set to address 42"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "This code will likely cause a segmentation fault or crash. The pointer p is declared but not initialized, so it contains a garbage value (an undefined memory address). When trying to dereference this uninitialized pointer with *p = 42, the program attempts to write to an invalid memory location, causing a crash. The correct approach would be to allocate memory first using 'p = new int;' before dereferencing."
            },
            {
                "id": "Q10",
                "text": "Which statement correctly describes the difference between static and dynamic data structures?",
                "type": "multiple_choice",
                "options": [
                    "Static structures are faster, while dynamic structures use less memory",
                    "Static structures are allocated memory at compile time, while dynamic structures are allocated memory at runtime",
                    "Static structures can change size during execution, while dynamic structures cannot",
                    "Static structures are stored in the heap, while dynamic structures are stored in the data segment"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "As stated in the lecture (slides 37-39), static data structures are allocated memory at compile time and stored in the data segment, while dynamic data structures are allocated memory at runtime from the heap. This fundamental difference means static structures cannot change size during execution, while dynamic structures can grow or shrink as needed."
            },
            {
                "id": "Q11",
                "text": "What will be the output of the following code?\n```cpp\nvoid modify(int arr[]) {\n    arr[0] = 100;\n}\n\nint main() {\n    int numbers[3] = {1, 2, 3};\n    modify(numbers);\n    cout << numbers[0];\n    return 0;\n}\n```",
                "type": "multiple_choice",
                "options": [
                    "1",
                    "3",
                    "100",
                    "0"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The output will be 100. As mentioned in the lecture (slide 43), arrays are always passed by reference to functions, even without explicitly using the & symbol. This means that when the array 'numbers' is passed to the 'modify' function, the function is working with the original array, not a copy. Therefore, when the function changes arr[0] to 100, it's actually changing numbers[0] in the main function."
            },
            {
                "id": "Q12",
                "text": "What is the purpose of the 'new' operator in C++?",
                "type": "multiple_choice",
                "options": [
                    "To declare a new variable",
                    "To create a new function",
                    "To allocate memory from the heap at runtime",
                    "To initialize an array with default values"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "As explained in the lecture (slide 32), the new operator allocates memory from the heap to a node of specified type at runtime. It returns the address of that node, which can be stored in a pointer. This is fundamental for creating dynamic data structures that can grow or shrink during program execution."
            },
            {
                "id": "Q13",
                "text": "What is the correct way to access the 'suit' member of a card structure through a pointer 'cardPtr'?",
                "type": "multiple_choice",
                "options": [
                    "cardPtr.suit",
                    "cardPtr->suit",
                    "suit.cardPtr",
                    "*cardPtr.suit"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "As shown in the lecture (slide 40), the correct way to access a structure member through a pointer is using the arrow operator (->). So 'cardPtr->suit' is the correct syntax. Alternatively, (*cardPtr).suit would also work, but the arrow operator is preferred for readability."
            },
            {
                "id": "Q14",
                "text": "What would happen if the base case was omitted in the factorial recursive function below?\n```cpp\nint factorial(int n) {\n    // Base case omitted\n    return n * factorial(n-1);\n}\n```",
                "type": "multiple_choice",
                "options": [
                    "The function would still work correctly for n > 0",
                    "The function would return 0 for all inputs",
                    "Infinite recursion would occur, eventually causing a stack overflow",
                    "The compiler would detect the error and not compile"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "As explained in the lecture (slides 35-36), without a base case, the function would call itself indefinitely (infinite recursion). Each call would use some stack memory, and eventually, the program would run out of stack space, causing a stack overflow error. The base case is essential to stop the recursion at some point."
            },
            {
                "id": "Q15",
                "text": "Given the following structure definition, what is the correct way to initialize a student with ID 101, name 'John', and college ID 5 with name 'Engineering'?",
                "type": "multiple_choice",
                "options": [
                    "```cpp\nstudent s = {101, \"John\", {}, {5, \"Engineering\"}};\n```",
                    "```cpp\nstudent s; s.id = 101; s.name = \"John\"; s.clg_data = {5, \"Engineering\"};\n```",
                    "```cpp\nstudent s = new student(101, \"John\", 5, \"Engineering\");\n```",
                    "```cpp\nstudent s; s.id = 101; s.name = \"John\"; s.clg_data.college_id = 5; s.clg_data.college_name = \"Engineering\";\n```"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "Based on the structure example in the lecture (slides 41-43), the correct way to initialize a nested structure is to access each member individually using the dot notation. The student structure contains a Stud_col structure as a member, so we need to access the college_id and college_name members through the clg_data member of the student structure. The fourth option correctly shows this approach."
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
    "QZ_013": {
        "title": "Data Structures: Linked Lists Quiz",
        "course_id": "DS101",
        "related_file": "DS101_Lecture3.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What are the two main components of a node in a singly linked list?",
                "type": "multiple_choice",
                "options": [
                    "Data and Index",
                    "Data and Link (Next)",
                    "Value and Previous",
                    "Index and Address"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A node in a singly linked list consists of two components: the Data part where the actual information is stored, and the Link (Next) part which is a pointer to the next element in the list. This structure allows nodes to be stored in non-contiguous memory locations while maintaining the sequence of the list."
            },
            {
                "id": "Q2",
                "text": "What happens when you add a new node to the head of a linked list?",
                "type": "multiple_choice",
                "options": [
                    "The new node becomes the last node in the list",
                    "The new node points to NULL and the old head points to the new node",
                    "The new node points to the old head and becomes the new head",
                    "The new node is inserted between the head and the second node"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "When adding a node to the head of a linked list, the new node's 'next' pointer is set to point to the current head node (old head), and then the head pointer is updated to point to the new node. This makes the new node the first node in the list, effectively adding it to the beginning of the list."
            },
            {
                "id": "Q3",
                "text": "Which of these best describes a circular linked list?",
                "type": "multiple_choice",
                "options": [
                    "A list where each node points to both the next and previous nodes",
                    "A list where the first node points to the last node and vice versa",
                    "A list where the last node points to the first node instead of NULL",
                    "A list where nodes are arranged in a circular array"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "In a circular linked list, the key characteristic is that the last node points back to the first node instead of pointing to NULL as in a standard singly linked list. This creates a circular structure where you can traverse from any node and eventually return to that same node by following the 'next' pointers."
            },
            {
                "id": "Q4",
                "text": "What is the time complexity of adding a node to the tail of a singly linked list (assuming you only have a head pointer)?",
                "type": "multiple_choice",
                "options": [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n²)"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "When adding a node to the tail of a singly linked list with only a head pointer, you need to traverse the entire list to find the last node. This traversal takes O(n) time, where n is the number of nodes in the list. Only after finding the last node can you add the new node after it."
            },
            {
                "id": "Q5",
                "text": "Consider the following code for the `addToHead` function:\n```cpp\nvoid List::addToHead(int data)\n{\n    Node* p = new Node;\n    p->info = data;\n    p->next = head;\n    head = p;\n}\n```\nWhat happens if the list is empty when this function is called?",
                "type": "multiple_choice",
                "options": [
                    "It causes a null pointer exception because head is NULL",
                    "It creates a circular list where the node points to itself",
                    "It works correctly because head is NULL and the new node will point to NULL",
                    "It requires a special case to handle empty lists that is missing"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The `addToHead` function works correctly even for an empty list. When the list is empty, head is NULL. The function creates a new node, sets its data, makes it point to NULL (since head is NULL), and then updates head to point to this new node. This correctly establishes the new node as both the head and tail of the previously empty list."
            },
            {
                "id": "Q6",
                "text": "What is the main advantage of a doubly linked list over a singly linked list?",
                "type": "multiple_choice",
                "options": [
                    "It uses less memory",
                    "It allows for bidirectional traversal",
                    "It supports faster insertion at the head",
                    "It can only contain a fixed number of nodes"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A doubly linked list allows for traversal in both directions (forward and backward) because each node has pointers to both its successor and predecessor. This bidirectional capability makes operations like backward traversal and deleting the previous node much more efficient compared to a singly linked list where you can only move forward."
            },
            {
                "id": "Q7",
                "text": "When deleting a node from a linked list, which of the following cases requires special handling?",
                "type": "multiple_choice",
                "options": [
                    "Deleting from an empty list",
                    "Deleting the only node in the list",
                    "Deleting the first node of a multi-node list",
                    "All of the above"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "All three cases require special handling when deleting a node from a linked list. For an empty list, you should check and exit to avoid null pointer exceptions. When deleting the only node, you need to set head to NULL. When deleting the first node in a multi-node list, you need to update the head pointer. These special cases are explicitly mentioned in the lecture as requiring different handling approaches."
            },
            {
                "id": "Q8",
                "text": "Consider this `deleteFromHead` function:\n```cpp\nint list::deleteFromHead()\n{\n    int x;\n    if(head==NULL) {\n        cout<<\"list Empty\";\n        exit(0);\n    }\n    else if(head->next==NULL) {\n        x=head->info;\n        delete head;\n        return x;\n    }\n    else {\n        Node* p=head;\n        head=head->next;\n        x=p->info;\n        delete p;\n        return x;\n    }\n}\n```\nWhat error exists in the function?",
                "type": "multiple_choice",
                "options": [
                    "The function doesn't set head to NULL when deleting the only node",
                    "The function fails to properly update pointers in the multi-node case",
                    "The function doesn't free the memory of the deleted node properly",
                    "The function doesn't handle the case where the list becomes empty after deletion"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "The error in the function is that when deleting the only node in the list (the case where head->next==NULL), the function deletes the node but doesn't set head to NULL. After deletion, head becomes a dangling pointer pointing to freed memory. The function should set head to NULL to properly indicate that the list is now empty."
            },
            {
                "id": "Q9",
                "text": "What is the correct approach to implementing the destructor for a linked list?",
                "type": "multiple_choice",
                "options": [
                    "Delete the head node and set it to NULL",
                    "Delete each node one by one by traversing the list",
                    "Call the deleteFromHead function repeatedly until the list is empty",
                    "Set all node pointers to NULL"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The correct approach to implementing a destructor for a linked list is to traverse the list and delete each node one by one. This ensures that all dynamically allocated memory is properly freed. Simply deleting the head node or setting pointers to NULL would cause memory leaks as the other nodes would remain in memory without being accessible."
            },
            {
                "id": "Q10",
                "text": "What would be a potential issue with the following `findNode` implementation?\n```cpp\nint list::findNode(int x) {\n    Node* p = head;\n    int c = 1;\n    while (p!=NULL && p->info!= x) {\n        p = p->next;\n        c++;\n    }\n    if (p->info==x) return c;\n    return 0;\n}\n```",
                "type": "multiple_choice",
                "options": [
                    "It doesn't handle empty lists correctly",
                    "It returns the wrong position for the node",
                    "It will cause a null pointer exception if the value is not found",
                    "It doesn't increment the counter correctly"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The issue is that if the value x is not found in the list, p will eventually become NULL (after the while loop). Then, the line `if (p->info==x)` will cause a null pointer exception because it tries to access the 'info' field of a NULL pointer. The function should check if p is NULL before trying to access p->info."
            },
            {
                "id": "Q11",
                "text": "Which of the following is NOT an advantage of linked lists over arrays?",
                "type": "multiple_choice",
                "options": [
                    "Dynamic size that can grow and shrink as needed",
                    "No need for contiguous memory allocation",
                    "Faster random access to elements",
                    "Easier insertion and deletion"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Random access is NOT an advantage of linked lists; in fact, it's a disadvantage. With arrays, you can access any element directly using its index in O(1) time. In contrast, linked lists require sequential traversal from the head to access elements, resulting in O(n) time complexity for accessing arbitrary elements. This is explicitly mentioned as a drawback of linked lists in the lecture."
            },
            {
                "id": "Q12",
                "text": "What is the primary distinction between a singly linked list and a doubly linked list?",
                "type": "multiple_choice",
                "options": [
                    "Singly linked lists can only have a fixed number of nodes while doubly linked lists can grow dynamically",
                    "Singly linked lists have a head pointer only while doubly linked lists have both head and tail pointers",
                    "Singly linked lists have one pointer per node (to the next node) while doubly linked lists have two pointers per node (to the next and previous nodes)",
                    "Singly linked lists can only store simple data types while doubly linked lists can store complex data structures"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The primary distinction between singly and doubly linked lists is in the node structure. In a singly linked list, each node has one pointer that points to the next node in the sequence. In a doubly linked list, each node has two pointers: one pointing to the next node and another pointing to the previous node. This allows doubly linked lists to be traversed in both forward and backward directions."
            },
            {
                "id": "Q13",
                "text": "What is the correct way to traverse a circular linked list?",
                "type": "multiple_choice",
                "options": [
                    "Check if the current node is NULL to stop traversal",
                    "Check if the next pointer of the current node points to the head node to stop traversal",
                    "Traverse exactly n nodes where n is the known length of the list",
                    "Always traverse until a node points to NULL"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "In a circular linked list, there is no NULL pointer at the end (unlike a singly linked list). Instead, the last node points back to the first node (the head). Therefore, to traverse a circular linked list without infinite looping, you should check if the next pointer of the current node points to the head node. This indicates you've completed one full traversal of the list."
            },
            {
                "id": "Q14",
                "text": "What would happen if you implement the `addToTail` function without traversing to find the last node?",
                "type": "multiple_choice",
                "options": [
                    "The function would add the node at the head instead",
                    "The function would create a circular list",
                    "The function would always replace the last node instead of adding after it",
                    "This is impossible without a separate tail pointer"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "Without traversing the list to find the last node, it's impossible to implement an `addToTail` function in a singly linked list that only has a head pointer. You need to find the last node to add after it. The only way to avoid traversal would be to maintain a separate tail pointer that always points to the last node, which would make the operation O(1) instead of O(n)."
            },
            {
                "id": "Q15",
                "text": "Given this code for `countList`:\n```cpp\nint list::countList()\n{\n    int c=0;\n    Node* p=head;\n    while(p!=NULL)\n    {\n        c++;\n        p=p->next;\n    }\n    return c;\n}\n```\nWhat would happen if you tried to use this function on a circular linked list?",
                "type": "multiple_choice",
                "options": [
                    "It would return 0 because no node points to NULL",
                    "It would cause an infinite loop",
                    "It would count only the first node",
                    "It would return the correct count if the last node points to NULL"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The `countList` function shown is designed for a singly linked list where the last node points to NULL. In a circular linked list, the last node points back to the head instead of NULL. The while loop condition `p!=NULL` would never be false because p will never become NULL. This would cause an infinite loop as the function keeps traversing the circular list endlessly. For circular lists, you need a different termination condition, such as checking if p points back to the head."
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
    "QZ_014": {
        "title": "Data Structures: Circular and Doubly Linked Lists Quiz",
        "course_id": "DS101",
        "related_file": "DS101_Lecture4.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What is the primary difference between a singly linked list and a circular linked list?",
                "type": "multiple_choice",
                "options": [
                    "A circular linked list uses dynamic memory allocation, while a singly linked list uses static memory allocation",
                    "In a circular linked list, the last node points back to the first node, while in a singly linked list, the last node points to NULL",
                    "A circular linked list can only contain a fixed number of nodes, while a singly linked list can grow dynamically",
                    "A circular linked list stores data in contiguous memory locations, while a singly linked list uses pointers"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The key difference is that in a circular linked list, the last node's next pointer points back to the first node (head) of the list, creating a circle. In contrast, a singly linked list's last node points to NULL, indicating the end of the list. This circular structure allows for continuous traversal through the list without reaching an end."
            },
            {
                "id": "Q2",
                "text": "How do you determine when you have finished traversing a circular linked list?",
                "type": "multiple_choice",
                "options": [
                    "When you reach a node with a NULL pointer",
                    "When you reach the tail node",
                    "When the current node's pointer is equal to the head",
                    "When you have visited exactly n nodes, where n is the size of the list"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "In a circular linked list, there is no NULL pointer at the end since the list forms a circle. Instead, to determine if you have completed one full traversal, you check if the current node's next pointer is equal to the head of the list. This indicates you've come full circle and are about to revisit the first node."
            },
            {
                "id": "Q3",
                "text": "What is a significant advantage of a doubly linked list over a singly linked list?",
                "type": "multiple_choice",
                "options": [
                    "Doubly linked lists use less memory",
                    "Doubly linked lists allow for faster insertion at the head",
                    "Doubly linked lists make it easier to traverse the list backward",
                    "Doubly linked lists automatically sort elements as they are inserted"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "A key advantage of a doubly linked list is that it allows for easy backward traversal. Since each node contains references to both its predecessor and successor, you can efficiently move backward through the list. This is not possible in a singly linked list without starting from the beginning. This bidirectional traversal capability makes certain operations more efficient in doubly linked lists."
            },
            {
                "id": "Q4",
                "text": "When adding a new node to the head of a circular linked list, which pointers need to be updated?",
                "type": "multiple_choice",
                "options": [
                    "Only the new node's next pointer",
                    "The new node's next pointer and the head pointer",
                    "The new node's next pointer, the head pointer, and the last node's next pointer",
                    "Only the head pointer"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "When adding a node to the head of a circular linked list, three pointer updates are needed: 1) the new node's next pointer must point to the current head, 2) the head pointer must be updated to point to the new node, and 3) the last node's next pointer must be updated to point to the new head (the newly added node). This third step is unique to circular linked lists and maintains the circular structure."
            },
            {
                "id": "Q5",
                "text": "Which function correctly implements adding a node to the head of a circular linked list?",
                "type": "multiple_choice",
                "options": [
                    "```cpp\nvoid addToHead(int data) {\n  node* p = new node;\n  p->info = data;\n  p->next = head;\n  head = p;\n}\n```",
                    "```cpp\nvoid addToHead(int data) {\n  node* p = new node;\n  p->info = data;\n  p->next = NULL;\n  head = p;\n}\n```",
                    "```cpp\nvoid addToHead(int data) {\n  node* p = new node;\n  p->info = data;\n  p->next = head;\n  head = p;\n  node* q = head;\n  while(q->next != NULL)\n    q = q->next;\n  q->next = head;\n}\n```",
                    "```cpp\nvoid addToHead(int data) {\n  node* p = new node;\n  p->info = data;\n  p->next = head;\n  if(head == NULL) {\n    head = p;\n    head->next = head;\n  } else {\n    node* q = head;\n    while(q->next != head)\n      q = q->next;\n    q->next = p;\n    head = p;\n  }\n}\n```"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "The correct implementation is option D. This function properly handles both the empty list case and the case with existing nodes. When the list is empty, it creates a self-referential node. When the list has nodes, it traverses to find the last node (whose next points to head), updates the last node's next to point to the new node, and then updates head to be the new node. Options A and B don't maintain the circular structure, and option C incorrectly uses NULL check instead of checking against head."
            },
            {
                "id": "Q6",
                "text": "In a circular doubly linked list, how many NULL pointers are there?",
                "type": "multiple_choice",
                "options": [
                    "One - the head's prev pointer",
                    "Two - the head's prev pointer and the tail's next pointer",
                    "Zero - all pointers point to other nodes",
                    "It depends on the number of nodes in the list"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "In a circular doubly linked list, there are zero NULL pointers. Unlike a standard doubly linked list (which has two NULL pointers), in a circular doubly linked list, the head's prev pointer points to the tail node, and the tail's next pointer points to the head node. This creates a complete circle in both directions, eliminating any NULL pointers in the structure."
            },
            {
                "id": "Q7",
                "text": "What is the time complexity of adding a node to the tail of a circular singly linked list?",
                "type": "multiple_choice",
                "options": [
                    "O(1) - constant time",
                    "O(log n) - logarithmic time",
                    "O(n) - linear time",
                    "O(n²) - quadratic time"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "The time complexity is O(n) - linear time. When adding a node to the tail of a circular singly linked list, we need to traverse the entire list from head to find the current last node (the one whose next pointer points back to head). This traversal takes O(n) time where n is the number of nodes in the list. Only after finding this last node can we insert the new node and update the pointers accordingly."
            },
            {
                "id": "Q8",
                "text": "When deleting the head node from a circular linked list that contains only one node, what is the resulting state of the list?",
                "type": "multiple_choice",
                "options": [
                    "The list becomes empty with head pointing to NULL",
                    "The head points to itself in a circular fashion",
                    "The operation is not allowed and results in an error",
                    "The head becomes NULL but the node remains in memory"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "When deleting the only node in a circular linked list, the list becomes empty and the head pointer is set to NULL. This is a special case that needs to be handled explicitly in the deleteFromHead function. After freeing the memory for the node, there are no nodes left in the list, so the head must point to NULL to indicate an empty list."
            },
            {
                "id": "Q9",
                "text": "Which of the following is INCORRECT about a doubly linked list?",
                "type": "multiple_choice",
                "options": [
                    "Each node contains pointers to both the next and previous nodes",
                    "It allows for bidirectional traversal",
                    "It uses more memory per node than a singly linked list",
                    "It requires less pointer updates during insertion and deletion operations"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "It is incorrect that a doubly linked list requires fewer pointer updates during insertion and deletion. In fact, a doubly linked list requires MORE pointer updates since each node has two pointers (prev and next) that need to be maintained. For example, when inserting a node, you must update both the next and prev pointers of adjacent nodes, as well as both pointers of the new node. The trade-off is that these additional pointer updates enable more efficient operations in certain scenarios."
            },
            {
                "id": "Q10",
                "text": "What is the correct implementation of the deleteFromHead function for a doubly linked list?",
                "type": "multiple_choice",
                "options": [
                    "```cpp\nint deleteFromHead() {\n  int x;\n  if(head == NULL) {\n    cout << \"List Empty\";\n    exit(0);\n  }\n  x = head->info;\n  head = head->next;\n  delete head->prev;\n  head->prev = NULL;\n  return x;\n}\n```",
                    "```cpp\nint deleteFromHead() {\n  int x;\n  if(head == NULL) {\n    cout << \"List Empty\";\n    exit(0);\n  }\n  node* p = head;\n  x = p->info;\n  head = head->next;\n  if(head != NULL)\n    head->prev = NULL;\n  delete p;\n  return x;\n}\n```",
                    "```cpp\nint deleteFromHead() {\n  int x;\n  if(head == NULL) {\n    cout << \"List Empty\";\n    exit(0);\n  }\n  x = head->info;\n  node* p = head;\n  head = head->next;\n  delete p;\n  return x;\n}\n```",
                    "```cpp\nint deleteFromHead() {\n  int x;\n  node* p = head;\n  head = head->next;\n  head->prev = NULL;\n  x = p->info;\n  delete p;\n  return x;\n}\n```"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Option B is the correct implementation. It properly handles all cases: 1) checks if the list is empty, 2) saves the value to return, 3) updates head to point to the next node, 4) checks if the new head exists before setting its prev pointer to NULL (which handles the case where the list becomes empty), and 5) deletes the original head node. Option A has an incorrect order of operations that would cause a memory error. Option C doesn't update the prev pointer of the new head. Option D doesn't check for empty list cases and would cause errors."
            },
            {
                "id": "Q11",
                "text": "What is the primary application of circular linked lists mentioned in the lecture?",
                "type": "multiple_choice",
                "options": [
                    "Implementing stacks and queues efficiently",
                    "Managing memory allocation in operating systems",
                    "Representing data with a cyclic order, such as turn-based multiplayer games",
                    "Optimizing database index structures"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "According to the lecture, a primary application of circular linked lists is representing data with a cyclic order where there is no fixed beginning or end. The lecture specifically mentions turn-based multiplayer games as an example, where player turns rotate in a cycle (player A, then B, then C, then back to A again). This cyclic pattern is naturally modeled by a circular linked list."
            },
            {
                "id": "Q12",
                "text": "What is the difference between the countList function for a circular linked list and a normal singly linked list?",
                "type": "multiple_choice",
                "options": [
                    "The circular list version increments the counter twice for each node",
                    "The circular list version checks for head instead of NULL to determine the end of the list",
                    "The circular list version uses a different initial counter value",
                    "There is no difference in the implementation"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The key difference is in the termination condition. In a normal singly linked list, we continue traversing until we reach a NULL pointer. In a circular linked list, there is no NULL pointer at the end. Instead, we continue traversing until the next pointer of the current node equals the head pointer, indicating we've come full circle. This difference is reflected in the loop condition: for a circular list, it's `while(p->next != head)` instead of `while(p->next != NULL)`."
            },
            {
                "id": "Q13",
                "text": "When adding a node to the tail of a doubly linked list, what is a critical step that must be performed?",
                "type": "multiple_choice",
                "options": [
                    "Set the new node's next pointer to NULL and update the previous tail's next pointer to the new node",
                    "Set the new node's next pointer to the head and update the head's prev pointer",
                    "Set the new node's prev pointer to the last node and the new node's next pointer to NULL",
                    "Create a temporary copy of the entire list before making any modifications"
                ],
                "correct_answer": 0,
                "points": 2,
                "explanation": "When adding a node to the tail of a doubly linked list, two critical pointer updates must occur: 1) the new node's next pointer must be set to NULL (as it's becoming the last node), and 2) the previous tail node's next pointer must be updated to point to the new node. Additionally, the new node's prev pointer must be set to the previous tail node. This ensures the doubly linked list structure is maintained with proper bidirectional connections."
            },
            {
                "id": "Q14",
                "text": "What happens when you attempt to delete from the tail of an empty doubly linked list using the implementation shown in the lecture?",
                "type": "multiple_choice",
                "options": [
                    "The function returns NULL and continues execution",
                    "The function prints 'List Empty' and exits the program",
                    "The function throws an exception",
                    "The function creates a new empty node and returns it"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "According to the deleteFromTail function shown in the lecture, when attempting to delete from an empty list (head == NULL), the function prints 'List Empty' and then calls exit(0), which terminates the program. This is an explicit check done at the beginning of the function to handle the empty list case. While this approach is somewhat drastic (terminating the program), it prevents undefined behavior that would occur from trying to delete from an empty list."
            },
            {
                "id": "Q15",
                "text": "Consider the following code for deleting a node from a doubly linked list. What's missing or incorrect?\n```cpp\nint deleteNode(int value) {\n  node* current = head;\n  \n  while(current != NULL) {\n    if(current->info == value) {\n      if(current == head) {\n        return deleteFromHead();\n      }\n      else {\n        current->prev->next = current->next;\n        if(current->next != NULL)\n          current->next->prev = current->prev;\n        int x = current->info;\n        delete current;\n        return x;\n      }\n    }\n    current = current->next;\n  }\n  \n  cout << \"Value not found\";\n  return -1;\n}\n```",
                "type": "multiple_choice",
                "options": [
                    "The function doesn't handle the case where the value isn't found in the list",
                    "The function doesn't properly update the prev pointer when deleting the head node",
                    "The function doesn't handle the case where the node to delete is the tail",
                    "The function is correct and handles all cases properly"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "The function is actually correct and handles all necessary cases. It checks if the node to delete is the head and calls deleteFromHead() in that case. For other nodes, it updates the next pointer of the previous node and the prev pointer of the next node (if it exists). The condition `if(current->next != NULL)` properly handles the case where the node to delete is the tail. The function also returns -1 and prints a message if the value isn't found. All edge cases are properly addressed."
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
    "QZ_015": {
        "title": "Information Systems SDLC Quiz",
        "course_id": "IS101",
        "related_file": "IS101_Lecture2.pdf",
        "time_limit": 10,
        "passing_score": 70,
        "randomize_questions": true,
        "questions": [
            {
                "id": "Q1",
                "text": "What does SDLC stand for in the context of information systems?",
                "type": "multiple_choice",
                "options": [
                    "Software Development Learning Curve",
                    "System Design Life Course",
                    "System Development Life Cycle",
                    "Software Design Logical Components"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "SDLC stands for System Development Life Cycle, which is a framework that describes the phases involved in developing an information system, from initial feasibility study through maintenance of the completed application."
            },
            {
                "id": "Q2",
                "text": "Which of the following is NOT typically a phase in the traditional SDLC?",
                "type": "multiple_choice",
                "options": [
                    "Requirements Analysis",
                    "System Design",
                    "System Marketing",
                    "System Testing"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "System Marketing is not a phase in the traditional SDLC. The typical phases include Planning, Requirements Analysis, System Design, Implementation (Coding), Testing, Deployment, and Maintenance. Marketing would be a business function outside the scope of the traditional development lifecycle."
            },
            {
                "id": "Q3",
                "text": "During which phase of the SDLC would you typically create detailed specifications for hardware, software, and network requirements?",
                "type": "multiple_choice",
                "options": [
                    "Requirements Analysis",
                    "System Design",
                    "Implementation",
                    "System Testing"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "System Design is the phase where detailed specifications for hardware, software, network requirements, user interfaces, database designs, and process diagrams are created. This phase transforms user requirements into a detailed system architecture."
            },
            {
                "id": "Q4",
                "text": "What is the primary purpose of System Testing in the SDLC?",
                "type": "multiple_choice",
                "options": [
                    "To ensure the code is properly documented",
                    "To verify that all system components work together as expected",
                    "To train users on the new system",
                    "To ensure the system has an attractive user interface"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The primary purpose of System Testing is to verify that all system components (hardware, software, interfaces, etc.) work together as expected. It ensures that the entire system meets the specified requirements and functions correctly as an integrated whole."
            },
            {
                "id": "Q5",
                "text": "Pilot Conversion is a type of:",
                "type": "multiple_choice",
                "options": [
                    "System Design methodology",
                    "Programming paradigm",
                    "System Conversion strategy",
                    "Database architecture"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Pilot Conversion is a type of System Conversion strategy. It involves implementing the new system in one area of the organization or with a small group of users before rolling it out to the entire organization. This allows for testing the system in a real environment with limited risk."
            },
            {
                "id": "Q6",
                "text": "What distinguishes Pilot Conversion from other conversion strategies?",
                "type": "multiple_choice",
                "options": [
                    "It involves converting the entire system at once",
                    "It implements the system in one department or location first",
                    "It runs the old and new systems simultaneously forever",
                    "It automatically transfers all data from the old system"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Pilot Conversion distinguishes itself by implementing the new system in one department or location first before rolling it out to the entire organization. This allows the organization to test the system in a real operating environment, identify issues, and make adjustments before full implementation."
            },
            {
                "id": "Q7",
                "text": "In system design, which of the following activities would typically occur FIRST?",
                "type": "multiple_choice",
                "options": [
                    "Creating detailed database schemas",
                    "Writing program code",
                    "Identifying high-level system architecture",
                    "Performing system integration testing"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "In system design, identifying the high-level system architecture would typically occur first. This involves making fundamental decisions about the overall structure of the system before delving into specific details like database schemas, code writing, or testing."
            },
            {
                "id": "Q8",
                "text": "Which testing approach focuses on examining the system's components without knowledge of their internal structure?",
                "type": "multiple_choice",
                "options": [
                    "White-box testing",
                    "Black-box testing",
                    "Alpha testing",
                    "Unit testing"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Black-box testing focuses on examining the functionality of an application without knowledge of its internal structure or code. Testers only know what the system should do, not how it does it. They provide inputs and examine outputs without considering the internal processing."
            },
            {
                "id": "Q9",
                "text": "Consider a retail company implementing a new inventory management system. Which conversion strategy would be MOST appropriate if they cannot afford any downtime?",
                "type": "multiple_choice",
                "options": [
                    "Direct Conversion",
                    "Parallel Conversion",
                    "Phased Conversion",
                    "Pilot Conversion"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "Parallel Conversion would be most appropriate when a company cannot afford any downtime. This strategy involves running both the old and new systems simultaneously for a period of time, ensuring business continuity while verifying the new system works correctly. It's the safest approach but requires more resources."
            },
            {
                "id": "Q10",
                "text": "What is a key advantage of using a structured SDLC approach for system development?",
                "type": "multiple_choice",
                "options": [
                    "It eliminates the need for documentation",
                    "It provides a framework for project management and control",
                    "It guarantees that projects will be completed under budget",
                    "It removes the need for system testing"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "A key advantage of using a structured SDLC approach is that it provides a framework for project management and control. By breaking down the development process into defined phases with clear deliverables, it helps teams manage resources, track progress, and maintain quality throughout the project."
            },
            {
                "id": "Q11",
                "text": "During system testing, a developer finds that when multiple users access the database simultaneously, some transactions fail. What type of testing uncovered this issue?",
                "type": "multiple_choice",
                "options": [
                    "Unit testing",
                    "Integration testing",
                    "Load testing",
                    "Acceptance testing"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "Load testing is a type of performance testing that examines how the system behaves under expected or heavy loads. This includes testing the system's response with multiple concurrent users or transactions. The scenario described, where transactions fail during simultaneous database access, would typically be uncovered during load testing."
            },
            {
                "id": "Q12",
                "text": "A company is implementing a new accounting system and decides to convert one module at a time, starting with accounts payable, then moving to accounts receivable, and finally general ledger. Which conversion strategy is being used?",
                "type": "multiple_choice",
                "options": [
                    "Direct Conversion",
                    "Parallel Conversion",
                    "Phased Conversion",
                    "Pilot Conversion"
                ],
                "correct_answer": 2,
                "points": 2,
                "explanation": "This describes Phased Conversion, which involves implementing different modules or components of the system sequentially over time. The organization is breaking down the implementation into manageable segments, converting one module at a time rather than implementing the entire system at once."
            },
            {
                "id": "Q13",
                "text": "Consider the following pseudocode for a system module:\n```\nfunction processOrder(order):\n    if validateOrder(order) then\n        calculateTotal(order)\n        updateInventory(order)\n        generateInvoice(order)\n        return SUCCESS\n    else\n        return ERROR\n    end if\nend function\n```\nWhich phase of the SDLC does this representation most closely align with?",
                "type": "multiple_choice",
                "options": [
                    "Requirements Analysis",
                    "System Design",
                    "Implementation",
                    "Testing"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The pseudocode provided most closely aligns with the System Design phase. It represents a high-level algorithm that outlines the processing logic without actual programming language syntax details. In System Design, algorithms and process flows are defined before moving to actual implementation (coding) in a specific programming language."
            },
            {
                "id": "Q14",
                "text": "Which of the following would be a key challenge specifically associated with Pilot Conversion?",
                "type": "multiple_choice",
                "options": [
                    "Managing data inconsistencies between different versions of the system",
                    "Training all users simultaneously",
                    "Ensuring data integrity when running two systems in parallel",
                    "Managing different business processes for the pilot group versus the rest of the organization"
                ],
                "correct_answer": 3,
                "points": 2,
                "explanation": "A key challenge specific to Pilot Conversion is managing different business processes for the pilot group versus the rest of the organization. When one department or location uses the new system while others continue using the old system, it can create operational inconsistencies and communication challenges between departments, requiring careful management of the interim period."
            },
            {
                "id": "Q15",
                "text": "A developer is examining the following test results for a login module:\n```\nTest ID: LOG-001\nInput: username='admin', password='correct_password'\nExpected Output: Login successful, redirect to dashboard\nActual Output: Login successful, redirect to dashboard\nStatus: PASS\n\nTest ID: LOG-002\nInput: username='admin', password='wrong_password'\nExpected Output: Error message 'Invalid credentials'\nActual Output: System crash, null pointer exception\nStatus: FAIL\n```\nWhat should the developer do next?",
                "type": "multiple_choice",
                "options": [
                    "Deploy the system since the valid login test passed",
                    "Debug the error handling code for invalid login attempts",
                    "Rerun the first test to ensure it consistently passes",
                    "Change the expected output of the second test to match the actual result"
                ],
                "correct_answer": 1,
                "points": 2,
                "explanation": "The developer should debug the error handling code for invalid login attempts. The test results show that while valid logins work correctly, invalid login attempts cause a system crash instead of displaying the expected error message. This indicates a defect in the error handling logic that needs to be fixed before the system can be considered properly tested."
            }
        ],
        "instructions": [
            "You have 10 minutes to complete this quiz",
            "Each question is worth 2 points",
            "You need 70% to pass",
            "All questions must be answered before submission",
            "Questions and answers are randomized for each attempt"
        ]
    }


}
