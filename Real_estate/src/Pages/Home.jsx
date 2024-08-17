import { useContext } from "react";
import Card from "../component/Card";
// import FilterPortion from "../component/FilterPortion";
// import { data } from "../Data";

import { Mycontext } from "../Context";
function Home() {
  const { list } = useContext(Mycontext);
  return (
    <div className="lg:px-20 md:px-16 sm:px-5">
      <div className="flex flex-wrap justify-between w-full overflow-hidden">
        {list.length > 0 &&
          list.map((item) => {
            return <Card key={item.name} value={item} />;
          })}
        {list.length == 0 && (
          <div className="flex justify-center w-full">
            <h1 className="font-bold text-3xl mt-10">
              No Mathes Found. Search again...
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
export default Home;
