import "animate.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import InView from "./InView";
import { SiCplusplus } from "react-icons/si";

const Language = () => {
  return (
    <div>
      <InView>
        <div className="text-xl text-white text-center sm:text-left">
          Skill
        </div>
        <div className="flex justify-center sm:justify-start">
          <InView>
            <div className="m-2">
              <CircularProgressbarWithChildren value={60}>
                <SiCplusplus size={"50%"} />
                <div>C++</div>
              </CircularProgressbarWithChildren>
            </div>
          </InView>
        </div>
      </InView>
    </div>
  );
};

export default Language;