import { useInView } from "react-intersection-observer";
import "animate.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import InView from "./InView";
import { SiCplusplus } from "react-icons/si";

const Language = () => {
  const { ref, inView } = useInView({
    rootMargin: "-50px",
  });
  const temp = useInView({
    rootMargin: "-100px",
  });
  const inView2 = temp.inView;
  const ref2 = temp.ref;

  return (
    <div>
      <div ref={ref}>
        {inView && (
          <div className="animate__animated animate__fadeInUp" ref={ref2}>
            <div className="text-xl text-white text-center sm:text-left">
              Skill
            </div>
            <div className="m-2">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Language;