document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleZoom");
    const contents = document.querySelectorAll(".content");
    let isZoomActive = false;

    toggleButton.addEventListener("click", function () {
        isZoomActive = !isZoomActive;
        toggleButton.textContent = isZoomActive ? "Desactivar Zoom" : "Activar Zoom";
    });

    contents.forEach(content => {
        content.addEventListener("mouseenter", function () {
            if (isZoomActive) {
                content.classList.add("zoomed");
            }
        });

        content.addEventListener("mouseleave", function () {
            if (isZoomActive) {
                content.classList.remove("zoomed");
            }
        });
    });
});
