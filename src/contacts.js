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
}

export default loadContacts