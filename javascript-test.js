document.addEventListener('DOMContentLoaded', function() {
    // Define the different sets of content
    const contentSets = {
        1: {
            title: "PUS",
            description: "The official government of the new world, maintaining order while striving to find a cure for Collapse Syndrome",
            images: ["public/bg/pus-icon-removebg-preview.png", "public/bg/scissors-icon-unclcikedremovebg-preview.png", "public/bg/urbino-symbol-unclicked-removebg-preview.png"],
            background: "url('public/bg/PUS_Wallpaper.jpg')"
        },
        2: {
            title: "SCISSORS",
            description: "An armed group opposing P.U.S is attempting to seize control of Bablo Crystals to open a portal back to the old world.",
            images: ["public/bg/pus-icon-notclicked-removebg-preview.png", "public/bg/scissors-icon-removebg-preview.png", "public/bg/urbino-symbol-unclicked-removebg-preview.png"],
            background: "url('public/bg/scissors-wallpaper.jpg')"
        },
        3: {
            title: "URBINO",
            description: "A commercial syndicate controlling the industries of the new world, exploring ways to reach other dimensions using crystal energy",
            images: ["public/bg/pus-icon-notclicked-removebg-preview.png", "public/bg/scissors-icon-unclcikedremovebg-preview.png", "images/image3c.jpg"],
            background: "url('public/bg/urbino-background.png'')"
        }
    };
    
    // Get all the clickable images
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    // Add click event listeners to each image
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const setId = this.getAttribute('data-set');
            updateContent(setId);
        });
    });
    
    // Function to update all content
    function updateContent(setId) {
        const set = contentSets[setId];
        
        // Update background
        document.body.style.backgroundImage = set.background;
        
        // Update title and description
        document.getElementById('gallery-title').textContent = set.title;
        document.getElementById('gallery-description').textContent = set.description;
        
        // Update all images
        const images = document.querySelectorAll('.gallery-image');
        images.forEach((img, index) => {
            img.src = set.images[index];
            img.setAttribute('data-set', setId); // Update the dataset to the new set
        });
    }
    
    // Initialize with first set
    updateContent(1);
});
    const firstImage = document.querySelector('.gallery-image[data-set="1"]');
    if (firstImage) {
        firstImage.click();
    }
