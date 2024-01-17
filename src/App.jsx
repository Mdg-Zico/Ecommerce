import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import FooterObject from "./components/FooterObject";
import SectOne from "./components/SectOne";
import NoPage from "./pages/NoPage";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();


const feet = FooterObject.map((feets, index) => (
  <Footer key={index} {...feets} />
));



const App = () => {
  return (
    <Router>
    <Navbar />
    <SectOne />
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
            path="/signup"
            element={<SignUp />}
        />
        <Route path="*" element ={<NoPage/>}/>
    </Routes>


    <div className="mainfooter">
          <div className="subsubfooter">{feet}</div>
          <div className="horirule">
            <hr className="hr" />
            <div className="copyright">
              <h4>Copyright Rimel {currentYear}. All right reserved</h4>
            </div>
          </div>
        </div>
</Router>
  );
};

export default App;
