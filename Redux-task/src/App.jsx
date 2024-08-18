import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./component/ProductList";
import { Provider } from "react-redux";
import { store } from "./Store";
import Cart from "./component/Cart";

function App() {
  return (
    <>
      <Provider store={store}>
        <ProductList />
        <Cart />
      </Provider>
    </>
  );
}

export default App;
