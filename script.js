// FRESHIE & CREAMMIE WEBSITE

const foods = [

    // RICE

    {name:"Basmati Party Smoky Jollof Rice",price:"₦4,000",category:"rice"},
    {name:"Signature Jollof Rice",price:"₦2,500",category:"rice"},
    {name:"Basmati Special Fried Rice",price:"₦3,500",category:"rice"},
    {name:"Signature Fried Rice",price:"₦2,000",category:"rice"},
    {name:"Coconut Fried Rice",price:"₦4,500",category:"rice"},
    {name:"Native Rice",price:"₦3,500",category:"rice"},
    {name:"Ofada Rice + Ayamase",price:"₦5,500",category:"rice"},
    {name:"White Rice + Vegetable Sauce",price:"₦3,500",category:"rice"},
    {name:"White Rice + Stew",price:"₦3,000",category:"rice"},
    {name:"White Rice & Beans + Stew",price:"₦3,000",category:"rice"},

    // NIGERIAN SPECIALS

    {name:"Amala + Gbegiri + Ewedu",price:"₦1,500",category:"nigerian"},
    {name:"Pounded Yam + Egusi",price:"₦2,500",category:"nigerian"},
    {name:"Pounded Yam + Efo Riro",price:"₦3,000",category:"nigerian"},
    {name:"Semovita + Okra Soup",price:"₦1,500",category:"nigerian"},
    {name:"Wheat Meal + Vegetable Soup",price:"₦3,500",category:"nigerian"},
    {name:"Eba + Egusi",price:"₦1,500",category:"nigerian"},
    {name:"Oha Soup",price:"₦2,500",category:"nigerian"},
    {name:"Edikaikong",price:"₦3,000",category:"nigerian"},
    {name:"Ofe Sala / Oweri",price:"₦3,000",category:"nigerian"},
    {name:"Banga Soup",price:"₦3,000",category:"nigerian"},
    {name:"Assorted Stew",price:"₦3,000",category:"nigerian"},

    // FAST FOOD

    {name:"Classic Beef Burger",price:"₦4,500",category:"fast"},
    {name:"Double Cheese Burger",price:"₦6,000",category:"fast"},
    {name:"Crispy Chicken Burger",price:"₦5,000",category:"fast"},
    {name:"Classic Shawarma",price:"₦3,000",category:"fast"},
    {name:"Premium Shawarma",price:"₦4,500",category:"fast"},
    {name:"Jumbo Shawarma",price:"₦6,500",category:"fast"},
    {name:"Hot Dog Deluxe",price:"₦3,500",category:"fast"},

    // PASTA

    {name:"Creamy Chicken Pasta",price:"₦5,500",category:"pasta"},
    {name:"Spaghetti Bolognese",price:"₦6,000",category:"pasta"},
    {name:"Jollof Spaghetti",price:"₦3,500",category:"pasta"},
    {name:"Stir-fry Noodles",price:"₦2,500",category:"pasta"},
    {name:"Seafood Pasta",price:"₦10,000",category:"pasta"},
    {name:"Singaporean Noodles",price:"₦3,500",category:"pasta"},

    // GRILLS

    {name:"BBQ Chicken & Chips (Medium)",price:"₦7,000",category:"grills"},
    {name:"BBQ Chicken & Chips (Large)",price:"₦10,000",category:"grills"},
    {name:"BBQ Croaker Fish & Chips (Medium)",price:"₦10,500",category:"grills"},
    {name:"BBQ Catfish & Chips (Medium)",price:"₦8,500",category:"grills"},
    {name:"Asun Bowl",price:"₦6,000",category:"grills"},
    {name:"Peppered Gizzard",price:"₦4,500",category:"grills"},
    {name:"Suya Platter",price:"₦5,500",category:"grills"},
    {name:"Chicken Peppersoup",price:"From ₦6,000",category:"grills"},
    {name:"Goat Meat Peppersoup",price:"From ₦5,000",category:"grills"},

    // PIZZA

    {name:"Chicken Suya Pizza (Medium / Large)",price:"₦8,000 / ₦14,500",category:"fast"},
    {name:"BBQ Chicken Pizza (Medium / Large)",price:"₦8,500 / ₦15,500",category:"fast"},
    {name:"Pepperoni Pizza (Medium / Large)",price:"₦9,000 / ₦16,000",category:"fast"},
    {name:"Seafood Pizza (Medium / Large)",price:"₦12,500 / ₦20,500",category:"fast"},

    // SMALL CHOPS

    {name:"HI Platter",price:"₦15,000",category:"small"},
    {name:"Mini Platter",price:"₦20,000",category:"small"},
    {name:"Friendly Platter",price:"₦25,000",category:"small"},
    {name:"You & Me Platter",price:"₦30,000",category:"small"},
    {name:"Love Myself Platter",price:"₦35,000",category:"small"},
    {name:"Igbadu Platter",price:"₦45,000",category:"small"},
    {name:"Headspeed Platter",price:"₦50,000",category:"small"},
    {name:"Bossy Platter",price:"₦70,000",category:"small"},
    {name:"Odogwu Platter",price:"₦100,000",category:"small"},

    // BAKERY

    {name:"Family White Bread",price:"₦1,800",category:"bakery"},
    {name:"Butter Bread",price:"₦2,200",category:"bakery"},
    {name:"Coconut Bread",price:"₦2,500",category:"bakery"},
    {name:"Wheat Bread",price:"₦2,500",category:"bakery"},
    {name:"Banana Bread",price:"₦3,000",category:"bakery"},
    {name:"Sardine Bread",price:"₦3,500",category:"bakery"},
    {name:"Fruit Bread",price:"₦3,000",category:"bakery"},
    {name:"Burger Buns (6 pcs)",price:"₦2,500",category:"bakery"},
    {name:"Shawarma Bread (6 pcs)",price:"₦2,500",category:"bakery"},
    {name:"Meat Pie",price:"₦1,000 / ₦1,500",category:"bakery"},
    {name:"Chicken Pie",price:"₦1,500 / ₦2,000",category:"bakery"},
    {name:"Sausage Roll",price:"₦1,000",category:"bakery"},
    {name:"Scotch Egg",price:"₦1,500",category:"bakery"},
    {name:"Egg Roll",price:"₦800",category:"bakery"},
    {name:"Puff Puff (10 pcs)",price:"₦1,500",category:"bakery"},

    // CAKES

    {name:"Slice of Cake",price:"₦2,500",category:"cakes"},
    {name:"Cupcake",price:"₦1,000 / ₦1,500",category:"cakes"},
    {name:"Cheesecake Slice",price:"₦4,500",category:"cakes"},
    {name:"Fruit Parfait",price:"From ₦3,500",category:"cakes"},
    {name:"Cake Parfait",price:"From ₦3,000",category:"cakes"},
    {name:"Ice Cream",price:"₦3,500",category:"cakes"},
    {name:"Celebration Cakes",price:"From ₦20,000",category:"cakes"},
    {name:"Wedding Cakes",price:"Quote on request",category:"cakes"},

    // DRINKS

    {name:"Chapman",price:"₦2,500",category:"drinks"},
    {name:"Fresh Orange Juice",price:"₦3,500",category:"drinks"},
    {name:"Pineapple Juice",price:"₦3,500",category:"drinks"},
    {name:"Smoothies",price:"₦4,500",category:"drinks"},
    {name:"Milkshake",price:"₦4,500",category:"drinks"},
    {name:"Mocktails",price:"₦4,500",category:"drinks"},
    {name:"Freshie Zobo Drink",price:"₦1,000",category:"drinks"},
    {name:"Water",price:"₦300",category:"drinks"},
    {name:"Soft Drinks",price:"₦600",category:"drinks"},
    {name:"Malt",price:"₦800",category:"drinks"}

];


// DISPLAY FOOD

const foodGrid = document.getElementById("foodGrid");

function displayFoods(category = "all", search = "") {

    foodGrid.innerHTML = "";

    const filtered = foods.filter(food => {

        const matchesCategory =
            category === "all" || food.category === category;

        const matchesSearch =
            food.name.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;

    });

    if (filtered.length === 0) {

        foodGrid.innerHTML =
            `<p class="no-results">No food found. Try another search.</p>`;

        return;
    }

    filtered.forEach(food => {

        const card = document.createElement("div");

        card.className = "food-card";

        const details = document.createElement("div");

        const name = document.createElement("h3");
        name.textContent = food.name;

        const price = document.createElement("p");
        price.className = "food-price";
        price.textContent = food.price;

        const order = document.createElement("a");
        order.className = "food-order";
        order.href = "#";
        order.textContent = "Order Now";

        order.addEventListener("click", function(e) {
            e.preventDefault();
            orderFood(food.name + " - " + food.price);
        });

        details.append(name, price, order);

        card.append(details);

        foodGrid.appendChild(card);

    });

}


// CATEGORY FILTER

let currentCategory = "all";

document.querySelectorAll(".filter-btn").forEach(button => {

    button.addEventListener("click", function() {

        document.querySelectorAll(".filter-btn")
            .forEach(btn => btn.classList.remove("active"));

        this.classList.add("active");

        currentCategory = this.dataset.filter;

        displayFoods(currentCategory,
            document.getElementById("menuSearch").value);

    });

});


// SEARCH

document.getElementById("menuSearch")
    .addEventListener("input", function() {

        displayFoods(currentCategory, this.value);

    });


// WHATSAPP ORDER

function orderFood(foodName) {

    const phone = "2348115309787";

    const message =
        `Hello Freshie n Creammie! I would like to order: ${foodName}. Please provide more details.`;

    const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

}


// PLATTER ORDERS

document.querySelectorAll(".order-link").forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        orderFood(this.dataset.order);

    });

});


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("show");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});


// INITIAL DISPLAY

displayFoods();

console.log("Freshie n Creammie website loaded successfully!");