// import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/Component/Layout/Header/Header";
import Home from "../src/Component/Home/Home.jsx";
import About from "../src/Component/About/About.jsx";
import Contact from "../src/Component/Contact/Contact.jsx";
import Footer from "../src/Component/Layout/Footer/Footer.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
