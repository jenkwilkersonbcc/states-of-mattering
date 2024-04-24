/* Hamburger Menu */

/* This script will use the toggle method to display and hide the menu. */

// Define a variable to serve as the container for the hamburger.
let icon = document.querySelector(".hamburger");

// Define a variable to serve as a container for the menu.
let myMenu = document.querySelector(".menu");

// Add event listener to hamburger icon.
icon.addEventListener("click", menuToggle);

// Add event listener to window
window.addEventListener("resize", checkWindowSize);

// Create a function that will check the window size.
function checkWindowSize() {
    // Define variable to serve as container for the window size.
    let myWindowSize = screen.width;

    if(myWindowSize >= 768) {
        myMenu.style.display = "flex";
    }
}

// Create function that will change the display value of the menu.
function menuToggle() {
   
    // This logic toggles the menu display property.
    if (myMenu.style.display === "flex") {
        myMenu.style.display = "none";
    } else {
        myMenu.style.display = "flex";
    }
}