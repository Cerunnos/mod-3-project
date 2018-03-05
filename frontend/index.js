document.addEventListener("DOMContentLoaded", function() {
  const column = document.getElementById("column")
  fetchRestaurants()

  function fetchRestaurants() {
    fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(json => displayRestaurants(json))
  }

  function displayRestaurants(json) {
    for (let i = 0; i < json.length; i++) {
      div = document.createElement("div")
      div.innerText = `Restaurant Name:${json[i].name}, Cuisine: ${json[i].cuisine}, Address: ${json[i].location}`
      column.appendChild(div)
    }
  }
})