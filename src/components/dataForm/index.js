import { Button } from "@blueprintjs/core";
// import "./dataForm.css";
function DataForm(props) {
  return (
    <div className="container">
      <form onSubmit={props.handleSubmit} className="form">
        <h2>Add To Do Item</h2>
        <div class="rows">
          <div class="column">
            <label className="theLabels">
              <span>To Do Item</span>
              <input
                onChange={props.handleChange}
                name="text"
                type="text"
                placeholder="Item Details"
              />
            </label>
          </div>
          <div class="column">
            <label className="theLabels">
              <span>Assigned To</span>
              <input
                onChange={props.handleChange}
                name="assignee"
                type="text"
                placeholder="Assignee Name"
              />
            </label>
          </div>
          <div class="column">
            <label className="theLabels">
              <span>Difficulty</span>
              <input
                onChange={props.handleChange}
                defaultValue={3}
                type="range"
                min={1}
                max={5}
                name="difficulty"
              />
            </label>
          </div>
          <div class="column">
            <label className="theLabels">
              {/* <button type="submit">Add Item</button> */}
              <Button type="submit" intent="success" text="Add Item" />
            </label>
          </div>
        </div>
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
