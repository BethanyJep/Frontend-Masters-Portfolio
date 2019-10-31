const breedsUrl = "https://dog.ceo/api/breeds/image/random";
const dog = document.querySelector(".dog");

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

const breedImage = document.getElementById("breedImage");
const loader = document.getElementById('loader');
const dogBreed = document.getElementById('dogBreed');

async function populateList() {
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const resJson = await res.json();
    
    let breeds = "<option></option>";
    let breedList = Object.keys(resJson.message);

    for (let i = 0; i < breedList.length; i++) {
        breeds += `<option value=${breedList[i]}>${breedList[i]}</option>`;
    }
    
    dogBreed.innerHTML = breeds;
    
    const randomRes = await fetch("https://dog.ceo/api/breeds/image/random");
    const randomResJson = await randomRes.json();

    breedImage.src = randomResJson.message;

    dogBreed.addEventListener("change", handleBreedChange);

    breedImage.addEventListener("load", function () {
        breedImage.classList.add("show");
        loader.classList.remove("show");
  });
}

async function handleBreedChange(event) {
  const breed = event.target.value;

  breedImage.classList.remove("show");
  loader.classList.add("show");

  const res = await fetch(` https://dog.ceo/api/breed/${breed}/images/random`);
  const resJson = await res.json();

  breedImage.src = resJson.message;
}

populateList(); 