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

export default renderFooter