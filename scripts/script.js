/*
student name: Trenyss Bowser
File name: script.js
Date: July 11, 2026
*/

// Hamburger menu function
function hamburger() {
    var menu= document.getElementById("menu-links");
    var logo= document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

//Function to display a Promo code
function discount() {
    var promo= document.getElementById("special");
    promo.firstChild.nodeValue= "Promo code:D25START"
    promo.style.color = "rgb(170, 2, 83)";
    promo.style.fontSize = "2em";
}
