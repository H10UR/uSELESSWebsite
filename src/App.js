import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";

import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/sponsors.scss";
import "./styles/homeAbout.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/about.scss";

function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
       
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
