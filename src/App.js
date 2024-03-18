import { useEffect, useState } from "react";
import "./App.css";
import PortfolioContainer from "./PortfolioComponent/PortfolioContainer";
import PreloadingPage from "./PortfolioComponent/PreloadingPage";

function App() {
  const [landingPage, setLandingPage] = useState(false);
  useEffect(() => {
    const loadingTimeOut = setTimeout(() => {
      setLandingPage(true);
    }, 3000);

    return () => {
      clearTimeout(loadingTimeOut);
    };
  }, []);
  return (
    <div className="App">
      {!landingPage ? <PreloadingPage /> : <PortfolioContainer />}
    </div>
  );
}

export default App;
