import "animate.css";
import { buildStyles, CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import InView from "./InView";
import { SiReact, SiTailwindcss, SiGithub, SiDocker, SiVisualstudiocode, SiAmazonaws, SiNextdotjs, SiUnity, SiOpencv, SiOpengl, SiNodedotjs } from "react-icons/si";

const Framework = () => {
  const frameworks = [
    {
      genre: "frontend",
      color: "#dd2a7b",
      list: [
        {name: "React", icon: SiReact, rate: 100},
        {name: "TailwindCSS", icon: SiTailwindcss, rate: 80},
        {name: "Next.js", icon: SiNextdotjs, rate: 20},
      ],
    },
    {
      genre: "backend",
      color: "#515bd4",
      list: [
        {name: "Node.js", icon: SiNodedotjs, rate: 20},
      ],
    },
    {
      genre: "others",
      color: "#8134af",
      list: [
        {name: "VSCode", icon: SiVisualstudiocode, rate: 80},
        {name: "GitHub", icon: SiGithub, rate: 80},
        {name: "Docker", icon: SiDocker, rate: 40},
        {name: "AWS", icon: SiAmazonaws, rate: 10},
        {name: "OpenCV", icon: SiOpencv, rate: 60},
        {name: "OpenGL", icon: SiOpengl, rate: 50},
        {name: "Unity", icon: SiUnity, rate: 30},
      ],
    },
  ];

  return (
    <div className="my-5">
      <InView>
        <div className="text-xl text-white text-center sm:text-left">
          Frameworks & Tools
        </div>

        {frameworks.map((works, index) =>
          <div key={index}>
            <div className="text-center mt-2 font-bold sm:text-left" style={{color: works.color}}>{works.genre}</div>
            <div className="flex flex-wrap items-center justify-center sm:justify-start sm:flex-row">
              {works.list.map((framework, index) =>
                <InView key={index} className="p-2 w-1/3 sm:w-1/4 md:w-1/5">
                  <div>
                    <CircularProgressbarWithChildren
                      value={framework.rate}
                      styles={buildStyles({
                        pathColor: works.color
                      })}
                    >
                      <framework.icon size={"40%"} />
                      <div>{framework.name}</div>
                    </CircularProgressbarWithChildren>
                  </div>
                </InView>
              )}
            </div>
          </div>
        )}
      </InView>
    </div>
  );
};

export default Framework;