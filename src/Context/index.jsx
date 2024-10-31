import { createContext, useState } from "react"
import toast from "react-hot-toast";

export const  GlobalContext = createContext(null);

const GlobalState = ({children}) => {
  const[SearchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [favouritelist, setfavouritelist] = useState([]);
   async function handleSubmit(e){
        e.preventDefault(); 
       try {
          console.log(SearchParam);
         const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${SearchParam}`);
         const anres = await res.json();
          let findata= anres.data.recipes;
          console.log(findata);
         if(findata && findata.length!=0){
            setRecipeList(findata);
             setLoading(false);
            setSearchParam('');
         }
       } catch (error) {
           setLoading(false);
           setSearchParam('');
           console.log(error)
       }
   }
   function handlefavourite(getcurrentindex){
       let cpyfavourite = [...favouritelist];
       const index = cpyfavourite.findIndex( item=> item.id ===getcurrentindex.id);
       if(index===-1){
         toast.success("Added to Favouite");
         cpyfavourite.push(getcurrentindex)
       }else{
        toast.error("Removed from Favourite");
        cpyfavourite.splice(index,1)
       }
       console.log("favourite",favouritelist);
       setfavouritelist(cpyfavourite);
   }
  return (
    <GlobalContext.Provider value={{SearchParam,loading,recipeList, setSearchParam , handleSubmit, favouritelist, handlefavourite}}>
         {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState