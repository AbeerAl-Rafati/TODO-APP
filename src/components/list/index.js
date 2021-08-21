function List(props) {
  return props.list.map((item) => (
    <div key={item.id}>
      <p>{item.text}</p>
      <p>
        <small>Assigned to: {item.assignee}</small>
      </p>
      <p>
        <small>Difficulty: {item.difficulty}</small>
      </p>
      <div onClick={() => props.toggleComplete(item.id)}>
        Complete: {item.complete.toString()}
      </div>
      <hr />
    </div>
  ));
}

export default List;




// import React, { Component } from "react";

// export class List extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       toggleComplete: props.toggleComplete,
//       list: props.list,
//     };
//   }

//   render() {
//     return this.state.list.map((item) => (

//       <div key={item.id}>
//         <p>{item.text}</p>
//         <p>
//           <small>Assigned to: {item.assignee}</small>
//         </p>
//         <p>
//           <small>Difficulty: {item.difficulty}</small>
//         </p>
//         <div onClick={() => this.state.toggleComplete(item.id)}>
//           Complete: {item.complete.toString()}
//         </div>
//         <hr />
//       </div>
//     ));
//   }
// }

// export default List;

