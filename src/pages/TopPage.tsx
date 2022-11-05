import { useState } from "react";
import Award from "../components/Award";
import Bar from "../components/Bar";
import Catch from "../components/Catch";
import Footer from "../components/Footer";
import Framework from "../components/Framework";
import Header from "../components/Header";
import Introduction from "../components/Introduction";
import Language from "../components/Language";
import MouseStalker from "../components/MouseStalker";
import Saturation from "../components/Saturation";

const TopPage = () => {
  const [isEndCatch, setIsEndCatch] = useState(false);

  return  (
    <div data-theme="dark" className="flex flex-col min-h-screen">
      <MouseStalker />
      <Header />
      <Catch onEnd={() => {setIsEndCatch(true)}} />
      <div className="grow container mx-auto p-5 max-w-3xl">
        {
          isEndCatch &&
          <div className="animate-slideIn">
            <Introduction />
            <Language />
            <Framework />
            <Award />
            <Saturation />
        </div>
        }
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;