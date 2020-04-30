import loadWelcome from "./welcome";

// let menuNav = document.getElementById("navbar-menu");
// let contactsNav = document.getElementById("navbar-contacts");

let renderHome = () => {
    let homeNav = document.getElementById("navbar-home");
    homeNav.addEventListener("click", function() {loadWelcome()}, false);
}

// menuNav.addEventListener("click", loadMenu, false);
// contactsNav.addEventListener("click", loadContacts, false);

export default renderHome;