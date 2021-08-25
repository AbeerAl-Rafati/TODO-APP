import React, { useState } from "react";

export const ListContext = React.createContext();

export default function List(props) {
  const [list, setList] = useState([]);

  function addItem(task) {
    task.Id = Math.random();
    task.complete = false;
    setList([...list, task]);
  }
  function toggleComplete(id) {
    let task = list.filter((i) => i.Id === id)[0] || {};
    if (task.Id) {
      task.complete = !task.complete;
      let modified = list.map((listTask) =>
        listTask.Id === task.Id ? task : listTask
      );
      setList(modified);
    }
  }

  return (
    <ListContext.Provider value={{ list, addItem, toggleComplete }}>
      {props.children}
    </ListContext.Provider>
  );
}
