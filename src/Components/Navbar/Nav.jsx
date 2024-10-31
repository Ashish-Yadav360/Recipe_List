import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { GlobalContext } from "../../Context"


const Nav = () => {
     const {SearchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)
    //  console.log(SearchParam);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
        <NavLink to={'/'} className=" text-2xl font-semibold ">FoodRecipe</NavLink>
        <form onSubmit={handleSubmit}>
            <input  value={SearchParam} onChange={(event)=> setSearchParam(event.target.value)} type="search" placeholder="Enter Items..." name="search" className="px-10 py-3 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200" />
        </form>
        <ul className="flex gap-5">
           <li>
              <NavLink  to={"/"}
              
              className='text-black text-2xl hover:text-gray-300 duration-300'   
              >
              Home
              </NavLink>
           </li> 
           <li>
           <NavLink  to={"/Favourites"}
              className='text-black text-2xl hover:text-gray-300 duration-300'
              >
              Favourites
              </NavLink>
           </li>
        </ul>
    </nav>
  )
}

export default Nav