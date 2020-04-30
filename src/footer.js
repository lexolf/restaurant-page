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
    let imageSources = document.createElement("ul");
    imageSources.id = "image-sources";
    footer.appendChild(imageSources);
    let imageSourcesLabel = document.createElement("li");
    imageSourcesLabel.id = "image-sources-label";
    imageSourcesLabel.textContent = "Image sources: ";
    imageSources.appendChild(imageSourcesLabel);
    let source1 = document.createElement("li");
    imageSources.appendChild(source1);
    let source1link = document.createElement("a");
    source1link.classList = "source";
    source1link.href = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bread_%28example%29.svg";
    source1link.textContent = "[1]";
    source1.appendChild(source1link);
    let source2 = document.createElement("li");
    imageSources.appendChild(source2);
    let source2link = document.createElement("a");
    source2link.classList = "source";
    source2link.href = "https://upload.wikimedia.org/wikipedia/commons/9/92/Wikimania2019_leaves_stem_icon.svg";
    source2link.textContent = "[2]";
    source2.appendChild(source2link);
    let source3 = document.createElement("li");
    imageSources.appendChild(source3);
    let source3link = document.createElement("a");
    source3link.classList = "source";
    source3link.href = "https://unsplash.com/photos/3DDvgICjBYg";
    source3link.textContent = "[3]";
    source3.appendChild(source3link);
    let source4 = document.createElement("li");
    imageSources.appendChild(source4);
    let source4link = document.createElement("a");
    source4link.classList = "source";
    source4link.href = "https://unsplash.com/photos/rsWZ-P9FbQ4";
    source4link.textContent = "[4]";
    source4.appendChild(source4link);
}

    //     <div id="footer">
    //     <div id="restaurant-copyright">Leaves & Loaves (c) 2020</div>
    //     <div id="made-by">Made by Lexolf</div>
    //     <ul id="image-sources">
    //         <li id="image-sources-label">Image sources:</li>
    //         <li><a href="https://upload.wikimedia.org/wikipedia/commons/f/f9/Bread_%28example%29.svg" class="source">[1]</a></li>
    //         <li><a href="https://upload.wikimedia.org/wikipedia/commons/9/92/Wikimania2019_leaves_stem_icon.svg" class="source">[2]</a></li>
    //         <li><a href="https://unsplash.com/photos/3DDvgICjBYg" class="source">[3]</a></li>
    //         <li><a href="https://unsplash.com/photos/rsWZ-P9FbQ4" class="source">[4]</a></li>
    //     </ul>
    // </div>

export default renderFooter