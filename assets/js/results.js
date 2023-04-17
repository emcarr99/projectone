const apiKey = "ae491393c8msh4acba715ebb33ebp1addcajsn3f334bdd5e78";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ae491393c8msh4acba715ebb33ebp1addcajsn3f334bdd5e78",
    "X-RapidAPI-Host": "trailapi-trailapi.p.rapidapi.com",
  },
};

fetch("https://trailapi-trailapi.p.rapidapi.com/trails/%7Bid%7D/maps/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

fetch("https://trailapi-trailapi.p.rapidapi.com/trails/%7Bid%7D/maps/", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

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
