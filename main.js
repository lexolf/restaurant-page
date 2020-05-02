/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/welcome.js
const loadWelcome = () => {
    let containerExists = document.getElementById("container");
    if(!containerExists){
        var container = document.createElement("div");
        container.id = "container";
    } else {
        var container = document.getElementById("container");
        container.textContent = '';
    }
    let navbar = document.getElementById("navbar");
    navbar.after(container);
    let pageTitle = document.createElement("h1");
    pageTitle.classList = "page-title";
    pageTitle.textContent += "Welcome to Leaves & Loaves";
    container.appendChild(pageTitle);
    let mainImage = document.createElement("img");
    mainImage.id = "main-image";
    mainImage.src = "welcome.jpg";
    container.appendChild(mainImage);
    let textBlock = document.createElement("div");
    textBlock.classList = "text-block";
    container.appendChild(textBlock);
    let p1 = document.createElement("p");
    p1.textContent = "We are pleased to announce that our new greenhouse-themed bakery is now open!"
    let p2 = document.createElement("p");
    p2.textContent = "Pick a place amidst the rows of  crocuses and tulips* or among the plethora of succulents or in the shade of our ivy-decorated arches, take a sit, breathe in the air filled with flowery aromas ...and enjoy our wonderful selection of breads, buns and pies."
    let p3 = document.createElement("p");
    p3.textContent = "We advise you to order a cup of coffee made with freshly roasted Arabica beans, or try our teas: black, green, white, fruity, you name it.";
    let p4 = document.createElement("p");
    p4.innerHTML = "<em>Special offer!</em> The Easter is over but you can still try out a special Orthodox Kulich."
    let p5 = document.createElement("p");
    p5.innerHTML = "You can order a call from our manager to enquire about availability. <strong>Attention!</strong> Due to COVID-19, we currently offer only take-out orders and delivery. A special gift of succulent is optional for orders over $15."
    textBlock.appendChild(p1);
    textBlock.appendChild(p2);
    textBlock.appendChild(p3);
    textBlock.appendChild(p4);
    textBlock.appendChild(p5);
};

{/*     <div id="container">
            <h1 class="page-title">We welcome you at Leaves & Loaves!</h1>
            <img id="welcome-image" src="welcome.jpg">
            <div class="text-block">
                <p>We are pleased to announce that our new greenhouse-themed bakery is now open!</p>
                <p>Pick a place amidst the rows of  crocuses and tulips* or among the plethora of succulents or in the shade of our ivy-decorated arches, take a sit, breathe in the air filled with flowery aromas 
                ...and enjoy our wonderful selection of breads, buns and pies.</p>
                <p>We advise you to order a cup of coffee made with freshly roasted Arabica beans, or try our teas: black, green, white, fruity, you name it.</p>
                <p><em>Special offer!</em> The Easter is over but you can still try out a special Orthodox Kulich.</p>
                <p>You can order a call from our manager to enquire about availability. <strong>Attention!</strong> Due to COVID-19, we currently offer only take-out orders and delivery. A special gift of succulent is optional for orders over $15.</p>
            </div>
            <a id="call-button">Order a call</a>
            <div id="disclaimer">*The flowers are seasonal and may vary</div>
        </div> */}

/* harmony default export */ var welcome = (loadWelcome);
// CONCATENATED MODULE: ./src/navbar.js
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

{/* <div id="container">
    <h1 class="page-title">Menu</h1><img id="main-image" src="menu.jpg">
    <div id="menu-wrapper">
        <div class="menu-item"><img class="item-img" src="croissant.jpg">
            <div class="item-name">Croissant</div>
        </div>
        <div class="menu-item"><img class="item-img" src="waffle.jpg">
            <div class="item-name">Waffle with Berries</div>
        </div>
        <div class="menu-item"><img class="item-img" src="garlic.jpg">
            <div class="item-name">Garlic Bread</div>
        </div>
        <div class="menu-item"><img class="item-img" src="rye.jpg">
            <div class="item-name">Rye Bread</div>
        </div>
        <div class="menu-item"><img class="item-img" src="sesame.jpg">
            <div class="item-name">Sesame Bun</div>
        </div>
        <div class="menu-item"><img class="item-img" src="baguette.jpg">
            <div class="item-name">French Baguette</div>
        </div>
        <div class="menu-item"><img class="item-img" src="cinnamon.jpg">
            <div class="item-name">Cinnamon Roll</div>
        </div>
        <div class="menu-item"><img class="item-img" src="kulich.jpg">
            <div class="item-name">Easter Kulich</div>
        </div>
        <div class="menu-item"><img class="item-img" src="coffee.jpg">
            <div class="item-name">Black Coffee</div>
        </div>
        <div class="menu-item"><img class="item-img" src="cappuccino.jpg">
            <div class="item-name">Cappuccino</div>
        </div>
        <div class="menu-item"><img class="item-img" src="herbaltea.jpg">
            <div class="item-name">Herbal Tea</div>
        </div>
    </div>
</div> */}

/* harmony default export */ var navbar = (renderNavbar);


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
// CONCATENATED MODULE: ./src/footer.js
const renderFooter = () => {
    let content = document.getElementById("content");
    let footer = document.createElement("div");
    footer.id = "footer";
    content.appendChild(footer);
    let copyright = document.createElement("div");
    copyright.id = "restaurant-copyright";
    copyright.textContent = "Leaves & Loaves (c) 2020";
    footer.appendChild(copyright);
    let madeBy = document.createElement("div");
    madeBy.id = "made-by";
    madeBy.textContent = "Made by Lexolf";
    footer.appendChild(madeBy);
    let imageSources = document.createElement("div");
    imageSources.id = "image-sources";
    footer.appendChild(imageSources);
    let imageSourcesLabel = document.createElement("div");
    imageSourcesLabel.id = "image-sources-label";
    imageSourcesLabel.textContent = "Image sources: ";
    imageSources.appendChild(imageSourcesLabel);

    let linksArray = [
        "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bread_%28example%29.svg",
        "https://upload.wikimedia.org/wikipedia/commons/9/92/Wikimania2019_leaves_stem_icon.svg",
        "https://unsplash.com/photos/3DDvgICjBYg",
        "https://unsplash.com/photos/rsWZ-P9FbQ4",
        "https://unsplash.com/photos/m9pzwmxm2rk",
        "https://unsplash.com/photos/vDaFiSTMCgQ",
        "https://unsplash.com/photos/5XwDDNRLgMs",
        "https://unsplash.com/photos/vvEChjRq2sk",
        "https://unsplash.com/photos/gTuGowPjzpo",
        "https://unsplash.com/photos/cWXibBbXx44",
        "https://unsplash.com/photos/RbqgLewxyXo",
        "https://unsplash.com/photos/aFxBAwwfSnc",
        "https://unsplash.com/photos/zUNs99PGDg0",
        "https://unsplash.com/photos/nBJHO6wmRWw",
        "https://unsplash.com/photos/vtntD9h1xBw",
        "https://unsplash.com/photos/tMI2_-r5Nfo"
    ]


    for(let i in linksArray){
        let source = document.createElement("div");
        imageSources.appendChild(source);
        let sourceLink = document.createElement("a");
        sourceLink.classList = "source";
        sourceLink.href = linksArray[i];
        let index = parseFloat(i) + parseFloat(1);
        sourceLink.textContent = "[" + index + "]";
        source.appendChild(sourceLink);
    }
}

    //     <div id="footer">
    //     <div id="restaurant-copyright">Leaves & Loaves (c) 2020</div>
    //     <div id="made-by">Made by Lexolf</div>
    //     <ul id="image-sources">
    //         <li id="image-sources-label">Image sources:</li>
    //         <li><a href="https://upload.wikimedia.org/wikipedia/commons/f/f9/Bread_%28example%29.svg" class="source">[1]</a></li>
    //         <li><a href="https://upload.wikimedia.org/wikipedia/commons/f/f9/Bread_%28example%29.svg" class="source">[2]</a></li>
    //         <li><a href="https://unsplash.com/photos/3DDvgICjBYg" class="source">[3]</a></li>
    //         <li><a href="https://unsplash.com/photos/rsWZ-P9FbQ4" class="source">[4]</a></li>
    //         <li><a href="https://unsplash.com/photos/m9pzwmxm2rk" class="source">[5]</a></li>
    //         <li><a href="https://unsplash.com/photos/vDaFiSTMCgQ" class="source">[6]</a></li>
    //         <li><a href="https://unsplash.com/photos/5XwDDNRLgMs" class="source">[7]</a></li>
    //         <li><a href="https://unsplash.com/photos/vvEChjRq2sk" class="source">[8]</a></li>
    //         <li><a href="https://unsplash.com/photos/gTuGowPjzpo" class="source">[9]</a></li>
    //         <li><a href="https://unsplash.com/photos/cWXibBbXx44" class="source">[10]</a></li>
    //         <li><a href="https://unsplash.com/photos/RbqgLewxyXo" class="source">[11]</a></li>
    //         <li><a href="https://unsplash.com/photos/aFxBAwwfSnc" class="source">[12]</a></li>
    //         <li><a href="https://unsplash.com/photos/zUNs99PGDg0" class="source">[13]</a></li>
    //         <li><a href="https://unsplash.com/photos/nBJHO6wmRWw" class="source">[14]</a></li>
    //         <li><a href="https://unsplash.com/photos/vtntD9h1xBw" class="source">[15]</a></li>
    //     </ul>
    // </div>

/* harmony default export */ var footer = (renderFooter);
// CONCATENATED MODULE: ./src/menu.js
const loadMenu = () => {
    let containerExists = document.getElementById("container");
    if(!containerExists){
        var container = document.createElement("div");
        container.id = "container";
    } else {
        var container = document.getElementById("container");
        container.textContent = '';
    }
    let navbar = document.getElementById("navbar");
    navbar.after(container);
    let pageTitle = document.createElement("h1");
    pageTitle.classList = "page-title";
    pageTitle.textContent += "Explore Our Menu";
    container.appendChild(pageTitle);
    let mainImage = document.createElement("img");
    mainImage.id = "main-image";
    mainImage.src = "menu.jpg";
    container.appendChild(mainImage);

    let menuWrapper = document.createElement("div");
    menuWrapper.id = "menu-wrapper";
    container.appendChild(menuWrapper);

    let menuItems = [
        ['Croissant', 'croissant.jpg'],
        ['Waffle with Berries', 'waffle.jpg'],
        ['Garlic Bread', 'garlic.jpg'],
        ['Rye Bread', 'rye.jpg'],
        ['Sesame Bun', 'sesame.jpg'],
        ['French Baguette', 'baguette.jpg'],
        ['Cinnamon Roll', 'cinnamon.jpg'],
        ['Easter Kulich', 'kulich.jpg'],
        ['Black Coffee', 'coffee.jpg'],
        ['Cappuccino', 'cappuccino.jpg'],
        ['Herbal Tea', 'herbaltea.jpg'],
    ]

    for(let i in menuItems){
        let menuItem = document.createElement("div");
        menuItem.classList = "menu-item";
        menuWrapper.appendChild(menuItem);
        let itemImg = document.createElement("img");
        itemImg.classList = "item-img";
        itemImg.src = menuItems[i][1];
        menuItem.appendChild(itemImg);
        let itemName = document.createElement("div");
        itemName.classList = "item-name";
        itemName.textContent = menuItems[i][0];
        menuItem.appendChild(itemName);
    }
};

/* harmony default export */ var menu = (loadMenu);
// CONCATENATED MODULE: ./src/contacts.js
const loadContacts = () => {
    let containerExists = document.getElementById("container");
    if(!containerExists){
        var container = document.createElement("div");
        container.id = "container";
    } else {
        var container = document.getElementById("container");
        container.textContent = '';
    }
    let navbar = document.getElementById("navbar");
    navbar.after(container);
    let pageTitle = document.createElement("h1");
    pageTitle.classList = "page-title";
    pageTitle.textContent += "Contact Us";
    container.appendChild(pageTitle);
    let mainImage = document.createElement("img");
    mainImage.id = "main-image";
    mainImage.src = "contacts.jpg";
    container.appendChild(mainImage);
    let ourAddress = document.createElement("div");
    ourAddress.id = "our-address";
    ourAddress.innerHTML = "<em>Visit us:</em><br><br>12 Faun St. <br> Cair Paravel <br> Narnia <br> Phone: +1-555-DELIGHT"
    container.appendChild(ourAddress);
    let textBlock = document.createElement("div");
    textBlock.classList = "text-block";
    container.appendChild(textBlock);
    let p1 = document.createElement("p");
    p1.textContent = "If you have any questions and suggestions, or if anything during your visit was not to your liking, we would like to hear from you!"
    let p2 = document.createElement("p");
    p2.textContent = "Please contact us via the following methods:"
    textBlock.appendChild(p1);
    textBlock.appendChild(p2);
    let contactsMethods = document.createElement("div");
    contactsMethods.id = "contacts-methods";
    container.appendChild(contactsMethods);
    let i1 = document.createElement("i");
    i1.classList = "fab fa-facebook-messenger";
    contactsMethods.appendChild(i1);
    let i2 = document.createElement("i");
    i2.classList = "fab fa-whatsapp";
    contactsMethods.appendChild(i2);
    let i3 = document.createElement("i");
    i3.classList = "fab fa-instagram";
    contactsMethods.appendChild(i3);
    let i4 = document.createElement("i");
    i4.classList = "fab fa-twitter";
    contactsMethods.appendChild(i4);
    let i5 = document.createElement("i");
    i5.classList = "fab fa-vk";
    contactsMethods.appendChild(i5);
    let i6 = document.createElement("i");
    i6.classList = "fas fa-envelope";
    contactsMethods.appendChild(i6);
}

/* harmony default export */ var contacts = (loadContacts);
// CONCATENATED MODULE: ./src/navigation.js




// let menuNav = document.getElementById("navbar-menu");
// let contactsNav = document.getElementById("navbar-contacts");

let renderHome = () => {
    let homeNav = document.getElementById("navbar-home");
    homeNav.addEventListener("click", function() {welcome()}, false);
}

let renderMenu = () => {
    let menuNav = document.getElementById("navbar-menu");
    menuNav.addEventListener("click", function() {menu()}, false);
}

let renderContacts = () => {
    let menuNav = document.getElementById("navbar-contacts");
    menuNav.addEventListener("click", function() {contacts()}, false);
}


// CONCATENATED MODULE: ./src/index.js





navbar();
welcome();
footer();
renderHome();
renderMenu();
renderContacts();

/***/ })
/******/ ]);