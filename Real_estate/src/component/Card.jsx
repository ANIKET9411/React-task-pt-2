import { useContext } from "react";
import { Mycontext } from "../Context";
import {
  FaHeart,
  FaBed,
  FaBath,
  FaRegSquare,
  FaRupeeSign,
} from "react-icons/fa";

function Card({ value }) {
  const { favourite, setFavourite } = useContext(Mycontext);
  function changeStatus(val) {
    let update = favourite.map((item) => {
      if (val.name === item.name) {
        item.isFavourites = !item.isFavourites;
      }
      return item;
    });

    console.log(update);
    setFavourite(update);
    // let newupdate = list.map((item) => {
    //   if (val.name === item.name) {
    //     item.isFavourites = !item.isFavourites;
    //   }
    //   return item;
    // });
    // setList(newupdate);
  }
  return (
    <div className="card m-3 h-auto border p-0 rounded-t-lg">
      <img src={value.image} className="h-56 w-full rounded-t-lg" />
      {console.log(favourite)}
      <div className="p-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <FaRupeeSign className="text-2xl font-bold text-blue-500" />
            <h1 className="text-3xl font-bold text-blue-500">
              {value.price}/day
            </h1>
          </div>
          {/* <p
            className={`${
              value.isFavourites ? "bg-red-600" : "bg-gray-400"
            } h-5 w-5`}
            onClick={() => {
              changeStatus(value);
            }}
          ></p> */}
          <FaHeart
            className={`${
              value.isFavourites ? "text-red-600" : "text-gray-400"
            } h-5 w-5`}
            onClick={() => {
              changeStatus(value);
            }}
          />
        </div>
        <h1 className="text-2xl font-bold">{value.name}</h1>
        <p>{value.location.address}</p>
        <hr />
        <div className="flex justify-between mx-2">
          <div className="flex items-center">
            <FaBed className="text-2xl mr-1" /> {value.beds}
            beds
          </div>
          <div className="flex items-center">
            <FaBath className="text-2xl mr-1" /> {value.baths} baths
          </div>
          <div className="flex items-center">
            <FaRegSquare className="text-2xl mr-1" />
            {value.size}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
