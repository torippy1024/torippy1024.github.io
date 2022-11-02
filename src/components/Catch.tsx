import { useState } from "react";
import Typing from "./Typing";

type CatchType = {
  onEnd: Function;
};

const Catch = ({onEnd}: CatchType) => {
  const [isEndFirstMessage, setIsEndFirstMessage] = useState(false);
  return (
    <div data-theme="dark" className="p-3">
      <div className="flex flex-col sm:flex-row justify-center items-center text-3xl font-dot text-white">
        <div className="mx-2 text-center">
          <Typing message="Mechanical Engineering" typeEnd={()=>{setIsEndFirstMessage(true)}} />
        </div>
        <div className="mx-2 text-center">
          &
        </div>
        <div className="mx-2 text-center">
          {
            isEndFirstMessage && <Typing message="Information Technology" typeEnd={onEnd} />
          }
        </div>
      </div>
    </div>
  );
};

export default Catch;