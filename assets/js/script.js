// entire page should be inside of this function
$(document).ready(function () {

var headerButton = document.querySelector(".card-header-icon");

var footerButton = document.querySelector(".card-footer-item");

var dropdowns = document.querySelectorAll("select");

var pace = document.getElementById("pace");

var dietaryRestrictions = document.getElementById("diet");

var groupSize = document.getElementById("grp-size");

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
$("#searchBtn").on('click', async () => {
    let type = document.getElementById('trailType');
    let trailType = type.value;
    document.location.assign(
      "./results.html?trailType=" + trailType); 
      await Promise.race([getTrailApi()])
      renderTrail();
    console.log(trailType);
})














})