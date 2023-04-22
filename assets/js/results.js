$(document).ready(function () {
  const apiKey = "ae491393c8msh4acba715ebb33ebp1addcajsn3f334bdd5e78";

  var results = JSON.parse(localStorage.getItem("choices"));
  // console.log(results);

  // async function to receive values from search specifications
  function getValues() {
    let searchValues = document.location.search.split("&");
    // console.log(searchValues);

    let trailType = searchValues[0].split("=").pop();
    let dietType = searchValues[1].split("=").pop();

    getTrailApi(trailType);
    // console.log(trailType);
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
    // console.log(trailType);
    fetch(
      "https://trailapi-trailapi.p.rapidapi.com/activity/?lat=34.1&limit=25&lon=-105.2&q-city_cont=Austin&q-country_cont=United%20States&q-state_cont=Texas&radius=25&q-activities_activity_type_name_eq" +
        trailType,
      options
    )
      .then((trailResults) => trailResults.json())
      .then((trailResults) => {
        // console.log(trailResults);
        // console.log(Object.values(trailResults));
        return Object.values(trailResults);
        // return trailResults;
      })
      .then((trailResults) => renderTrail(trailResults))

      .catch((err) => console.error(err));
  }
// console.log(dietType);
  // fetches the snack recipes
  async function getSnackApi(dietType) {
    let recipeResults = await fetch(
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=6e31f74f&app_key=d2f7dc250b26add1c1083d4f189e78d8&mealType=snack&dishType=biscuits%20and%20cookies&health=" +
      dietType
    );

    let recipeList = await recipeResults.json();
    // console.log(recipeList);

    renderSnack(recipeList);
  }
  // renders trail list on the results page
  function renderTrail(trailResults) {
    // console.log("it works")
    const trailCards = document.querySelectorAll(".trailCard");
    for (var i = 0; i < trailCards.length; i++) {
      trailCards[i].innerHTML = "";

    }
    const keys = Object.keys(trailResults);

    for (let i = 0; i < 5 && i < keys.length; i++) {
      const key = keys[i];
      const item = trailResults[key];
      // Render the item with its unique key as the key
      trailCards[i].innerHTML = (`<div id="${key}">
              <h1>${item.name}</h1>
              <p>${item.description}</p>
            </div>`);

    }
  }

  // renders snack results on results page
  function renderSnack(snackResults) {
    let recipeCards = document.querySelectorAll(".recipeCard");
    for (var i = 0; i < recipeCards.length; i++) {
      recipeCards[i].innerHTML = "";

      let snackPic = snackResults.hits[i].recipe.image;
      let snackPicEl = document.createElement("img");
      snackPicEl.setAttribute("src", snackPic);
      recipeCards[i].append(snackPicEl);

      let snackName = snackResults.hits[i].recipe.label;
      let snackNameEl = document.createElement("p");
      snackNameEl.innerHTML = snackName;
      recipeCards[i].append(snackNameEl);

      let snackLink = snackResults.hits[1].recipe.shareAs;
      let snackLinkEl = document.createElement("a");
      snackLinkEl.setAttribute("href", snackLink);
      snackLinkEl.innerHTML = "See full recipe";
      recipeCards[i].append(snackLinkEl);
    }

  }

  getValues();
});
