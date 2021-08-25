import React, { useContext, useEffect, useState } from "react";

import { OptionsContext } from "../../context/options";

function OptionForm() {
  const [option, setOption] = useState({ items: 0, view: false });
  const optionsContext = useContext(OptionsContext);
  useEffect(() => {}, [optionsContext.numberOfTasks, optionsContext.view]);
  function handlesubmit(e) {
    e.preventDefault();
    let strOption = JSON.stringify(option);
    localStorage.setItem("option", strOption);
  }

  function handleTaskNumber(e) {
    setOption({ ...option, [e.target.name]: e.target.value });
  }
  function handleView(e) {
    if (e.target.checked) {
      setOption({ ...option, [e.target.name]: e.target.checked });
    } else {
      setOption({ ...option, [e.target.name]: e.target.checked });
    }
  }

  return (
    <form onSubmit={handlesubmit}>
      <h4>Number of Tasks</h4>
      <input
        name="items"
        type="number"
        placeholder="1 to 5"
        min={1}
        onChange={handleTaskNumber}
      ></input>
      <h4>View finished Tasks</h4>
      <input name="view" type="checkbox" onChange={handleView}></input>
      <div style={{ marginTop: "2rem" }}></div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default OptionForm;
