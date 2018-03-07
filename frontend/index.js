document.addEventListener("DOMContentLoaded", function() {
  // const column = document.getElementById("column")
  // const columnOne = document.getElementById("columnOne")
  let modalContent = document.getElementById("modalContent")

  fetchRestaurants()

  function fetchRestaurants() {
    fetch("http://localhost:3000/restaurants")
      .then(res => res.json())
      .then(json => displayRestaurants(json))
  }

  function displayRestaurants(json) {
    let counter = 0
    for (let i = 0; i < json.length; i++) {
      const div = document.createElement("div")
      div.setAttribute("class", "ui card")
      div.setAttribute("id", `${json[i].id}`)
      const name = json[i].name
      const cuisine = json[i].cuisine
      const location = json[i].location
      const img = json[i].img_url
      console.log(img)
      div.innerHTML =
        `<div class="ui fluid card">
        <div class="content">
        <img src="./pictures/${img}" class="visible content">
          <div class="header">
            ${name}
          </div>
          <div class="meta">
            ${cuisine}
          </div>
          <div class="description">
            ${location}
          </div>
      </div>`
      if (counter === 0) {
        columnOne.appendChild(div)
        counter++
      } else if (counter === 1) {
        columnTwo.appendChild(div)
        counter++
      } else if (counter === 2) {
        columnThree.appendChild(div)
        counter++
      } else {
        columnFour.appendChild(div)
        counter = 0
      }
      $('.ui.modal.1').modal('attach events', '.ui.button', 'show')
      // div.appendChild(img)
      button = document.getElementById(json[i].id)
      button.addEventListener("click", event => {
        event.preventDefault()
        fetchItems(event)
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
        div.innerText += json[i].name
        modalContent.innerHTML = ""
        modalContent.appendChild(div)
        console.log(div)
      }
    }
  }
})




// `Restaurant Name:${name}, Cuisine: ${cuisine}, Address: ${location}`
// const button = document.createElement("button")
// button.innerText = "Order"
// button.setAttribute("id", json[i].id)
// div.appendChild(button)