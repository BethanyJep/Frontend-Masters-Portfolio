const designUrl = "https://res.cloudinary.com/demo/image/fetch/https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png"
const buttonOn = document.querySelector(".button")
const design = document.getElementsByClassName("design")

function imageAdd() {
            const img = document.createElement("img");
            img.src = designUrl;
            img.alt = "I hate dogs, please take them all";
            design.appendChild(img);
        }

buttonOn.addEventListener('click', imageAdd)