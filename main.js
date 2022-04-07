
//query selectors
var buttonLetsCook = document.querySelector("#letscook");
var cookpot = document.querySelector(".cookpot");
var youShouldMake = document.querySelector(".you-should-make");

//event listeners
buttonLetsCook.addEventListener("click", showRecipe);


// functions
function showRecipe(){
  event.preventDefault();
  hideCookpot();

function hideCookpot(){
  cookpot.classList.add("hidden");
  youShouldMake.classList.remove("hidden");
  }
