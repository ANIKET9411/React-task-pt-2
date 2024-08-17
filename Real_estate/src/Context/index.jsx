import { createContext, useState } from "react";
import { data } from "../Data";

export const Mycontext = createContext();
function Context(props) {
  const [formdata, setFormdata] = useState({
    city: "All",
    price: "7000",
    type: "All",
    date: "",
  });
  const [list, setList] = useState(data);
  const [favourite, setFavourite] = useState(data);
  const [search, setSearch] = useState("");
  return (
    <Mycontext.Provider
      value={{
        formdata,
        setFormdata,
        list,
        setList,
        favourite,
        setFavourite,
        search,
        setSearch,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
}
export default Context;
