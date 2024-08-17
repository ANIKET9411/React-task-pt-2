import { useContext } from "react";
import { Mycontext } from "../Context";
import { data } from "../Data";

function FilterPortion() {
  const { formdata, setFormdata, setList } = useContext(Mycontext);

  function handleInput(e) {
    let val = e.target.value;
    let KEY = e.target.name;
    let copydata = { ...formdata };
    copydata[KEY] = val;
    setFormdata(copydata);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formdata);
    let update = data.filter((item) => {
      if (formdata.price !== "7000") {
        return (
          item.price <= parseInt(formdata.price) &&
          item.price > parseInt(formdata.price) - 1000
        );
      } else {
        return item;
      }
    });
    update = update.filter((item) => {
      if (formdata.city.toLowerCase() !== "all")
        return item.location.city.toLowerCase() === formdata.city.toLowerCase();
      else {
        return item;
      }
    });
    update = update.filter((item) => {
      if (formdata.type.toLowerCase() !== "all")
        return item.type.toLowerCase() === formdata.type.toLowerCase();
      else {
        return item;
      }
    });
    setList(update);
  }

  return (
    <div className="px-6 md:px-20 my-3">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-between h-auto md:h-28 border bg-[#EFEDEE]"
      >
        <div className="border p-2 flex flex-col w-full md:w-1/5 mb-2 md:mb-0">
          <label htmlFor="">Enter City</label>
          <input
            type="text"
            name="city"
            value={formdata.city}
            onChange={handleInput}
            required
            className="w-full"
          />
        </div>
        <div className="border p-2 flex flex-col w-full md:w-1/5 mb-2 md:mb-0">
          <label htmlFor="">Date</label>
          <input
            type="date"
            required
            name="date"
            value={formdata.date}
            onChange={handleInput}
            className="w-full"
          />
        </div>
        <div className="border p-2 flex flex-col w-full md:w-1/5 mb-2 md:mb-0">
          <label htmlFor="">Price</label>
          <select
            name="price"
            value={formdata.price}
            onChange={handleInput}
            required
            className="w-full"
          >
            <option value="7000">Rs. 0-6000</option>
            <option value="1000">Rs. 0-1000</option>
            <option value="2000">Rs. 1000-2000</option>
            <option value="3000">Rs. 2000-3000</option>
            <option value="4000">Rs. 3000-4000</option>
            <option value="5000">Rs. 4000-5000</option>
            <option value="6000">Rs. 5000-6000</option>
          </select>
        </div>
        <div className="border p-2 flex flex-col w-full md:w-1/5 mb-2 md:mb-0">
          <label htmlFor="">Property type</label>
          <select
            name="type"
            value={formdata.type}
            onChange={handleInput}
            required
            className="w-full"
          >
            <option value="all">All</option>
            <option value="house">House</option>
            <option value="hotel">Hotel</option>
            <option value="oyo">Oyo</option>
            <option value="villa">Villa</option>
            <option value="pg">Pg</option>
            <option value="farm-house">Farm House</option>
          </select>
        </div>
        <div className="border p-2 flex  justify-center items-center w-full md:w-auto">
          <button className="bg-[#0D6EFD] px-3 py-2 text-white rounded-md w-auto text-center md:w-auto">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default FilterPortion;
