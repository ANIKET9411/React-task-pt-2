import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main_calc from "./component/Main_clac";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Main_calc />
      <Footer />
    </>
  );
}

export default App;
