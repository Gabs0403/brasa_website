import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/Home";
import About from "./views/About";
import FreshmanGuide from "./views/FreshmanGuide";
import Events from "./views/Events";
import Footer from "./components/Footer";
import PageTitleManager from "./components/TitleManager";

function App() {
  return (
    <Router>
      <PageTitleManager/>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/freshman-guide" element={<FreshmanGuide />} /> */}
        <Route path="/events" element={<Events />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;