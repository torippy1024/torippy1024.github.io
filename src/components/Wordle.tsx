import { useState, useRef } from "react";
import ExternalLink from "./ExternalLink";

const Wordle = () => {
  const answer = "lucky";

  const states = [
    useState(""),
    useState(""),
    useState(""),
    useState(""),
    useState(""),
  ];

  const refs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [history, setHistory] = useState<string[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    index: any
  ) => {
    setState(e.target.value.slice(-1));
    (index < refs.length-1) && refs[index+1].current?.focus();
  };

  const handleClick = () => {
    const input = states.map((state) => state[0]).join("");
    (input === answer) ? console.log("ok") : console.log("no");
    setHistory([...history, input]);
  };

  const resultInput = (char: string, index: number) => {
    const color =
      (char === answer[index])
      ? "bg-green-500 text-white"
      : (answer.match(char))
      ? "bg-yellow-500 text-white"
      : "bg-gray-500 text-white";
    return (
      <input
        type="text"
        value={char}
        className={`w-8 h-8 border mx-1 text-center rounded ${color}`}
        placeholder="?"
        key={index}
        readOnly
      />    
    )
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        {states.map((state, index) =>
          <input
            type="text"
            value={state[0]}
            onChange={(e) => handleChange(e, state[1], index)}
            className="w-8 h-8 border mx-1 text-center rounded"
            placeholder="?"
            key={index}
            ref={refs[index]}
          />  
        )}
        <button
          onClick={handleClick}
          className="btn mx-1"
        >
          check
        </button>
        <ExternalLink href="https://www.nytimes.com/games/wordle/index.html">
          <div className="w-6 h-6 rounded-full text-white bg-gray-400 text-center no-underline">
            ?
          </div>
        </ExternalLink>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div>
          {history.map((str, index) =>
            <div className="m-1" key={index}>
              {[...str].map((char, index) =>
                resultInput(char, index)
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
};

export default Wordle;