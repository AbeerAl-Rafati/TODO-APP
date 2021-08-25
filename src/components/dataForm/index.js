// import { Button } from "@blueprintjs/core";
// import "./dataForm.css";

import { ListContext } from "../../context/list";
import { useState, useContext } from "react";

function DataForm(props) {
  const listContext = useContext(ListContext);

  const [state, setState] = useState({ item: {} });
  function handleInput(e) {
    setState({ item: { ...state.item, [e.target.name]: e.target.value } });
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.target.reset();
    listContext.addItem(state.item);
    const item = {};
    setState({ item });
  }

  return (
    <div>
      <h3>Add TODO task</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <h5>Task</h5>
          <input name="text" placeholder="Add task" onChange={handleInput} />
        </label>
        <label>
          <h5>Difficulty </h5>
          <input
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInput}
          />
        </label>
        <label>
          <h5>Assigned To</h5>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInput}
          />
        </label>
        <div style={{ marginTop: "2rem" }}></div>
        <button>Add Task</button>
      </form>
    </div>
  );
}

export default DataForm;

//-----------------------------------------------------------//
// import React, { Component } from "react";

// export class DataForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       handleChange: props.handleChange,
//       handleSubmit: props.handleSubmit,
//     };
//   }
//   render() {
//     return (
//       <form onSubmit={this.state.handleSubmit}>
//         <h2>Add To Do Item</h2>

//         <label>
//           <span>To Do Item</span>
//           <input
//             onChange={this.state.handleChange}
//             name="text"
//             type="text"
//             placeholder="Item Details"
//           />
//         </label>

//         <label>
//           <span>Assigned To</span>
//           <input
//             onChange={this.state.handleChange}
//             name="assignee"
//             type="text"
//             placeholder="Assignee Name"
//           />
//         </label>

//         <label>
//           <span>Difficulty</span>
//           <input
//             onChange={this.state.handleChange}
//             defaultValue={3}
//             type="range"
//             min={1}
//             max={5}
//             name="difficulty"
//           />
//         </label>

//         <label>
//           <button type="submit">Add Item</button>
//         </label>
//       </form>
//     );
//   }
// }

// export default DataForm;
