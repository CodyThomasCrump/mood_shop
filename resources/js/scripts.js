import data from './data.js'

const itemsContainer = document.getElementById('items')

for (let i = 0; i < data.length; ++i) {
    let newDiv = document.createElement('div');
    newDiv.className = 'item'
    // display the image
    let img = document.createElement('img');
    img.src = data[i].image
    img.width = 300
    img.height = 300
    newDiv.appendChild(img)

    let desc = document.createElement('P')
    desc.innerText = data[i].desc
    newDiv.appendChild(desc)
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = data[i].name

    // creates a custom attribute called data-price.
    // That will hold the price for each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = "Add to Cart"
    newDiv.appendChild(button)
    // put new div inside items container
    itemsContainer.appendChild(newDiv)

    const cart = []

    function addItem(name, price) {
        const item = { name: name, price: price, qty: 1 }
        cart.push(item)
    }

    function showItems() {
        console.log(`You have ${cart.length} items in your cart`)
    }

    addItem('Apple', 0.99)
    addItem('Orange', 1.29)
    addItem('Opinion', 0.02)

    showItems()
}




