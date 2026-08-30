/**
 * LEGACY XI - Global Configuration & Database Models
 */
const CONFIG = {
  STORE_NAME: "LEGACY XI",
  CURRENCY: "₹",
  SCRIPT_URL: "https://script.google.com/macros/s/AKfycbwTvV1R67l2BKidmaNF5COYvfUJ3iwzg6-1njBdlVKW9Rs9xFVFxwktY6dOpoWpwPX5Jg/exec",
  CASHFREE_SANDBOX_URL: "https://sandbox.cashfree.com/pg/orders",
  SHIPPING: {
    TAMIL_NADU: 50,
    OUTSIDE_TAMIL_NADU: 100
  },
  PRICING: {
    SET_JERSEY: 750,
    PLAYER_VERSION: 900
  }
};

// Initial Mock Database for Products
const INITIAL_PRODUCTS = [
  {
    id: "LXI-001",
    name: "Real Madrid Home Kit 24/25",
    club: "Real Madrid",
    category: "Club Jersey",
    versions: ["SET JERSEY", "PLAYER VERSION"],
    prices: { "SET JERSEY": 750, "PLAYER VERSION": 900 },
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&q=80&w=800",
    description: "Official Real Madrid Home Kit featuring breathable climacool tech and embroidered crest.",
    featured: true,
    bestSeller: true,
    newArrival: true,
    stock: 45
  },
  {
    id: "LXI-002",
    name: "FC Barcelona Home Jersey 24/25",
    club: "FC Barcelona",
    category: "Club Jersey",
    versions: ["SET JERSEY", "PLAYER VERSION"],
    prices: { "SET JERSEY": 750, "PLAYER VERSION": 900 },
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800",
    description: "Classic Blaugrana stripes engineered for athletic performance and street style.",
    featured: true,
    bestSeller: true,
    newArrival: false,
    stock: 30
  },
  {
    id: "LXI-003",
    name: "Manchester United Third Kit 24/25",
    club: "Manchester United",
    category: "Club Jersey",
    versions: ["SET JERSEY", "PLAYER VERSION"],
    prices: { "SET JERSEY": 750, "PLAYER VERSION": 900 },
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=800",
    description: "Retro-inspired third kit featuring the legendary club crest and moisture-wicking weave.",
    featured: true,
    bestSeller: false,
    newArrival: true,
    stock: 20
  },
  {
    id: "LXI-004",
    name: "Arsenal Home Jersey 24/25",
    club: "Arsenal",
    category: "Club Jersey",
    versions: ["SET JERSEY", "PLAYER VERSION"],
    prices: { "SET JERSEY": 750, "PLAYER VERSION": 900 },
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=800",
    description: "Iconic red and white design engineered with slim-fit heat-dry technology.",
    featured: false,
    bestSeller: true,
    newArrival: true,
    stock: 18
  }
];

if (!localStorage.getItem("legacy_products")) {
  localStorage.setItem("legacy_products", JSON.stringify(INITIAL_PRODUCTS));
}

/**
 * LEGACY XI - Login Form Logic
 */
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("login-name").value.trim();
      const email = document.getElementById("login-email").value.trim();
      const phone = document.getElementById("login-phone").value.trim();

      const url = CONFIG.SCRIPT_URL + "?" + new URLSearchParams({
        type: "login",
        name: name,
        email: email,
        phone: phone
      });

      // Execute CORS-Safe GET fetch
      fetch(url, {
        method: "GET",
        mode: "no-cors"
      })
      .then(() => {
        // Save customer session locally
        localStorage.setItem("legacy_user", JSON.stringify({ name, email, phone }));
        alert("Welcome to LEGACY XI! Logged in successfully.");
        window.location.href = "products.html";
      })
      .catch((err) => {
        console.error("Submission error:", err);
        alert("Connection saved locally.");
        window.location.href = "products.html";
      });
    });
  }
});