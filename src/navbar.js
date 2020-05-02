const renderNavbar = () => {
    let content = document.getElementById("content");
    let navbar = document.createElement("div");
    navbar.id = "navbar";
    content.appendChild(navbar);
    let navbarBrand = document.createElement("div");
    navbarBrand.id = "navbar-brand";
    navbar.appendChild(navbarBrand);
    let navbarLogo = document.createElement("img");
    navbarLogo.src = "logo.png";
    navbarLogo.id = "navbar-logo";
    navbarBrand.appendChild(navbarLogo);
    let navbarTitle = document.createElement("div");
    navbarTitle.id = "navbar-title";
    navbarTitle.textContent = "Leaves\r\n";
    navbarTitle.textContent += "&\r\n";
    navbarTitle.textContent += "Loaves";
    navbarBrand.appendChild(navbarTitle);
    let navbarLinks = document.createElement("div");
    navbarLinks.id = "navbar-links";
    navbar.appendChild(navbarLinks);
    let navbarHome = document.createElement("a");
    navbarHome.id = "navbar-home";
    navbarHome.classList = "navbar-link";
    navbarHome.textContent = "Home";
    navbarHome.href="#home";
    navbarLinks.appendChild(navbarHome);
    let navbarMenu = document.createElement("a");
    navbarMenu.id = "navbar-menu";
    navbarMenu.classList = "navbar-link";
    navbarMenu.textContent = "Menu";
    navbarMenu.href="#menu";
    navbarLinks.appendChild(navbarMenu);
    let navbarContacts = document.createElement("a");
    navbarContacts.id = "navbar-contacts";
    navbarContacts.classList = "navbar-link";
    navbarContacts.textContent = "Contacts";
    navbarContacts.href="#contacts";
    navbarLinks.appendChild(navbarContacts);
};

export default renderNavbar


{/* <div id="navbar">
    <div id="navbar-brand">
        <img src="logo.png" id="navbar-logo">
            <div id="navbar-title">Leaves & Loaves</div>
    </div>
    <div id="navbar-links">
        <a id="navbar-home" class="navbar-link">Home</a>
        <a id="navbar-menu" class="navbar-link">Menu</a>
        <a id="navbar-contacts" class="navbar-link">Contacts</a>
    </div>
</div> */}