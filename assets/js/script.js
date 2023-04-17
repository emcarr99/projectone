// NOTES
var headerButton = document.getElementById("card-header-icon");

var footerButton = document.getElementById("card-footer-item");

var dropdowns=document.querySelectorAll("select");

var pace=document.getElementById("pace");

var dietaryRestrictions=document.getElementById("diet");

var groupSize=document.getElementById("grp-size")

dropdowns.forEach(dietaryRestrictions => {
    const dietNone = dropdowns.querySelector("diet-none");
    const dietDairy= dropdowns.querySelector("diet-dairy");
    const dietGluten = dropdowns.querySelector("diet-gluten");
    const dietNuts = dropdowns.querySelector("diet-nuts");
})

dropdowns.forEach(pace => {
 const paceSurprise = dropdowns.querySelector("pace-surprise");
 const paceEasy = dropdowns.querySelector("pace-easy");
 const paceMedium = dropdowns.querySelector("pace-medium");
 const paceHard = dropdowns.querySelector("pace-hard");
})

dropdowns.forEach(groupSize => {
    const solo= dropdowns.querySelector("grp-size-solo");
    const paceEasy = dropdowns.querySelector("grp-size-date");
    const paceMedium = dropdowns.querySelector("grp-size-5");
    const paceHard = dropdowns.querySelector("grp-size-big");
   })
