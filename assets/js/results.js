$(document).ready(function () {

const apiKey = "ae491393c8msh4acba715ebb33ebp1addcajsn3f334bdd5e78";

// Get the user's current location
navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Make a request to TrailAPI to find trails near the user's location
  fetch(
    `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${latitude}&lon=${longitude}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Process the data returned by the API
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
var results = JSON.parse(localStorage.getItem("choices"));
console.log(results);

function getValues() {
 let searchValues = document.location.search.split('&')
 console.log(searchValues);
}

async function getTrailApi () {

}

async function getSnackApi () {

}

function renderTrail (trailResults) {

}

function renderSnack (snackResults) {

}










})