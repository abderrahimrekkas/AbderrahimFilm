import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Trending from "./Pages/Trending";
import Movies from "./Pages/Movies";
import TV from "./Pages/TV";
import Search from "./Pages/Search"
import Error from "./Pages/Error";
import InfoCard from "./Pages/Info";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        
      <Routes>
          <Route path="/" element={<Trending />} exact />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<TV />} />
          <Route path="*" element={<Error />} />
          <Route path="/InfoCard/:id" element={<InfoCard />} />
      </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
