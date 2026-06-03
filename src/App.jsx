import { useState } from "react";
import foods from "./data/foods";
import FoodCard from "./components/FoodCard";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import "./App.css";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const addToCart = (food) => {
    const exist = cart.find((item) => item.id === food.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === food.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...food, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const filteredFoods = foods.filter((food) => {
    const matchesSearch = food.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || food.category === category;

    return matchesSearch && matchesCategory;
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container">
      <Navbar cartCount={cart.length} />

      <div className="hero">
        <h1>🍔 Food Order App</h1>
        <p>Order your favorite food online</p>
      </div>

      <Offers />

      <div className="filters">
        <button onClick={() => setCategory("All")}>
          All
        </button>

        <button onClick={() => setCategory("Burger")}>
          Burger
        </button>

        <button onClick={() => setCategory("Pizza")}>
          Pizza
        </button>

        <button onClick={() => setCategory("Sandwich")}>
          Sandwich
        </button>

        <button onClick={() => setCategory("Fries")}>
          Fries
        </button>

        <button onClick={() => setCategory("Drinks")}>
          Drinks
        </button>

        <button onClick={() => setCategory("Snacks")}>
          Snacks
        </button>

        <button onClick={() => setCategory("Dessert")}>
          Dessert
        </button>
        
      </div>

      <input
        type="text"
        placeholder="Search food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search"
      />

      <div className="foods">
        {filteredFoods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            addToCart={addToCart}
          />
        ))}
      </div>

      <Cart
        cart={cart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        total={total}
      />
      <footer>
        <h3>Food Order</h3>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;    