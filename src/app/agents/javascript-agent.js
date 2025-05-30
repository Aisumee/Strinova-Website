const filters = document.getElementsByClassName("subtitles")[0].children;
const characters = document.getElementsByClassName("characters")[0].children;

function showCharacters(role) {
  Array.from(characters).forEach((character) => {
    if (role === "all") {
      character.style.display = "block";
    } else {
      character.style.display = character.getAttribute("data-role") === role ? "block" : "none";
    }
  });
}

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function () {
    for (let j = 0; j < filters.length; j++) {
      filters[j].classList.remove("active");
    }

    this.classList.add("active");
    const role = this.getAttribute("data-role");
    showCharacters(role);
  });
}

showCharacters("all");
