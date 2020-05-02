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
    pageTitle.textContent += "Menu";
    container.appendChild(pageTitle);
    let mainImage = document.createElement("img");
    mainImage.id = "main-image";
    mainImage.src = "menu.jpg";
    container.appendChild(mainImage);

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

    }
};

export default loadMenu