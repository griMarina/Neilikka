const cards = document.querySelector('.cards');

let catalog = [];

function getId() {
    let i = 1;
    return function () {
        return i++;
    }
}

let itemId = getId();

function Item(title, price) {
    this.id = itemId();
    this.title = title;
    this.price = price;
}

function createCatalog(array) {
    for (let item of array) {
        createItemCard(item);
    }
}

function createItemCard({ title, price, id }) {
    const itemHtml = `<div class="item">
    <img class="item-img" src="img/${id}.jpg" alt="${title}">
    <div class="overlay">            
    <button class="btn" data-id="${id}">Lisää koriin</button>
    </div>
    <p class="item-title">${title}</p>
    <p class="item-price">${price} €</p>
    </div>`;
    cards.insertAdjacentHTML('beforeend', itemHtml);
}

catalog = [
    new Item('Decorator Duo', 132),
    new Item('Bromeliad Collection', 70),
    new Item('Sansevieria', 125),
    new Item('Philodendron Summer Glory', 140),
    new Item('Prickly Pear Cactus', 59),
    new Item('Whale Fin Sansevieria', 79),
    new Item('Dracaena Warneckii Ulyses 2-Cane', 152),
    new Item('Monstera', 139),
    new Item('Sansevieria Trifasciata', 99)
];

createCatalog(catalog);