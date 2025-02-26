document.addEventListener('DOMContentLoaded', () => {
    // DATA is available from meta.js
    const developerInfo = DATA.developer;
    
    // Set landing page information
    document.getElementById('landing-institution').textContent = DATA.metadata.institution_name;
    document.getElementById('landing-faculty').textContent = DATA.metadata.faculty_name;
    // Add version badge
    const versionText = document.getElementById('version-text');
    if (versionText) {
        versionText.textContent = `v${DATA.metadata.version}`;
    }

    // Add developer info to landing page
    const landingContent = document.querySelector('.landing-content');
    landingContent.insertAdjacentHTML('beforeend', `
        <div class="developer-badge">
            <i class="fas fa-code"></i>
            Developed by <a href="${developerInfo.website}" target="_blank">${developerInfo.name}</a>
        </div>
    `);

    

    // Initialize footer
    initializeFooter();

});

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