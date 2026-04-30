document.addEventListener("DOMContentLoaded", () => {

    // ---------------- CART ----------------
    let count = localStorage.getItem("cartCount") || 0;
    count = parseInt(count);

    const cartCount = document.getElementById("cart-count");

    function updateCart() {
        if (cartCount) {
            cartCount.innerText = count;
        }
    }

    updateCart();

    const buttons = document.querySelectorAll(".add-cart");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            count++;
            localStorage.setItem("cartCount", count);
            updateCart();
            alert("Item added to cart!");
        });
    });

    const clearBtn = document.querySelector(".clear-cart");

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            count = 0;
            localStorage.setItem("cartCount", count);
            updateCart();
        });
    }

    // ---------------- PRODUCT PAGE ----------------
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    const title = document.getElementById("product-title");
    const price = document.getElementById("product-price");
    const image = document.getElementById("product-image");
    const desc = document.getElementById("product-desc");

    if (title && price && image && desc) {

        if (product === "health1") {
            title.innerText = "Health Kit";
            price.innerText = "₹999";
            image.src = "health_kit.png";
            desc.innerText = "Complete health care kit for daily needs.";
        }

        else if (product === "health2") {
            title.innerText = "Skin Care Set";
            price.innerText = "₹799";
            image.src = "skin_care.jpg";
            desc.innerText = "Premium skin care essentials.";
        }

        else if (product === "health3") {
            title.innerText = "Hair Care Pack";
            price.innerText = "₹699";
            image.src = "hair_set.jpg";
            desc.innerText = "Hair care products for strong and healthy hair.";
        }

        else if (product === "health4") {
            title.innerText = "Fitness Kit";
            price.innerText = "₹1199";
            image.src = "fitness_kit.jpg";
            desc.innerText = "Fitness essentials for your daily workout.";
        }

        else if (product === "health5") {
        title.innerText = "Protein Powder";
        price.innerText = "₹2499";
        image.src = "protein.jpg";
        desc.innerText = "High-quality protein supplement for muscle growth.";
        }

        else if (product === "health6") {
            title.innerText = "Vitamin Tablets";
            price.innerText = "₹499";
            image.src = "vitamins.jpg";
            desc.innerText = "Daily essential vitamins for better health.";
        }

        else if (product === "health7") {
            title.innerText = "Face Wash Kit";
            price.innerText = "₹799";
            image.src = "facewash.jpg";
            desc.innerText = "Gentle face wash kit for clear and healthy skin.";
        }

        else if (product === "health8") {
            title.innerText = "Massage Oil Set";
            price.innerText = "₹599";
            image.src = "massage_oil.jpg";
            desc.innerText = "Relaxing massage oils for body care.";
        }
            else {
                title.innerText = "Product Not Found";
                price.innerText = "";
                desc.innerText = "";
            }
        }
});