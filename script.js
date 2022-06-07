// to store products in the array, with their name and price
// how to group a product's details? 
// by creating a "product" object, with "name" and "price" as properties (answer)
var cartItems = []; // an empty ARRAY
var isTotalHidden = true;

var backpack = { // an OBJECT
    name: "Backpack",
    price: 400
}
var camera = { 
    name: "Camera",
    price: 1000
}

// what should we do when users click on the backpack's "Add to Cart" button? 
// we should add the "backpack" object to the "cartItems" array
// so we need to create an "addToCart" function with "item" as a parameter
/*
function addToCart(item) {
    cartItems.push(item);
}
*/

// now to update the displayed item counter every time the function runs
// how to know how many items we currently have? 
// by using the LENGTH of the cartItem array
// but how to get the array's length and display it? 
// by setting it as the "innerHTML" of the element that creates the item counter
// => in the addToCart function, update the element with ID "itemCounter" tot he length of the "cartItems" array
function addToCart(item) {
    cartItems.push(item);
    document.getElementById("itemCounter").innerHTML = cartItems.length; //!
    showTotal();
}

function clickCart() {
    isTotalHidden = !isTotalHidden;
    showTotal();
}

// inside showTotal(), create an orderTotal variable and set it to the element with ID orderTotal
// then, set its innerHTML to ""
// to sum up the cart prices if the total is visible
// to achieve that, use an IF statement
function showTotal() {
    var orderTotal = document.getElementById("orderTotal");
    orderTotal.innerHTML = "";

    if (isTotalHidden === false) {
        var total = 0;
        for (var i = 0; i<cartItems.length; i++) {
            total += cartItems[i].price;
        }
        orderTotal.innerHTML += "Total: $" + total;
    }
}

// we need to use a function to calculate shipping based on the value of "total"
// add a "calculateShipping()" function with a parameter named "total"
// the cost of shipping will depend on the total of the customer's order, an IF statement
// if total is 700 or greater...
function calculateTotal(total) {
    var shipping = "";
    if (total >= 700) {
        shipping = 30;
    } else {
        shipping = 50;
    }
    return shipping;
}

