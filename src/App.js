import React from 'react';
import { useState } from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import FreshmanGuide from './components/FreshmanGuide';
import Home from './components/Home';
import Events from './components/Events';

function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "quem-somos":
        return <About />;
      case "guia":
        return <FreshmanGuide />;
      case "contact":
        return <Events />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <NavBar setPage={setPage} />
      <div>{renderPage()}</div>
    </div>
  );
}

export default App;
