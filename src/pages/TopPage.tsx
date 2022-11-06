import { useState } from "react";
import Award from "../components/Award";
import Bar from "../components/Bar";
import Catch from "../components/Catch";
import Clicker from "../components/Clicker";
import Footer from "../components/Footer";
import Framework from "../components/Framework";
import Header from "../components/Header";
import Wordle from "../components/Wordle";
import Introduction from "../components/Introduction";
import Language from "../components/Language";
import MouseStalker from "../components/MouseStalker";
import Saturation from "../components/Saturation";
import SpringCards from "../components/SpringCards";

const TopPage = () => {
  const [isEndCatch, setIsEndCatch] = useState(false);

  const isUserAgentPC = () => {
    return navigator.userAgent.match(/iPhone|Android.+Mobile/) ? false : true;
  }

  return  (
    <div data-theme="dark" className="flex flex-col min-h-screen">
      {isUserAgentPC() && <MouseStalker />}
      <Header />
      <Catch onEnd={() => {setIsEndCatch(true)}} />
      <div className="grow container mx-auto p-5 max-w-3xl">
        {
          isEndCatch &&
          <div className="animate-slideIn">
            <Introduction />
            <Clicker />
            <Language />
            <Framework />
            <Saturation />
            <Award />
            <Wordle />
            <SpringCards />
        </div>
        }
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;