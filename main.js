
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


var sideOption = document.querySelector('input[value="side"]');
var mainOption = document.querySelector('input[value="main-dish"]');
var dessertOption = document.querySelector('input[value="dessert"]');
var entireMealOption = document.querySelector('input[value="entire-meal"]');


// functions
function showRecipe(){
  event.preventDefault();
  hideCookpot();
}

function hideCookpot(){
  cookpot.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
  }

function displayDishes() {
  if(sideOption.checked){
    foodSuggestion.innerText = sides[getRandomIndex(sides)];
  } else if (mainOption.checked){
    foodSuggestion.innerText = mainDishes[getRandomIndex(mainDishes)]
  } else if (dessertOption.checked){
    oodSuggestion.innerText = desserts[getRandomIndex(desserts)]
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
