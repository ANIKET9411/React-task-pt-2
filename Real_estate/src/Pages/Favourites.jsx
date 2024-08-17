import { useContext } from "react";
import { Mycontext } from "../Context";
import Card from "../component/Card";

function Favourites() {
  const { favourite } = useContext(Mycontext);
  return (
    <div className="px-5 lg:px-20 md:px-20 ">
      <div className="flex flex-wrap justify-between w-full overflow-hidden">
        {favourite.map((item) => {
          if (item.isFavourites == true)
            return <Card key={item.name} value={item} />;
        })}
      </div>
    </div>
  );
}
export default Favourites;
