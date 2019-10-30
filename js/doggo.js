const breedsUrl = "https://dog.ceo/api/breeds/image/random";

const dog = document.querySelector(".dog")

function addNewDog() {
    const promise = fetch(breedsUrl);
    promise
        .then(function (response) {
            const processingPromise = response.json()
            return processingPromise;
        })
        .then(function (processedResponse) {
            const img = document.createElement("img");
            img.src = processedResponse.message;
            img.alt = "I hate dogs, please take them all";
            dog.appendChild(img);
        })
}
let buttonOn = document.querySelector(".add-dog")

buttonOn.addEventListener('click', addNewDog);

// buttonOn.addEventListener('load', function () {
//     const load = document.createElement("img")
//     load.src = "images/load.gif";
//     load.alt = "infity loading.io";
//     return load;
// })

addNewDog.onloadstart = function () {}