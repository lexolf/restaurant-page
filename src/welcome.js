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

export default loadWelcome