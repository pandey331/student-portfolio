import "./App.css";
import { useState } from "react";

import Mode from "../../components/Mode/Mode";
import Header from "../../components/Header/Header";
import { About } from "../../components/About/About";
import { Bio } from "../../components/Bio/Bio";
import { Footer } from "../../components/Footer/Footer";
import Carosule from "../../components/Carosule/Carosule";

function Home() {
  const [whiteMode, setQuietMode] = useState(false);

  const handleModeChange = () => {
    setQuietMode(!whiteMode);
  };

  return (
    <div className={whiteMode ? "white-mode" : "dark-mode"}>
      <Mode setMode={whiteMode} handleModeChange={handleModeChange} />
      <Header />
      <About />
      <Bio />
      <Carosule/>
      <Footer setMode={whiteMode}/>
    </div>
  );
}

export default Home;
