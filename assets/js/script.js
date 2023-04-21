// entire page should be inside of this function
$(document).ready(function () {

var headerButton = document.querySelector(".card-header-icon");

var footerButton = document.querySelector(".card-footer-item");

var dropdowns = document.querySelectorAll("select");

var pace = document.getElementById("pace");

var dietaryRestrictions = document.getElementById("diet");

var groupSize = document.getElementById("grp-size");

var clearButton = document.querySelector("#modal-btn");

var modal = document.querySelector(".modal");

var reset =document.querySelector("#reset")

//var closeModal = document.querySelector("#mod-clear")
//dropdowns.forEach(dietaryRestrictions => {
const dietNone = document.querySelector("diet-none");
const dietDairy = document.querySelector("diet-dairy");
const dietGluten = document.querySelector("diet-gluten");
const dietNuts = document.querySelector("diet-nuts");
//})

//dropdowns.forEach(pace => {
const paceSurprise = document.querySelector("pace-surprise");
const paceEasy = document.querySelector("pace-easy");
const paceMedium = document.querySelector("pace-medium");
const paceHard = document.querySelector("pace-hard");
//})

//dropdowns.forEach(groupSize => {
const solo = document.querySelector("grp-size-solo");
const grpDate = document.querySelector("grp-size-date");
const grpBig = document.querySelector("grp-size-5");
const grpHuge = document.querySelector("grp-size-big");
//})
reset.addEventListener("click", function (event) {
    console.log("resetting")
var noDiet =document.querySelector("#diet-default");
var noTrail =document.querySelector("#trail-default");
var noGrpsize =document.querySelector("#grpsz-default");
noDiet.value= " ";
noTrail.value=" ";
noGrpsize.value=" ";

var content = JSON.parse(localStorage.getItem("choices"));
if (content[0] && content[0].length > 0){
  console.log(content[0]);
  var dietaryPreference = document.getElementById("display-text1");
  dietaryPreference.innerText=(content[0]); 
}
  if (content[1] && content[1].length > 0){
  console.log(content[1]);
  var trailType = document.getElementById("display-text2");
  trailType.innerText=(content[1]); 
  }

  if (content[2] && content[2].length > 0){
    console.log(content[2]);
    var grpSize = document.getElementById("display-text3");
    grpSize.innerText=(content[2]); 
    }

  localStorage.clear();
  
})

footerButton.addEventListener("click", function (event) {
    var options = document.querySelectorAll("option")
    var results = [];
    options.forEach(function (option) {
        if (option.selected == true) {
            results.push(option.textContent)
        }
    })
//var results= localStorage.getItem("choices")
localStorage.setItem("choices", JSON.stringify(results));
})
// using async function to use a promise to pass in parameters
$("#searchBtn").on("click", async () => {
  let type = document.getElementById("trailType").value;
  let diet = document.getElementById("diet").value;
  let city = document.getElementById("cityInput").value;
  let state = document.getElementById("stateInput").value;
  document.location.assign(
    `./results.html?city=${city}&state=${state}&trailType=${trailType}&diet=${diet}`
  );
  await Promise.race([getTrailApi(), getSnackApi()]);
  renderTrail();

  console.log(type, diet);
});


//document.addEventListener('DOMContentLoaded', () => {/
    console.log("loading?")
    // Functions to open and close a modal
    function openModal($el) {
        console.log("open")
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
        console.log("close")
      $el.classList.remove('is-active');
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
        console.log("hello!")
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
     const $target = $close.closest('.modal');
  //const $target = $(".modal")
  console.log(closeModal)
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;
  
      if (e.key=== 27) { // Escape key
        closeAllModals();
      }
    });
  });










//})
