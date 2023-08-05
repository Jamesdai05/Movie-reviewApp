import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Result from "./components/Result";
import Favourite from "./components/Favourite";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/Favourite" element={<Favourite />} />
      </Routes>
    </div>
  );
};

export default Main;
