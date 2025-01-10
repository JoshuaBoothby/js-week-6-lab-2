"use strict";

let products = [
  { name: "Apple", category: "Fruit", price: 1.99, inStock: true },
  {
    name: "Kikkoman Rice Vinegar",
    category: "Seasoning",
    price: 6.77,
    inStock: false,
  },
  { name: "Ahi Steaks", category: "Fish", price: 7.47, inStock: true },
];

let superProducts = document.getElementById("superProducts");
function renderPro() {
  superProducts.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let myproducts = `
    <div class="card" style="width: 18rem;">
  
  <div class="card-body">
    <h2 class="card-title">${products[i].name}</h2>
    <p class="card-text">Genre: ${products[i].category}</p>
    <p class="card-text">Formed: ${products[i].price}</p>
    <p class="card-text">Active: ${products[i].inStock}</p>
  </div>
</div>
`;
    superProducts.innerHTML += myproducts;
  }
}

renderPro(products);
