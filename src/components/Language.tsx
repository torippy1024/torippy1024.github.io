import { useInView } from "react-intersection-observer";
import "animate.css";
import Bar from "./Bar";

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
              {/* <div className="my-1 flex justify-center">
                <Bar toggle={inView2} width={100} text="C++" />
              </div>
              <div className="my-1 flex justify-center">
                <Bar toggle={inView2} width={80} text="TypeScript" />
              </div>
              <div className="my-1 flex justify-center">
                <Bar toggle={inView2} width={60} text="Python" />
              </div>
              <div className="my-1 flex justify-center">
                <Bar toggle={inView2} width={40} text="C#" />
              </div> */}
              <div className="flex justify-center sm:justify-start">
                <div className="flex-cols text-end mr-2">
                  <div>C++</div>
                  <div>TypeScript</div>
                  <div>Python</div>
                  <div>C#</div>
                </div>
                <div>
                  <div className="my-1">
                    <Bar toggle={inView2} width={80} />
                  </div>
                  <div className="my-1">
                    <Bar toggle={inView2} width={60} />
                  </div>
                  <div className="my-1">
                    <Bar toggle={inView2} width={40} />
                  </div>
                  <div className="my-1">
                    <Bar toggle={inView2} width={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Language;