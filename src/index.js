import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Profile from "./pages/profile";
import ReviewBoard from "./pages/reviewBoard"
import Searchresults from "./pages/searchresults";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile/>} />
          <Route path="reviewBoard" element={<ReviewBoard/>} />
          <Route path="searchResults" element={<Searchresults/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));