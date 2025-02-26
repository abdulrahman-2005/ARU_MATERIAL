const DATA = {
    "metadata": {
        "institution_id": "ARISH_001",
        "institution_name": "ARISH University",
        "faculty_id": "FAC_001",
        "faculty_name": "Faculty of Computers and Information",
        "level": 2,
        "term": 2,
        "schedule_type": "Face to Face",
        "version": "1.1.0-beta"
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
            "instructors": ["INS_001", "INS_005"],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Introduction to DBMS",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_001"],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                }
            ]
        },
        "CRS_002": {
            "name": "Introduction to Information System",
            "code": "IS101",
            "credit_hours": 3,
            "instructors": ["INS_001", "INS_010"],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Information Systems Overview",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_002"],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                }
            ]
        },
        "CRS_003": {
            "name": "Introduction to Software Engineering",
            "code": "SE101",
            "credit_hours": 3,
            "instructors": ["INS_002", "INS_004"],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Introduction to Software Engineering",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_005",
                    ],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 2: SOFTWARE PROCESSES",
                    "src": "Lecture2.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_006",
                    ],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 3: Requirements Engineering",
                    "src": "Lecture3.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_007",
                    ],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Lecture 4: System Modeling",
                    "src": "Lecture4.pdf",
                    "type": "lecture",
                    "quizzes": [
                        "QZ_008",
                    ],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Section 1: Lab 1 UML, SRS",
                    "src": "Section1.pdf",
                    "type": "section",
                    "quizzes": [
                        "QZ_009",
                    ],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "Section 2: Lab 2",
                    "src": "Section2.pdf",
                    "type": "section",
                    "quizzes": [
                        "QZ_010",
                    ],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                },
                {
                    "title": "ATM Software Summary",
                    "src": "ATMSoftware",
                    "type": "contribution",
                    "contributors": ["CON_001", "CON_002"],
                    "quizzes": [
                    ],
                    "messages": [

                    ]
                }
            ]
        },
        "CRS_004": {
            "name": "Analysis and Design of Algorithm",
            "code": "ALG101",
            "credit_hours": 3,
            "instructors": ["INS_003", "INS_006"],
            "has_lecture": true,
            "has_section": true,
            "files": [
            ]
        },
        "CRS_005": {
            "name": "Data Structure",
            "code": "DS101",
            "credit_hours": 3,
            "instructors": ["INS_003", "INS_008"],
            "has_lecture": true,
            "has_section": true,
            "files": [
            ]
        },
        "CRS_006": {
            "name": "Introduction to System Analysis and Design",
            "code": "SAD101",
            "credit_hours": 3,
            "instructors": ["INS_005", "INS_007"],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Introduction to System Analysis and Design",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_004"],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
                }
            ]
        },
        "CRS_007": {
            "name": "Introduction to Computer network",
            "code": "NET101",
            "credit_hours": 3,
            "instructors": ["INS_008", "INS_009"],
            "has_lecture": true,
            "has_section": true,
            "files": [
                {
                    "title": "Lecture 1: Network Fundamentals",
                    "src": "Lecture1.pdf",
                    "type": "lecture",
                    "quizzes": ["QZ_003"],
                    "messages": [
                        {
                            "type": "quiz_available",
                            "text": "Quiz available for this lecture"
                        }
                    ]
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
            "instructor_id": "INS_003",
            "session_type_id": "ST_001"
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
    }




}