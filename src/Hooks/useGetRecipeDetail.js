import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const useGetRecipeDetail = () => {
  const [loading, setLoading] = useState(false);
  const [recipeDetail, setRecipeDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getRecipe = async () => {
      setLoading(true);
      try {
        console.log("Fetching recipe with id:", id);
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        console.log("Response status:", res.status);
        const data = await res.json();
        console.log("API response data:", data);

        if (res.ok) {
          const findata = data.data.recipe;
          setRecipeDetail(findata);
          console.log("Set recipe detail:", findata);
        } else {
          throw new Error(data.message || 'Failed to fetch recipe details');
        }
      } catch (error) {
        console.error("Error fetching recipe:", error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getRecipe();
  }, []);


  return { loading, recipeDetail };
};

export default useGetRecipeDetail;
