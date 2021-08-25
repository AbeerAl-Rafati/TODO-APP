import React, { useContext, useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import List from "../list";
import DataForm from "../dataForm";
import { v4 as uuid } from "uuid";
// import './todo.css'
import { ListContext } from "../../context/list";
import { OptionsContext } from "../../context/options";
const ToDo = (props) => {
  const listContext = useContext(ListContext);
  const optionsContext = useContext(OptionsContext);
  const [state, setState] = useState([]);

  useEffect(() => {
    let localOption = localStorage.getItem("option") === true;
    if (localOption) {
      localOption = JSON.parse(localStorage.getItem("option"));
      optionsContext.setOption(localOption.items, localOption.view);
    }
  }, []);

  return (
    <>
      <div>
        There are {listContext.list.filter((task) => !task.complete).length}
        Items To Complete
      </div>
      <section className="todo">
        <div className="form">
          <DataForm />
        </div>
        <div className="list">
          <List list={state} />
        </div>
      </section>
    </>
  );
};

export default ToDo;
