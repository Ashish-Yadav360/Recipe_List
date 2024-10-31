import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar/Nav";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Favourite from "./Pages/Favourite/Favourite";
const App = () => {
  return (
    <div className="min-h-screen pt-6 bg-white text-gray-600 text-lg">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/recipe-items/:id" element={<Details />} />
      </Routes>
    </div>
  );
};

export default App;
