document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("changeimage");
    const textelement = document.getElementById("changetext");
    image.addEventListener("click", function() {
        textelement.textContent = "you clicked the image!";
    });
});