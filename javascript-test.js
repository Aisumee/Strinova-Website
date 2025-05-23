const CONTENT_SETS = {
  1: {
    title: "PUS",
    description:
      "The official government of the new world, maintaining order while striving to find a cure for Collapse Syndrome",
    images: [
      "public/bg/pus-icon-removebg-preview.png",
      "public/bg/scissors-icon-unclcikedremovebg-preview.png",
      "public/bg/urbino-symbol-unclicked-removebg-preview.png",
    ],
    background: "url('public/bg/PUS_Wallpaper.jpg')",
  },
  2: {
    title: "SCISSORS",
    description:
      "An armed group opposing P.U.S is attempting to seize control of Bablo Crystals to open a portal back to the old world.",
    images: [
      "public/bg/pus-icon-notclicked-removebg-preview.png",
      "public/bg/scissors-icon-removebg-preview.png",
      "public/bg/urbino-symbol-unclicked-removebg-preview.png",
    ],
    background: "url('public/bg/scissors-wallpaper.jpg')",
  },
  3: {
    title: "URBINO",
    description:
      "A commercial syndicate controlling the industries of the new world, exploring ways to reach other dimensions using crystal energy",
    images: [
      "public/bg/pus-icon-notclicked-removebg-preview.png",
      "public/bg/scissors-icon-unclcikedremovebg-preview.png",
      "public/bg/urbino-symbol-unclicked-removebg-preview.png",
    ],
    background: "url('public/bg/urbino-background.png'')",
  },
};

const galleryContainer = document.getElementsByClassName("gallery-container")[0];
const galleryTitle = document.getElementById("gallery-title");
const galleryDescription = document.getElementById("gallery-description");
const updateContent = (setId) => {
  const set = CONTENT_SETS[setId];

  galleryContainer.style.backgroundImage = set.background;
  galleryTitle.textContent = set.title;
  galleryDescription.textContent = set.description;

  const images = document.querySelectorAll(".gallery-image");
  images.forEach((img, index) => {
    img.src = set.images[index];
  });
};

const galleryImages = document.querySelectorAll(".gallery-image");
galleryImages.forEach((image) => {
  const setId = image.getAttribute("data-set");
  image.addEventListener("click", function () {
    updateContent(setId);
  });
});

updateContent(1);
