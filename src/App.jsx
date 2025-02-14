import React from "react";
import { Route, Routes  } from "react-router-dom";

import TopScrollBar from "./components/TopScrollBar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Courses from "./pages/Courses";
import Carrers from "./pages/Carrers";
import Blogs from "./pages/Blogs";
import Internships from "./pages/Internships";
import About from "./pages/About";

const App = () => {
  //set background image
  const backgroundImageStyle = {
    background:
      "  url('https://ezitech.org/wp-content/uploads/2021/07/modernagencyBG@2x1.jpg')",

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
  };

  return (
    <div style={backgroundImageStyle}>
      <TopScrollBar />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/carrers" element={<Carrers />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
