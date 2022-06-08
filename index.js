var dom = {
    coinsBtn: document.querySelectorAll(".coin"),
    enteredMoney: document.getElementById("entered-money-id"),
    change: document.getElementById("change"),
    changeDiv: document.querySelector(".change"),
    chosenProduct: document.getElementById("chosen-product"),
    chosenProductDiv: document.querySelector(".chosen-product"),
    coffee: document.getElementById("coffee"),
    coffeeWithMilk: document.getElementById("coffeeWithMilk"),
    milk: document.getElementById("milk"),
    hotChocolate: document.getElementById("hotChocolate"),
    tea: document.getElementById("tea")
};

var prices = {
    coffee: 0.80,
    coffeeWithMilk: 1.20,
    milk: 1.00,
    hotChocolate: 1.40,
    tea: 0.60
};

var products = ["Coffee", "Coffee with milk", "Milk", "Hot chocolate", "Tea"];

let currPrice = 0;

for (let i = 0; i < dom.coinsBtn.length; i++) {
    dom.coinsBtn[i].addEventListener("click", (e) => {
        let dataPrice = e.target;
        let price = parseFloat(dataPrice.dataset.price);
        currPrice = currPrice + price;
        dom.enteredMoney.value = currPrice.toFixed(2);
        dom.chosenProductDiv.style.display = "none";
        dom.changeDiv.style.display = "none";
        dom.change.value = "";
    });
};

dom.coffee.addEventListener("click", () => {
    if (prices.coffee > parseFloat(dom.enteredMoney.value)) {
        alert("Sorry, you don't have enough money for this product!")
    } else {
        let change = prices.coffee - parseFloat(dom.enteredMoney.value);
        dom.change.value = Math.abs(parseFloat(change)).toFixed(2);
        dom.chosenProduct.innerHTML = products[0];
        setTimeout(() => {
            dom.chosenProductDiv.style.display = "block";
        }, 1500);
        setTimeout(() => {
            dom.changeDiv.style.display = "block";
        }, 3000);
        currPrice = 0;
        dom.enteredMoney.value = parseFloat(0.00).toFixed(2);
    };
});

dom.coffeeWithMilk.addEventListener("click", () => {
    if (prices.coffeeWithMilk > parseFloat(dom.enteredMoney.value)) {
        alert("Sorry, you don't have enough money for this product!")
    } else {
        let change = prices.coffeeWithMilk - parseFloat(dom.enteredMoney.value);
        dom.change.value = Math.abs(parseFloat(change)).toFixed(2);
        dom.chosenProduct.innerHTML = products[1];
        setTimeout(() => {
            dom.chosenProductDiv.style.display = "block";
        }, 1500);
        setTimeout(() => {
            dom.changeDiv.style.display = "block";
        }, 3000);
        currPrice = 0;
        dom.enteredMoney.value = parseFloat(0.00).toFixed(2);
    };
});

dom.milk.addEventListener("click", () => {
    if (prices.milk > parseFloat(dom.enteredMoney.value)) {
        alert("Sorry, you don't have enough money for this product!")
    } else {
        let change = prices.milk - parseFloat(dom.enteredMoney.value);
        dom.change.value = Math.abs(parseFloat(change)).toFixed(2);
        dom.chosenProduct.innerHTML = products[2];
        setTimeout(() => {
            dom.chosenProductDiv.style.display = "block";
        }, 1500);
        setTimeout(() => {
            dom.changeDiv.style.display = "block";
        }, 3000);
        currPrice = 0;
        dom.enteredMoney.value = parseFloat(0.00).toFixed(2);
    };
});

dom.hotChocolate.addEventListener("click", () => {
    if (prices.hotChocolate > parseFloat(dom.enteredMoney.value)) {
        alert("Sorry, you don't have enough money for this product!")
    } else {
        let change = prices.hotChocolate - parseFloat(dom.enteredMoney.value);
        dom.change.value = Math.abs(parseFloat(change)).toFixed(2);
        dom.chosenProduct.innerHTML = products[3];
        setTimeout(() => {
            dom.chosenProductDiv.style.display = "block";
        }, 1500);
        setTimeout(() => {
            dom.changeDiv.style.display = "block";
        }, 3000);
        currPrice = 0;
        dom.enteredMoney.value = parseFloat(0.00).toFixed(2);
    };
});

dom.tea.addEventListener("click", () => {
    if (prices.tea > parseFloat(dom.enteredMoney.value)) {
        alert("Sorry, you don't have enough money for this product!")
    } else {
        let change = prices.tea - parseFloat(dom.enteredMoney.value);
        dom.change.value = Math.abs(parseFloat(change)).toFixed(2);
        dom.chosenProduct.innerHTML = products[4];
        setTimeout(() => {
            dom.chosenProductDiv.style.display = "block";
        }, 1500);
        setTimeout(() => {
            dom.changeDiv.style.display = "block";
        }, 3000);
        currPrice = 0;
        dom.enteredMoney.value = parseFloat(0.00).toFixed(2);
    };
})
