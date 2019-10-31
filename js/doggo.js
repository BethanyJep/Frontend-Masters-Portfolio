const breedsUrl = "https://dog.ceo/api/breeds/image/random";
const dog = document.querySelector(".dog");
const breedList = "https://dog.ceo/api/breeds/list/all";
const searchDogs = document.getElementById("search");

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
            img.style.width = 'auto';
            img.style.height = '200px';
            img.style.margin = '10px';
            img.style.borderRadius = '10px';
            dog.appendChild(img);
        })
}
let buttonOn = document.querySelector(".add-dog")
buttonOn.addEventListener('click', addNewDog);

function searchBreed() {
    const promise = fetch(breedList);
    promise
        .then(function (respond) {
            const processPromise = respond.json()
            return processPromise;
        })
        .then(function (processedResponse) {
            const searchDogs = getElementById('search')
            searchDogs.value = processedResponse.message;

        })
        .then(function () {
            
        })
}

function loading() {
    const load = document.createElement("img")
    load.src = "images/load.gif";
    load.alt = "infity loading.io";
    return load;
}