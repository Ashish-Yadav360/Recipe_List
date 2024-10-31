import { useContext } from "react"
import { GlobalContext } from "../../Context"
import Homecomp from "../../Components/Home/Homecomp"

const Home = () => {
  const {loading,recipeList} = useContext(GlobalContext);
  if(loading) return <div>Loading..... Please wait!</div>
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10"> 
  {recipeList && recipeList.length > 0 ? 
    recipeList.map(item => {
      return <Homecomp key={item.id} items={item} />;
    }) : 
    <p className="lg:text-4xl text-2xl text-center text-black font-extrabold">Nothing to Show Please Search Something!</p>
  } 
</div>

  )
}

export default Home