

const mainFilters = document.querySelectorAll('.sub-titles p');
const mainContentSections = document.querySelectorAll(
  '.main > div[data-role="about"], ' +
  '.main > div[data-role="weapons"], ' +
  '.main > div[data-role="upgrades"], ' +
  '#skills' 
);


function showMainContent(roleToShow) {
    mainContentSections.forEach(section => {
        section.style.display = 'none';
    });

    if (roleToShow === 'skills') {
        document.getElementById('skills').style.display = 'block';
        const defaultSkillTab = document.querySelector('.skill-title p[data-role="about-skill"]');
        if (defaultSkillTab) {
            defaultSkillTab.click(); 
        }
    } else {
        const targetSection = document.querySelector(`.main > div[data-role="${roleToShow}"]`);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }
}

mainFilters.forEach(filter => {
    filter.addEventListener('click', function() {
        mainFilters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        const role = this.getAttribute('data-role');
        showMainContent(role);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultMainTab = document.querySelector('.sub-titles p[data-role="about"]');
    if (defaultMainTab) {
        defaultMainTab.click();
    }
});



const skillFilters = document.querySelectorAll('.skill-title p');
const skillContentSections = document.querySelectorAll(
  '#skills > div[data-role="about-skill"], ' +
  '#skills > div[data-role="details"], ' +
  '#skills > div[data-role="video"]'
);

function showSkillContent(roleToShow) {
    // Hide all skill content sections first
    skillContentSections.forEach(section => {
        section.style.display = 'none';
    });
    const targetSkillSection = document.querySelector(`#skills > div[data-role="${roleToShow}"]`);
    if (targetSkillSection) {
        targetSkillSection.style.display = 'block';
    }
}

skillFilters.forEach(filter => {
    filter.addEventListener('click', function() {
        skillFilters.forEach(f => f.classList.remove('active'));
        this.classList.add('active');
        const role = this.getAttribute('data-role');
        showSkillContent(role);
    });
});
