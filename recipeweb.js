// const searchMeal = async(e) => {
//     e.preventDefault();

//     const input = document.querySelector('.search-bar')
//     const title = document.querySelector('.search-bar')
//     const info = document.querySelector('.search-bar')
//     const img = document.querySelector('.search-bar')
//      const input = document.querySelector('.search-bar')

//      const fetchMealData = async (val) =>{
//        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`)
//      }
// }

// const form = document.querySelector('form')
// form.addEventListener("submit", searchMeal);

// const searchButton = document.querySelector('.maginify-glass')
// searchButton.addEventListener("click", searchMeal);

// for counting how items are ticked off

// 1. Select all the elements we need
const checkboxes = document.querySelectorAll(".checkbox");
const currentCountDisplay = document.getElementById("num1");

// 2. Set the total number (num2) based on how many checkboxes exist

// 3. Set the initial count (num1) to 0
currentCountDisplay.textContent = 0;

// 4. Create a function to update the count
function updateCounter() {
  // This counts how many checkboxes are currently :checked
  const checkedCount = document.querySelectorAll(".checkbox:checked").length;

  // Update the text in the "num1" paragraph
  currentCountDisplay.textContent = checkedCount;
}

// 5. Add an "Event Listener" to every checkbox
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateCounter);
});

// for spotify playlist loader
const inputField = document.getElementById("spotify-input");
const loadButton = document.getElementById("load-btn");
const player = document.getElementById("spotify-player");
const correctLink = document.querySelector(".correct-link");

loadButton.addEventListener("click", () => {
  let url = inputField.value;

  // Spotify links usually look like: /playlist/123...
  // We need to change them to: /embed/playlist/123...
  if (url.includes("spotify.com")) {
    const embedUrl = url.replace("spotify.com/", "spotify.com/embed/");
    player.src = embedUrl;
  } else {
    correctLink.textContent = "Please paste a valid Spotify playlist link!";
  }
});

// 1. Grab our elements
