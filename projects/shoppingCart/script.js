const cartContainer = document.getElementById("cart-container");
const productsContainer = document.getElementById("products-container");
const kombuchaCards = document.getElementById("kombucha-card-container");
const cartBtn = document.getElementById("cart-btn");
const clearCartBtn = document.getElementById("clear-cart-btn");
const totalNumberOfItems = document.getElementById("total-items");
const cartTotal = document.getElementById("total");
const showHideCartSpan = document.getElementById("show-hide-cart");
let isCartShowing = false;

const products = [
  {
    id: 1,
    name: "Black Tea",
    price: 40,
    category: "Classic",
  },
  {
    id: 2,
    name: "Red Tea",
    price: 40,
    category: "Fruity Taste",
  },
  {
    id: 3,
    name: "Cinnamon",
    price: 40,
    category: "Classic",
  },
  {
    id: 4,
    name: "Mint",
    price: 40,
    category: "Wierd",
  },
  {
    id: 5,
    name: "Kefir",
    price: 40,
    category: "Fermented Milk",
  },
  {
    id: 6,
    name: "Ginger",
    price: 40,
    category: "Classic",
  },
  {
    id: 7,
    name: "Black Currant",
    price: 40,
    category: "Fruity Taste",
  },
  {
    id: 8,
    name: "Raspberry",
    price: 40,
    category: "Fruity Taste",
  },
  {
    id: 9,
    name: "Cranberries",
    price: 40,
    category: "Fruity Taste",
  },
  {
    id: 10,
    name: "Longan",
    price: 40,
    category: "Fruity Taste",
  },
  {
    id: 11,
    name: "Goji",
    price: 40,
    category: "Fruity Taste",
  },
  {
    id: 12,
    name: "Green Tea",
    price: 40,
    category: "Classic",
  },
];
products.sort(function(a,b) {
    const x = a.category.toLowerCase();
    const y = b.category.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0});
products.forEach(
  ({ name, id, price, category }) => {
    kombuchaCards.innerHTML += `
      <div class="kombucha-card">
        <h2>${name}</h2>
        <p class="kombucha-price">฿${price}</p>
        <p class="product-category">Category: ${category}</p>
        <button 
          id="${id}" 
          class="btn add-to-cart-btn">Add to cart
        </button>
      </div>
    `;
  }
);

class ShoppingCart {
  constructor() {
    this.items = [];
    this.total = 0;
  }

  addItem(id, products) {
    const product = products.find((item) => item.id === id);
    const { name, price } = product;
    this.items.push(product);

    const totalCountPerProduct = {};
    this.items.forEach((kombucha) => {
      totalCountPerProduct[kombucha.id] = (totalCountPerProduct[kombucha.id] || 0) + 1;
    })

    const currentProductCount = totalCountPerProduct[product.id];
    const currentProductCountSpan = document.getElementById(`product-count-for-id${id}`);

    currentProductCount > 1 
      ? currentProductCountSpan.textContent = `${currentProductCount}x`
      : productsContainer.innerHTML += `
      <div id="kombucha${id}" class="product">
        <p>
          <span class="product-count" id="product-count-for-id${id}"></span>${name}
        </p>
        <p>${price}</p>
      </div>
      `;
  }

  getCounts() {
    return this.items.length;
  }

  clearCart() {
    if (!this.items.length) {
      alert("Your shopping cart is already empty");
      return;
    }

    const isCartCleared = confirm(
      "Are you sure you want to clear all items from your shopping cart?"
    );

    if (isCartCleared) {
      this.items = [];
      this.total = 0;
      productsContainer.innerHTML = "";
      totalNumberOfItems.textContent = 0;
      cartTotal.textContent = 0;
    }
  }

  calculateTotal() {
    this.total = this.items.reduce((total, item, index) => {
        const price = (index + 1) % 3 === 0 ? item.price * 0.5 : item.price;
        return total + price;
        }, 0);

    cartTotal.textContent = `฿${this.total.toFixed(2)}`;
    
    if (this.items.length % 3 === 0) {
        this.total -= 20 * (this.items.length / 3)
    }
    return this.total;
  }
};

const cart = new ShoppingCart();
const addToCartBtns = document.getElementsByClassName("add-to-cart-btn");

[...addToCartBtns].forEach(
  (btn) => {
    btn.addEventListener("click", (event) => {
      cart.addItem(Number(event.target.id), products);
      totalNumberOfItems.textContent = cart.getCounts();
      cart.calculateTotal();
    })
  }
);

cartBtn.addEventListener("click", () => {
  isCartShowing = !isCartShowing;
  showHideCartSpan.textContent = isCartShowing ? "Hide" : "Show";
  cartContainer.style.display = isCartShowing ? "block" : "none";
});

clearCartBtn.addEventListener('click', cart.clearCart.bind(cart));