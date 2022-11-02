import { useState } from "react";
import { useSpring, animated } from "react-spring";

type BarType = {
  toggle: boolean;
  width?: number;
  text?: string;
};

const Bar = ({toggle, width=100, text}: BarType) => {
  const barProps = useSpring({
    width: toggle ? `${width*2}px` : "0px",
    config: {
      duration: 1000,
    },
  });

  return (
    <div className="">
      <animated.div className="h-5 bg-primary flex justify-center items-center" style={barProps}>
        {text}
      </animated.div>
      {/* <animated.div className="h-full w-full text-center select-none">
      </animated.div> */}
    </div>
  );
};

export default Bar;