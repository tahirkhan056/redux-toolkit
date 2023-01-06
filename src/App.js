import React from "react";
import { Counter } from "./component/counter";
import ProductList from "./component/product";
import "./App.css";
import Header from "./component/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      <ProductList />
    </div>
  );
}

export default App;
