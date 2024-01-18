var loadFile = function (event) {
    var image = document.getElementById("output");
    image.src = URL.createObjectURL(event.target.files[0]);

    // Save the image to local storage
    localStorage.setItem('userImage', image.src);
};

// Check for a saved image on page load
window.onload = function () {
    var savedImage = localStorage.getItem('userImage');
    if (savedImage) {
        document.getElementById("output").src = savedImage;
    }
};
