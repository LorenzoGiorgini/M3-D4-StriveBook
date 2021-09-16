let getBook = () => {
    return fetch("https://striveschool-api.herokuapp.com/books" , { 
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let row = document.querySelector(".row")

        data.forEach(element => {
            let col = document.createElement("div")
            col.classList = ("col-md-4")
            col.innerHTML =  `
                <div class="card" style="width: 200px; height: 350px;">
                    <img src="${element.img}" class="card-img-top" style="width: 200px; height: 250px;">
                    <div class="card-body">
                    <h5 class="card-title"></h5>
                    <p class="card-text"></p>
                    <button class="btn btn-primary" onclick="addToCart(event)">Add to cart</button>
                    </div>
                </div>
            ` 
                
            row.appendChild(col)
        });
    }) 
}

let array = []

let addToCart = (e) => {
    e.target.closest(".col-md-4").remove()
    let savedCard = e.target.closest(".col-md-4")
    array.push(savedCard)
    savedCard.innerHTML = `
        <div class="card" style="width: 200px; height: 350px;">
            <img src="${element.img}" class="card-img-top" style="width: 200px; height: 250px;">
            <div class="card-body">
            <h5 class="card-title"></h5>
            <button class="btn btn-primary" onclick="skip(event)">Skip</button>
            </div>
        </div>
    `
    console.log(savedCard)
    let ul = document.querySelector("#div-list")
    ul.appendChild(savedCard)
}


window.onload = () => {
    getBook()
}