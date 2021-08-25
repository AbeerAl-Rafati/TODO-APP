import React, { useState, createContext } from "react";
// import { v4 as uuid } from "uuid";
// import { AuthContext } from "./auth";

export const OptionsContext = createContext();

function OptionsProvider(props) {
  const [numberOfTasks, setnumberOfTasks] = useState(5);
  const [view, setView] = useState(false);
  const [first, setFirst] = useState(0);
  const [end, setEnd] = useState(numberOfTasks - 1);

  function setOption(numb, val) {
    setnumberOfTasks(numb);

    setView(val);
  }
  function nextpage() {
    setFirst(first + numberOfTasks);
    setEnd(end + numberOfTasks);
  }
  function previouspage() {
    setFirst(first - numberOfTasks);
    setEnd(end - numberOfTasks);
  }

  return (
    <OptionsContext.Provider
      value={{
        numberOfTasks,
        view,
        first,
        end,
        setOption,
        nextpage,
        previouspage,
      }}
    >
      {props.children}
    </OptionsContext.Provider>
  );
}

export default OptionsProvider;

// import {useState} from 'react'

// export const optionsContext = React.createContext()

// function Options(props) {

//   return (
//    <optionsContext.Provider value={{}}>
//        {props.children}
//    </optionsContext.Provider>

//   )
// }

// export default Options
