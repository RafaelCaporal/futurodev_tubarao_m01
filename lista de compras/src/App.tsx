import "./App.css";
import { Header } from "./components/header";
import { ItemsCounter } from "./components/ItemsCounter";
import { EmptyCart } from "./components/EmptyCart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <Header
        title="Lista de compras 🛒"
        subtitle="Faça sua lista e use em qualquer lugar! 🔥"
      />
      <ul>
        {cart.map((item) => (
          <li style={{ fontSize: 25 }}>{item}</li>
        ))}
      </ul>
      {cart.length > 0 ? <ItemsCounter total={cart.length} /> : <EmptyCart />}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>Item a ser adicicionado: {inputValue}</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="btn-cart">
          <button
            onClick={() => {
              setCart([...cart, inputValue]);
              setInputValue(``);
            }}
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
