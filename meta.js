let DATA = {
    "metadata": {
        "institution_id": "ARISH_001",
        "institution_name": "ARISH University",
        "faculty_id": "FAC_001",
        "faculty_name": "Faculty of Computers and Information",
        "level": 2,
        "term": 1,
        "schedule_type": "Face to Face",
        "version": "2.2.0-alpha",
    },
    "developer": {
        "name": "Abdelrahman Azmy",
        "role": "Software Developer",
        "website": "https://abdoazmy.netlify.app",
        "social": {
            "github": "https://www.github.com/abdulrahman-2005",
            "linkedin": "https://www.linkedin.com/in/abuazmy2/",
            "globe": "https://abdoazmy.netlify.app"
        },
        "description": "Passionate about creating intuitive and efficient web applications"
    },
    "landing_page": {
        "available_years": [2,1,3,4],
        "available_terms": [2]
    }
}

localStorage.setItem("MATERIAL_FCI_VERSION", JSON.stringify(DATA.metadata.version));