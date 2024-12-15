// Using "getElementById" to connect  JS to the HTML elements

var navButton = document.getElementById("navButton");
var navMenu = document.getElementById("navMenu");

// By clicking the button the code inside the function will run

navButton.addEventListener("click", function() {
    if (navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
    } else {
        navMenu.classList.add("show");
    }
});
