import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Ministry from "./components/Ministry";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import FloatingWhatsappButton from "./components/FloatingWhatsappButton";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/media" element={<Media />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingWhatsappButton />
    </Router>
  );
}

export default App;
