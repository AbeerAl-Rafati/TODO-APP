import React, { useEffect, useState } from "react";
import useForm from "../../hooks/form.js";
import List from "../list";
import Header from "../header";
import DataForm from "../dataForm";
import { v4 as uuid } from "uuid";
// import './todo.css'
const ToDo = () => {
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter((item) => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <Header incomplete={incomplete} />
      <section className='todo'>
        <div className='form'>
          <DataForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
        <div className='list'>
          <List toggleComplete={toggleComplete} list={list} />
        </div>
      </section>
    </>
  );
};

export default ToDo;
