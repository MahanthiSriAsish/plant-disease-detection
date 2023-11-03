// // App.js

// import React from "react";
// import Carousel from "./Components/Body.js";
// import Navbar from "./Components/Header.js";
// import "./css/Carousel.css";
// import "./css/body.css";
// export default function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="body-container">
//         <Carousel images={images} />
//         <div className="card-container"></div>
//       </div>
//     </div>
//   );
// }

// AppRouter.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Register from "./pages/register.jsx";
import "./css/Carousel.css";
// import './css/body.css'
import "./css/Navbar.css";

function AppRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/loginSuccessful" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AppRouter;