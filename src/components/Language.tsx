import "animate.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import InView from "./InView";
import { SiCplusplus, SiTypescript, SiPython, SiCsharp } from "react-icons/si";

const Language = () => {
  const langs = [
    {name: "C++", icon: SiCplusplus, rate: 100},
    {name: "TypeScript", icon: SiTypescript, rate: 80},
    {name: "Python", icon: SiPython, rate: 70},
    {name: "C#", icon: SiCsharp, rate: 30},
  ];

  return (
    <div>
      <InView>
        <div className="text-xl text-white text-center sm:text-left">
          Languages
        </div>
        <div className="flex flex-wrap items-center justify-center sm:justify-start sm:flex-row">
          {langs.map((lang, index) =>
            <InView key={index} className="p-2 w-1/2 sm:w-1/3 md:w-1/4">
              <div>
                <CircularProgressbarWithChildren value={lang.rate}>
                  <lang.icon size={"40%"} />
                  <div>{lang.name}</div>
                </CircularProgressbarWithChildren>
              </div>
            </InView>
          )}
        </div>
      </InView>
    </div>
  );
};

export default Language;