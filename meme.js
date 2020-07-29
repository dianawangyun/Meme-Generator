document.addEventListener("DOMContentLoaded", function() {
    const url = document.querySelector("#url");
    const tText = document.querySelector("#tText");
    const bText = document.querySelector("#bText");
    const addMeme = document.querySelector("#addMeme");
    const memeWrap = document.querySelector(".memeWrap");

    addMeme.addEventListener("click", function(e) {
        e.preventDefault();
        // create div
        if (url.value) {
            const newDiv = document.createElement("div");
            newDiv.classList.add("meme");
            // create img
            const img = document.createElement("img");
            img.setAttribute("src", url.value);
            // create topText
            const topText = document.createElement("div");
            topText.classList.add("topText");
            topText.textContent = tText.value;
            // create bottomText
            const bottomText = document.createElement("div");
            bottomText.classList.add("bottomText");
            bottomText.textContent = bText.value;
            // create cover
            const cover = document.createElement("div");
            cover.classList.add("cover");
            newDiv.append(img, topText, bottomText, cover);
            memeWrap.append(newDiv);
        }
        url.value = "";
        tText.value = "";
        bText.value = "";
    })

    memeWrap.addEventListener("click", function(e) {
        e.target.parentElement.remove();
    })
})