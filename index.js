let getBook = () => {
  fetch("https://striveschool-api.herokuapp.com/books", {})
    .then((response) => response.json())
    .then((data) => {
      let row = document.querySelector(".row");

      data.forEach((element , index) => {
        let col = document.createElement("div");
        col.classList = "col-md-4";
        col.innerHTML = `
                <div class="card" style="margin-bottom: 50px">
                    <img src="${element.img}" class="card-img-top" style="width: 200px; height: 250px;">
                    <div class="card-body">
                    <p class="card-title">${element.title}</p>
                    <button class="btn btn-primary" onclick="addToCart(${index})">Add to cart</button>
                    <button class="btn btn-secondary" onclick="hide(event)">Skip</button>
                    </div>
                </div>
            `;

        row.appendChild(col);
        array.push(element)
        elements.push(col)
      });
    });
};

let array = [];
let elements = [];

let addToCart = (i) => {
  let savedCard = document.createElement("li");
  array.push(savedCard);
  let h6 = document.createElement("h6")
  h6.innerHTML = `<h6 class="card-title" style="color: black;">${array[i].title}</h6>`
  savedCard.appendChild(h6)
  let ul = document.querySelector(".list-group");
  ul.appendChild(savedCard);
};

let hide = (event) => {
  event.target.closest(".col-md-4").remove()
}

let search = () => {
  let input = document.querySelector("input[type=search]").value
  if (input.length > 2) {
    console.log(elements)
    elements.forEach((element , index) => {
      element.remove()
    })
    elements.splice(0 , elements.length)
    console.log(elements)
    let tmp = []
    fetch("https://striveschool-api.herokuapp.com/books", {})
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element , index) => {
        let col = document.createElement("div");
        col.classList = "col-md-4";
        col.innerHTML = `
                <div class="card" style="margin-bottom: 50px">
                    <img src="${element.img}" class="card-img-top" style="width: 200px; height: 250px;">
                    <div class="card-body">
                    <p class="card-title">${element.title}</p>
                    <button class="btn btn-primary" onclick="addToCart(${index})">Add to cart</button>
                    <button class="btn btn-secondary" onclick="hide(event)">Skip</button>
                    </div>
                </div>
            `;
        tmp.push(col)
        elements.push(col)
      });
      tmp = tmp.filter(name => name.children[0].children[1].firstElementChild.innerText.toLowerCase().includes(input.toLowerCase()))
      let row = document.querySelector(".row");
      tmp.forEach((elem) => {
        row.appendChild(elem)
      })
    });
  }
}

window.onload = () => {
  getBook();
};