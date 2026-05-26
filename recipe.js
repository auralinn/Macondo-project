const searchBar = document.querySelector(".search-bar");
const box = document.querySelectorAll(".recipe-link");
const notFound = document.querySelector(".notFound");
const option = document.querySelector(".filter");
const lunchOption = document.querySelectorAll(".lunch-recipe");
const breakFastOption = document.querySelectorAll(".breakfast-recipe");
const dinnerOption = document.querySelectorAll(".dinner-recipe");

// 2. Listen for typing
searchBar.addEventListener("input", (e) => {
  // Get what the user typed and make it lowercase (so 'Apple' matches 'apple')
  const searchText = e.target.value.toLowerCase();

  // 3. Loop through every recipe card
  box.forEach((recipeLink) => {
    // Find the title inside this specific card
    const title = recipeLink.querySelector("h2").textContent.toLowerCase();

    // 4. Check if the title includes the search text
    if (title.includes(searchText)) {
      recipeLink.style.display = "block";
      //   notFound.style.display = "none"// Show it
    } else {
      recipeLink.style.display = "none";
      //   notFound.style.display = "block"
      // Hide it
    }
    const allAreHidden = Array.from(box).every((recipeLink) => {
      // This is the condition we are checking
      return recipeLink.style.display === "none";
    });

    if (allAreHidden) {
      notFound.style.display = "block";
    } else {
      notFound.style.display = "none";
    }
  });
});

option.addEventListener("change", (e) => {
  const foodOption = e.target.value;

  dinnerOption.forEach((dinner) => {
    if (foodOption === "dinner") {
      dinner.style.display = "block";
    } else {
      dinner.style.display = "none";
    }
  });

  lunchOption.forEach((lunch) => {
    if (foodOption === "lunch") {
      lunch.style.display = "block";
    } else {
      lunch.style.display = "none";
    }
  });

  breakFastOption.forEach((breakfast) => {
    if (foodOption === "breakfast") {
      breakfast.style.display = "block";
    } else {
      breakfast.style.display = "none";
    }
  });
});
