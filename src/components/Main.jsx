import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Result from "./components/SearchPage/SearchBar";
import Favourite from "./components/Favourite";
import Trending from "./components/Trending";
import NotFound from "./components/NotFound";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Main;
