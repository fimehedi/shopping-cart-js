const phonePrice = parseFloat(document.getElementById("phone-price").innerText);
const casePrice = parseFloat(document.getElementById("case-price").innerText);

// Item Cancel
itemCancel("phone-cancel-btn", "phone", "phone-price")
itemCancel("case-cancel-btn", "case", "case-price")

// Phone Item Increment Button Event Handler
const phoneItemInc = document.getElementById("phone-plus-btn");
phoneItemInc.addEventListener("click", function(){
    var item = itemIncrement("phone-item")
    productSum("phone-price", item, phonePrice)

    subTotal();
    total()
})


// Phone Item Decrement Button Event Handler
const phoneItemDec = document.getElementById("phone-minus-btn");
phoneItemDec.addEventListener("click", function(){
    var item = itemDecrement("phone-item")
    productSum("phone-price", item, phonePrice)

    subTotal();
    total()
})

// Case Item Increment Button Event Handler
const caseItemInc = document.getElementById("case-plus-btn");
caseItemInc.addEventListener("click", function(){
    var item = itemIncrement("case-item")
    productSum("case-price", item, casePrice)

    subTotal();
    total() 
})

// Case Item Decrement Button Event Handler
const caseItemDec = document.getElementById("case-minus-btn");
caseItemDec.addEventListener("click", function(){
    var item = itemDecrement("case-item")
    productSum("case-price", item, casePrice)

    subTotal();
    total()
})

// Check Out Button Event Handler 
const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", function() {
    cartArea = document.getElementById("shopping-cart-area");
    cartArea.style.display = "none";
    alert("Your checkout done!");

})


// Item Increment Function
function itemIncrement(id) {
    var item = parseInt(document.getElementById(id).value);
    item ++;
    document.getElementById(id).value = item;
    return item;
}

// Item Decrement Function
function itemDecrement(id) {
    var item = parseInt(document.getElementById(id).value);
    if (item != 1) {
        item --;
    }
    document.getElementById(id).value = item;
    return item;
}


// Item cancel Function
function itemCancel(id, item, price) {
    const cancelBtn = document.getElementById(id);
    cancelBtn.addEventListener("click", function(){
        const cancelItem = document.getElementById(item);
        cancelItem.style.display = "none";
        document.getElementById(price).innerText = 0;
        subTotal();
        total();
    });
}

// Product Price Sum
function productSum(id, item, price) {
    var sum = price * item;
    document.getElementById(id).innerText = sum;
    return sum
}

// Sub Total
function subTotal() {
    sub = parseFloat(document.getElementById("phone-price").innerText) + parseFloat(document.getElementById("case-price").innerText)
    document.getElementById("sub-total").innerText = sub;
    return sub;
}

// Total Price
function total() {
    var tax = Math.round(sub * .10);
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = tax + sub;
}