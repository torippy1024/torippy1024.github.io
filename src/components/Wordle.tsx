import { useState, useRef } from "react";

const Wordle = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<string>>,
    index: any
  ) => {
    setState(e.target.value.slice(-1));
    (index < refs.length-1) && refs[index+1].current?.focus();
  };

  return (
    <div className="flex justify-center">
      {states.map((state, index) =>
        <input
          type="text"
          value={state[0]}
          onChange={(e) => handleChange(e, state[1], index)}
          className="w-12 border mx-2 text-center rounded"
          placeholder="?"
          key={index}
          ref={refs[index]}
        />  
      )}
      <button className="btn mx-2">check</button>
    </div>
  )
};

export default Wordle;