
//query selectors
var buttonLetsCook = document.querySelector(".letscook");
var cookpot = document.querySelector(".cookpot");
var youShouldMake = document.querySelector(".you-should-make");
var foodSuggestion = document.querySelector(".result");

//event listeners
buttonLetsCook.addEventListener("click", showRecipe);

//recipes
var sides = ["Baked Pineapple", "Smashed Cauliflower", "Colorful Spinach and Prosciutto", "Sauteed Summer Squash", "Spicy Bean and Corn Salsa", "Kale and Mushroom", "Baked Potato", "Seasonal Veggies", "Corn Muffin", "Scalloped Potatos"];
var mainDishes = ["Chicken Parmesan", "Sicilian Roasted Chicken", "Spaghetti Carbonara", "Dumplings", "Reuben Sandwich", "German Hamburgers", "Chicken Pot Pie", "Braised Corned Beef Brisket", "Cilantro-Lime Baked Shrimp", "Shoyu Pork", "Salmon Patties", "Ranch Pork Chops", "Avocado Tacos", "Spinach Lasagna", "Vegetarian Meatloaf"];
var desserts = ["Ice Cream", "Tiramisu Toffee", "Strawberry Pudding", "Pumpkin Pie", "Chocolate Lava Cake", "Key Lime Pie", "Cheesecake",];
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
  if( radio.value === 'meal'){
    foodSuggestion.innerText = `${foodArray["main"][randomMeal]} with a side of `
    foodSuggestion.innerText += ` ${foodArray["sides"][randomMeal]} `
    foodSuggestion.innerText += ` and ${foodArray["dessert"][randomMeal]} for dessert!`
  } else {
    foodSuggestion.innerText = `${foodArray[radio.value][randomMeal]}`;
  }
}
