"use strict";

let bands = [
  { name: "The Beatles", genre: "Rock", formedYear: 1960, active: false },
  { name: "Led Zeppelin", genre: "Rock", formedYear: 1968, active: false },
  { name: "Pink Floyd", genre: "Rock", formedYear: 1965, active: false },
  {
    name: "The Black Dahlia Murder",
    genre: "Melodic Death Metal",
    formedYear: 2001,
    active: true,
  },
];

let bandParty = document.getElementById("bandParty");

function renderbP(bands) {
  bandParty.innerHTML = "";
  for (let i = 0; i < bands.length; i++) {
    let mybands = `
    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h2 class="card-title">${bands[i].name}</h2>
    <p class="card-text">Genre: ${bands[i].genre}</p>
    <p class="card-text">Formed: ${bands[i].formedYear}</p>
    <p class="card-text">Active: ${bands[i].active}</p>
  </div>
</div>
`;
    bandParty.innerHTML += mybands;
  }
}

renderbP(bands);
