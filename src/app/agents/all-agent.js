const mainNavItems = Array.from(document.querySelectorAll(".subtitles")[0].children);
const skillImageNavItems = Array.from(document.querySelectorAll(".skill-images")[0].children);
const skillNavItems = Array.from(document.querySelectorAll(".skill-title")[0].children);

const mainContentSections = {};
mainNavItems.forEach((item) => {
  const role = item.dataset.role;
  if (role) {
    mainContentSections[role] = document.getElementById(role);
  }
});

const skillImageSections = {};
const skillContentSections = {};
skillImageNavItems.forEach((item) => {
  const role = item.dataset.role;
  if (role) {
    skillImageSections[role] = document.getElementById(role);
    skillNavItems.forEach((childItem) => {
      const childRole = childItem.dataset.role;
      if (childRole) {
        const childrenArray = Array.from(skillImageSections[role].children);
        skillContentSections[role] = skillContentSections[role] || {};
        skillContentSections[role][childRole] = childrenArray.find((child) => child.id === childRole);
      }
    });
  }
});

let activeSkillImage = null;

const showSection = (sections, role) => {
  for (const key in sections) {
    if (sections.hasOwnProperty(key)) {
      sections[key].style.display = "none";
    }
  }
  if (sections[role]) {
    sections[role].style.display = "block";
  }
};

const setActiveNavItem = (navItems, item) => {
  navItems.forEach((navItem) => {
    navItem.classList.remove("active");
  });
  if (item) {
    item.classList.add("active");
  }
};

mainNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    setActiveNavItem(mainNavItems, item);
    showSection(mainContentSections, item.dataset.role);
  });
});

skillImageNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    activeSkillImage = item.dataset.role;
    setActiveNavItem(skillImageNavItems, item);
    showSection(skillImageSections, item.dataset.role);

    if (skillNavItems[0]) {
      skillNavItems[0].click();
    }
  });
});

skillNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    setActiveNavItem(skillNavItems, item);
    showSection(skillContentSections[activeSkillImage], item.dataset.role);
  });
});

const initialMainNavItem = mainNavItems[0];
if (initialMainNavItem) {
  initialMainNavItem.click();
}

const initialSkillImage = skillImageNavItems[0];
if (initialSkillImage) {
  initialSkillImage.click();
}
