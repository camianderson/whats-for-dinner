
//query selectors
var buttonLetsCook = document.querySelector(".letscook");
var cookpot = document.querySelector(".cookpot");
var youShouldMake = document.querySelector(".you-should-make");
var foodSuggestion = document.querySelector(".result");

//event listeners
buttonLetsCook.addEventListener("click", showRecipe);

//recipes
var sides = ["fries", "beans", "rice", "salad", "baked potato"];
var mainDishes = ["Strogonoff", "Hamburger", "Pasta", "Tacos", "Pizza"];
var desserts = ["Ice Cream", "Pudim", "Black Forest Cake", "Cupcake"];
var meal = [];

var foodArray = {
  sides: sides,
  main: mainDishes,
  dessert: desserts,
  meal: meal,
}

// functions
function showRecipe(){
  event.preventDefault();
  hideCookpot();
  displayDishes();
}

function hideCookpot(){
  cookpot.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
  }

function displayDishes() {
  var radio = document.querySelector('input[type=radio]:checked');
  var randomMeal = getRandomIndex(foodArray[radio.value]);
  foodSuggestion.innerText = `${foodArray[radio.value][randomMeal]}`;

}
