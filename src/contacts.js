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

export default loadContacts