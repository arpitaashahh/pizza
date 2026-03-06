let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name,price){

cart.push({name,price});

localStorage.setItem("cart",JSON.stringify(cart));

alert(name + " added to cart");

}

function showCart(){

let list=document.getElementById("cartItems");
let total=0;

list.innerHTML="";

cart.forEach(item=>{

let li=document.createElement("li");

li.textContent=item.name+" - ₹"+item.price;

list.appendChild(li);

total+=item.price;

});

document.getElementById("total").textContent="Total: ₹"+total;

}

function checkout(){

alert("Order placed successfully 🍕");

cart=[];

localStorage.removeItem("cart");

showCart();

}

