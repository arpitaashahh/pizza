let cart = [];

function addToCart(name,price){

cart.push({name,price});
alert(name + " added to cart");

localStorage.setItem("cart",JSON.stringify(cart));

}

function showCart(){

cart = JSON.parse(localStorage.getItem("cart")) || [];

let list = document.getElementById("cartItems");
let total = 0;

list.innerHTML="";

cart.forEach(item =>{

let li = document.createElement("li");
li.textContent = item.name + " Rs." + item.price;
list.appendChild(li);

total += item.price;

});

document.getElementById("total").textContent="Total: Rs."+total;

}

function checkout(){

alert("Order placed successfully! 🍕");

localStorage.removeItem("cart");   // remove saved cart
cart = [];                         // empty the cart array

showCart();                        // refresh cart display

}

