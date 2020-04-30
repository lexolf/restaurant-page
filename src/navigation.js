import loadWelcome from "./welcome";
import loadMenu from "./menu";

// let menuNav = document.getElementById("navbar-menu");
// let contactsNav = document.getElementById("navbar-contacts");

let renderHome = () => {
    let homeNav = document.getElementById("navbar-home");
    homeNav.addEventListener("click", function() {loadWelcome()}, false);
}

let renderMenu = () => {
    let menuNav = document.getElementById("navbar-menu");
    menuNav.addEventListener("click", function() {loadMenu()}, false);
}

// contactsNav.addEventListener("click", loadContacts, false);

export {
    renderHome, 
    renderMenu
};