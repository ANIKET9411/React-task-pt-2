import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Mycontext } from "../Context";
import { FaHome } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const { favourite, setList, search, setSearch } = useContext(Mycontext);
  function searchbykeyword(val) {
    let update = favourite.filter((item) => {
      return item.name.toLowerCase() === val.toLowerCase();
    });
    setList(update);
    setSearch("");
  }
  return (
    <div className="flex justify-between w-full items-center flex-wrap px-5 lg:px-20 py-6 bg-[#EFEDEE]">
      <div className="flex justify-between items-center  w-full lg:w-2/4">
        <p
          onClick={() => {
            navigate("/");
          }}
        >
          <FaHome className="text-4xl text-blue-500" />
        </p>
        <h1 className=" text-xl lg:text-3xl md:text-4xl sm:text-3xl font-bold text-gray-400">
          Search properties to rent
        </h1>
      </div>
      <div className="flex justify-between items-center w-full lg:w-2/6  ">
        <input
          value={search}
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="md:w-2/3"
        />
        <button
          className="px-3 py-2 border-black border-solid border-2 hover:bg-black rounded-lg hover:text-white mx-2"
          onClick={() => searchbykeyword(search)}
        >
          Search
        </button>
        <button
          onClick={() => {
            navigate("/Favourites");
          }}
          className="px-3 py-2 border-black border-solid border-2 hover:bg-black rounded-lg hover:text-white mx-2"
        >
          Favourites
        </button>
      </div>
    </div>
  );
}
export default Header;
