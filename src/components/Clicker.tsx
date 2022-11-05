import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

const Clicker = () => {
  const [rate, setRate] = useState(0);
  const barProps = useSpring({
    width: `${rate}%`,
    config: {
      duration: 1000,
    },
  });

  useEffect(() => {
    const timerId = setInterval(() => setRate((rate) => rate < 100 ? Math.max(rate-1, 0) : 100), 100);
    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="my-5">
      <div className="flex items-center">
        <button className="btn" onClick={() => {setRate((rate) => Math.min(rate+3, 100))}}>
          ？
        </button>
        <animated.div className="h-10 ml-5 text-white bg-primary rounded-full flex justify-center items-center" style={barProps}>
          {(rate == 100) ? "Kawaii Future Bass" : `${rate}%`}
        </animated.div>
      </div>
    </div>
  );
};

export default Clicker;