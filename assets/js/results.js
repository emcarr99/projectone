$(document).ready(function () {
  const apiKey = "ae491393c8msh4acba715ebb33ebp1addcajsn3f334bdd5e78";

  // Get the user's current location
  // navigator.geolocation.getCurrentPosition((position) => {
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;

  //   // Make a request to TrailAPI to find trails near the user's location
  //   fetch(
  //     `https://trailapi-trailapi.p.rapidapi.com/trails/explore/?lat=${latitude}&lon=${longitude}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "x-rapidapi-key": apiKey,
  //         "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // Process the data returned by the API
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // });
  var results = JSON.parse(localStorage.getItem("choices"));
  // console.log(results);

  function getValues() {
    let searchValues = document.location.search.split("&");
    console.log(searchValues);

    let trailType = searchValues[0].split("=").pop();
    let dietType = searchValues[1].split("=").pop();

    getTrailApi(trailType);
    console.log(trailType);
    getSnackApi(dietType);
    console.log(dietType);
  }

  async function getTrailApi(trailType) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ae491393c8msh4acba715ebb33ebp1addcajsn3f334bdd5e78",
        "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
      },
    };

    fetch(
      "https://trailapi-trailapi.p.rapidapi.com/activity/?lat=30.36697&lon=-97.78647&q-city_cont=Austin&q-country_cont=United%20States&q-state_cont=Texas&radius=25&q-activities_activity_type_name_eq=" +
        trailType,
      options
    )
      .then((trailResults) => trailResults.json())
      .then((trailResults) => console.log(trailResults))
      .then((trailResults) => renderTrail(trailResults))
      
      .catch((err) => console.error(err));
  }

  async function getSnackApi() {}

  function renderTrail(trailResults) {
    // console.log("it works")
    // const trailCards = document.querySelectorAll(".trailCard");
    // for (var i = 0; i < trailCards.length; i++) {
    //   trailCards[i].innerHTML = "";
    //   let trailName = 
    // }
    const keys = Object.keys(trailResults);

    for (let i = 0; i < 10 && i < keys.length; i++) {
      const key = keys[i];
      const item = trailResults[key];
      // Render the item with its unique key as the key
      console.log(`<div key="${key}">
              <h2>${item.name}</h2>
              <p>${item.description}</p>
            </div>`);

    }
  }


  function renderSnack(snackResults) {}

  getValues();
});
