import { Link } from "react-router-dom";
import Details from "../../Pages/Details/Details";

const Homecomp = ({items}) => {
  return (
    <div className="w-80 flex flex-col justify-center overflow-hidden bg-white/75  gap-5 items-center  p-2 rounded-lg shadow-2xl">
    <div className="h-40 rounded-xl flex justify-center overflow-hidden  items-center">
        <img
            src={items.image_url}
            alt="Recipe List"
            className="block w-full object-cover"
        />
    </div>
    <div>
     <span className="text-sm text-cyan-700 font-medium">{items?.publisher}</span>
     <h3 className="font-bold text-2xl truncate text-black">{items?.title}</h3>
    </div>
    <Link className="bg-black text-white px-5 py-3 shadow-md shadow-slate-700 rounded-lg outline-none hover:bg-slate-800 mb-2" to={`/recipe-items/${items?.id}`}>Recipe Detail
    </Link>
</div>

  );
};

export default Homecomp;


