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
      div.innerHTML =
        `<div class="ui card">
         <div class="content">
           <div class="image container">
           <button class="ui button">
           <img src="./pictures/${img}.png" id=${json[i].id} class="visible content">
             <div class="bottom left">
               <div class="header">
                 <p id=${json[i].id} class="restaurant name">${name}</p>
               </div>
             </div>
           </div>
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
      button = document.getElementById(json[i].id)
      button.addEventListener("click", event => {
        event.preventDefault()
        modalContent.innerHTML = ""
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
    for (i = 0; i < json.length; i++) {
      if (json[i].restaurant_id == event.target.id) {
        const div = document.createElement("div")
        div.innerText += `${json[i].name} - $${json[i].price}`
        modalContent.appendChild(div)
        const button = document.createElement("button")
        button.innerText = "Add To Cart"
        div.appendChild(button)
        console.log(div)
      }
    }
  }
})




// <div class="ui card">
//    <div class="content">
//      <div class="image container">
//      <button class="ui button">
//      <img src="./pictures/${img}.png" id=${json[i].id} class="visible content">
//        <div class="bottom left">
//          <div class="header">
//            <p class="restaurant name">${name}</p>
//          </div>
//        </div>
//      </div>
//     </div>
//   </div>`