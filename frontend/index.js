document.addEventListener("DOMContentLoaded", function() {
  const column = document.getElementById("column")
  const mainColumn = document.getElementById("mainColumn")

  // $(document).ready(function() {
  //   $("testButton").click(function() {
  //     $('.test.modal').modal('show');
  //   });
  // });

  fetchRestaurants()

  function fetchRestaurants() {
    fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(json => displayRestaurants(json))
  }

  function displayRestaurants(json) {
    for (let i = 0; i < json.length; i++) {
      const div = document.createElement("div")
      div.setAttribute("class", "ui card")
      div.setAttribute("id", `${json[i].id}`)
      const name = json[i].name
      const cuisine = json[i].cuisine
      const location = json[i].location
      div.innerHTML =
        `<div class="card">
        <div class="content">
          <div class="header">
            ${name}
          </div>
          <div class="meta">
            ${cuisine}
          </div>
          <div class="description">
          <span class="ui label">
            PHOTO
          </span>
            ${location}
          </div>
        </div>
        <div class="extra content">
        <div id=${json[i].id} class="ui blue button">Order</div>
        </div>
      </div>`
      mainColumn.appendChild(div)
      button = document.getElementById(json[i].id)
      button.addEventListener("click", event => {
        event.preventDefault()
        fetchItems(event)
        // $(document).ready(function() {
        //   $("testButton").click(function() {
        //     $('.test.modal').modal('show');
        //   });
        // });
      })
    }
  }

  function fetchItems(event) {
    fetch("http://localhost:3000/items")
      .then(res => res.json())
      .then(json => displayItems(json, event))
  }

  function displayItems(json, event) {
    console.log(event.target.id)
    for (i = 0; i < json.length; i++) {
      if (json[i].restaurant_id == event.target.id) {
        const div = document.createElement("div")
        div.innerHTML = json[i].name
        mainColumn.appendChild(div)
      }
    }
  }
})

$(document).ready(function() {
  $("testButton").click(function() {
    $('.test.modal').modal('show');
  });
});




// `Restaurant Name:${name}, Cuisine: ${cuisine}, Address: ${location}`
// const button = document.createElement("button")
// button.innerText = "Order"
// button.setAttribute("id", json[i].id)
// div.appendChild(button)