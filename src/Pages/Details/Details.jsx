import { useContext } from "react";
import useGetRecipeDetail from "../../Hooks/useGetRecipeDetail.js";
import { GlobalContext } from "../../Context/index.jsx";

const Details = () => {
  const { loading, recipeDetail} = useGetRecipeDetail();
  const {handlefavourite} = useContext(GlobalContext);
  console.log(recipeDetail);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex justify-between py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="rounded-md flex-shrink-0 justify-start align-top">
          <img
            className="rounded-lg object-cover w-150 h-150 shadow-lg shadow-slate-600 hover:scale-110 transition-transform"
            src={recipeDetail.image_url}
            alt={recipeDetail.title}
          />
        </div>
        <div className="flex flex-col flex-grow lg:ml-10">
          <div className="text-4xl mb-3 text-black font-bold">
            {recipeDetail.title}
          </div>
          <button
            className="mb-3 text-white outline-none font-bold bg-black py-2 rounded-lg shadow-lg shadow-slate-800 hover:bg-slate-700 w-max px-3"
            onClick={() => handlefavourite(recipeDetail)}  // Note the corrected onClick
          >
            Add to Favourite
          </button>
          <div className="flex flex-col gap-3 flex-nowrap">
            <span className="text-2xl font-semibold text-black">
              Ingredients:
            </span>
            {recipeDetail.ingredients && Array.isArray(recipeDetail.ingredients) &&  // Check if ingredients exist and are an array
              recipeDetail.ingredients.map((item) => (
                <ul className="list-disc ml-5 mb-2" key={item.id}>
                  <li className="inline-block mr-2 text-black font-semibold">
                    {item.description}
                  </li>
                  <li className="inline-block">
                    {item.quantity} {item.unit}
                  </li>
                </ul>
              ))}
          </div>
        </div>
      </div>
    );
  }
};



export default Details;
