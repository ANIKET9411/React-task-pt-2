import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Favourites from "./Pages/Favourites";
import Context from "./Context";
import FilterPortion from "./component/FilterPortion";
import Header from "./component/Header";

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Header />
          <FilterPortion />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="Favourites" element={<Favourites />}></Route>
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
