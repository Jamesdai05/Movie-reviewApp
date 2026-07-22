import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Popular from "../pages/Popular";
import SearchPage from "../pages/SearchPage";
import Favourite from "../pages/Favourite";
import Trending from "../pages/Trending";
import NotFound from "./components/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Main = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/popular" element={<Popular />} />
                <Route path="/trending" element={<Trending />} />
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Main;
