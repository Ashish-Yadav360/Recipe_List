import { useContext } from "react"
import { GlobalContext } from "../../Context"
import Homecomp from "../../Components/Home/Homecomp";

const Favourite = () => {
  const {loading,favouritelist} = useContext(GlobalContext);
  if(loading) return <div>Loading..... Please wait!</div>
  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10"> 
  {favouritelist && favouritelist.length > 0 ? 
    favouritelist.map(item => {
      return <Homecomp key={item.id} items={item} />;
    }) : 
    <p className="lg:text-4xl text-2xl text-center text-black font-extrabold">Nothing added in the Favourites</p>
  } 
</div>

  )
}

export default Favourite