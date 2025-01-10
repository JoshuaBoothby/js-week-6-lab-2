"use strict";

let restaurants = [
  {
    name: "Red Robin",
    cuisine: "Gourmet burgers",
    location: "Baton Rouge",
    rating: 4.2,
  },
  {
    name: "Akira",
    cuisine: "Sushi",
    location: "Metairie",
    rating: 3.9,
  },
  {
    name: "Fat Boys Pizza",
    cuisine: "Pizza",
    location: "Metairie",
    rating: 4.5,
  },
];

let tasty = document.getElementById("tasty");
function renderRest() {
  tasty.innerHTML = "";
  for (let i = 0; i < restaurants.length; i++) {
    let bigrestaurants = `
    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h2 class="card-title">${restaurants[i].name}</h2>
    <p class="card-text">Cuisine: ${restaurants[i].cuisine}</p>
    <p class="card-text">Location: ${restaurants[i].location}</p>
    <p class="card-text">Rating: ${restaurants[i].rating}</p>
  </div>
</div>
`;
    tasty.innerHTML += bigrestaurants;
  }
}

renderRest(restaurants);
