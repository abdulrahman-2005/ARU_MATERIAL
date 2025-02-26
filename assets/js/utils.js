function initializeHeader() {
    document.getElementById('institutionName').textContent = DATA.metadata.institution_name;
    document.getElementById('facultyName').textContent = DATA.metadata.faculty_name;
    document.getElementById('level').textContent = `Level ${DATA.metadata.level}`;
    document.getElementById('term').textContent = `Term ${DATA.metadata.term}`;
}

function initializeFooter() {
    const developerInfo = DATA.developer;
    const developerLink = document.getElementById('developer-link');
    developerLink.href = developerInfo.website;
    developerLink.textContent = developerInfo.name;

    const socialLinks = document.getElementById('social-links');
    socialLinks.innerHTML = '';
    
    if (developerInfo.social.github) {
        socialLinks.innerHTML += `
            <a href="${developerInfo.social.github}" target="_blank" class="social-link" title="GitHub">
                <i class="fab fa-github"></i>
            </a>
        `;
    }
    if (developerInfo.social.linkedin) {
        socialLinks.innerHTML += `
            <a href="${developerInfo.social.linkedin}" target="_blank" class="social-link" title="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
        `;
    }
    if (developerInfo.social.globe) {
        socialLinks.innerHTML += `
            <a href="${developerInfo.social.globe}" target="_blank" class="social-link" title="Portfolio">
                <i class="fas fa-globe"></i>
            </a>
        `;
    }
}

// Add other shared utility functions here 