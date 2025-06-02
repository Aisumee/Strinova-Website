document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DOM Element References ---
    // Main Navigation
    const mainNavItems = document.querySelectorAll('.subtitles p');

    // Skill Section Elements
    const skillImagesContainer = document.querySelector('.skill-images');
    const skillTitleContainer = document.querySelector('.skill-title');
    const skillImages = document.querySelectorAll('.skill-images img');
    const skillsubNavItems = document.querySelectorAll('.skill-title p');

    // Content Sections (mapped by their data-role)
    const mainContentSections = {
        about: document.getElementById('about-information'),
        skills: document.getElementById('skills'),
        weapons: document.getElementById('weapons'),
        upgrades: document.getElementById('upgrades')
    };

    // Detailed Skill Content Sections (nested for clarity)
    const skillDetailSections = {
        'active-skill': {
            'about-skill': document.querySelector('#active-skill .active-about'),
            'details': document.querySelector('.active-deatils'),
            'video': document.querySelector('.active-video')
        },
        'passive-skill': {
            'about-skill': document.getElementById('passive-about'),
            'details': document.getElementById('passive-deatils'),
            'video': document.getElementById('passive-video')
        },
        'ultimate-skill': {
            'about-skill': document.getElementById('ultimate-about'),
            'details': document.getElementById('ultimate-deatils'),
            'video': document.getElementById('ultimate-video')
        }
    };


    // --- 2. Helper Functions ---

    /**
     * Hides all main content sections.
     */
    const hideAllMainSections = () => {
        for (const key in mainContentSections) {
            if (mainContentSections.hasOwnProperty(key)) {
                mainContentSections[key].style.display = 'none';
            }
        }
    };

    /**
     * Shows a specific main content section.
     * @param {string} role - The data-role of the section to show (e.g., 'about', 'skills').
     */
    const showMainSection = (role) => {
        hideAllMainSections();
        if (mainContentSections[role]) {
            mainContentSections[role].style.display = 'block';
        }
    };

    /**
     * Hides all individual skill detail sub-sections (About, Details, Video for all skills).
     */
    const hideAllSkillDetails = () => {
        for (const skillKey in skillDetailSections) {
            if (skillDetailSections.hasOwnProperty(skillKey)) {
                for (const detailKey in skillDetailSections[skillKey]) {
                    if (skillDetailSections[skillKey].hasOwnProperty(detailKey)) {
                        const element = skillDetailSections[skillKey][detailKey];
                        if (element) { // Check if element exists before trying to hide
                            element.style.display = 'none';
                        }
                    }
                }
            }
        }
    };

    /**
     * Shows a specific detail (About, Details, Video) for a given skill.
     * @param {string} skillType - The data-role of the skill (e.g., 'active-skill', 'passive-skill', 'ultimate-skill').
     * @param {string} detailRole - The data-role of the detail to show (e.g., 'about-skill', 'details', 'video').
     */
    const showSkillDetail = (skillType, detailRole) => {
        hideAllSkillDetails(); // Hide all skill details first
        if (skillDetailSections[skillType] && skillDetailSections[skillType][detailRole]) {
            skillDetailSections[skillType][detailRole].style.display = 'block';
        }
    };

    /**
     * Manages 'active' class for navigation items.
     * @param {NodeList|Array} navItems - Collection of elements to remove 'active' from.
     * @param {HTMLElement} activeItem - Element to add 'active' to.
     */
    const setActiveNavItem = (navItems, activeItem) => {
        navItems.forEach(item => item.classList.remove('active'));
        if (activeItem) {
            activeItem.classList.add('active');
        }
    };

    // --- 3. Event Listeners ---

    // A. Main Navigation (ABOUT, SKILLS, WEAPONS, UPGRADES)
    mainNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const role = item.dataset.role;
            setActiveNavItem(mainNavItems, item);
            showMainSection(role);

            if (role === 'skills') {
                // When 'SKILLS' is clicked, show its internal nav and images
                skillImagesContainer.style.display = 'flex'; // Use 'flex' as per your HTML structure
                skillTitleContainer.style.display = 'flex'; // Use 'flex'

                // If there are skill images, default to the first one and its 'ABOUT' details
                if (skillImages.length > 0) {
                    setActiveNavItem(skillImages, skillImages[0]); // Mark first skill image as active
                    setActiveNavItem(skillsubNavItems, document.querySelector('.skill-title p[data-role="about-skill"]')); // Mark 'ABOUT' in sub-nav as active
                    showSkillDetail(skillImages[0].dataset.role, 'about-skill');
                }
            } else {
                // If not 'SKILLS' section, hide all skill-related elements
                skillImagesContainer.style.display = 'none';
                skillTitleContainer.style.display = 'none';
                hideAllSkillDetails(); // Ensure any open skill details are hidden
            }
        });
    });

    // B. Skill Images Click Handler (Pawtector, Kitty Tracer, Mighty MeowBlast)
    skillImages.forEach(img => {
        img.addEventListener('click', () => {
            setActiveNavItem(skillImages, img); // Set the clicked skill image as active

            const skillType = img.dataset.role; // e.g., 'active-skill', 'passive-skill', 'ultimate-skill'

            // Always default to the 'ABOUT' section of the selected skill
            setActiveNavItem(skillsubNavItems, document.querySelector('.skill-title p[data-role="about-skill"]'));
            showSkillDetail(skillType, 'about-skill');
        });
    });

    // C. Skill Sub-Navigation Click Handler (ABOUT, DETAILS, VIDEO for selected skill)
    skillsubNavItems.forEach(item => {
        item.addEventListener('click', () => {
            setActiveNavItem(skillsubNavItems, item); // Set the clicked sub-nav item as active

            const detailRole = item.dataset.role; // e.g., 'about-skill', 'details', 'video'

            // Find the currently active skill image
            const activeSkillImage = document.querySelector('.skill-images img.active');

            if (activeSkillImage) {
                const skillType = activeSkillImage.dataset.role; // Get the skill type from the active image
                showSkillDetail(skillType, detailRole); // Show the specific detail for that skill
            } else {
                // Fallback: If no skill image is active (shouldn't happen if skills section is handled well),
                // default to the first skill's details.
                if (skillImages.length > 0) {
                    const defaultSkillType = skillImages[0].dataset.role;
                    showSkillDetail(defaultSkillType, detailRole);
                }
            }
        });
    });

    // --- 4. Initial Page Load State ---
    // Simulate a click on the "ABOUT" main navigation item to set the initial view.
    const initialMainNavItem = document.querySelector('.subtitles p[data-role="about"]');
    if (initialMainNavItem) {
        initialMainNavItem.click();
    }
});