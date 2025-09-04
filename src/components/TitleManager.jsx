import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageTitleManager() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | BRASA FGCU";
        break;
      case "/events":
        document.title = "Eventos | BRASA FGCU";
        break;
      case "/about":
        document.title = "Quem Somos | BRASA FGCU";
        break;
      default:
        document.title = "BRASA FGCU";
    }
  }, [location]);

  return null;
}

export default PageTitleManager;
