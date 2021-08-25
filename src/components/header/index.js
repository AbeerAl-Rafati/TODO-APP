import Login from "../auth/login";


function Header(props) {
  return (
    <header>
      <Login/>
      {/* <h1>To Do List: {props.incomplete} items pending</h1> */}
    </header>
  );
}

export default Header;

// import React, { Component } from 'react'

// export class Header extends Component {

//   constructor(props) {
//     super(props)

//     this.state ={
//       incomplete : props.incomplete
//     }
//   }
//   render() {
//     return (
//       <header>
//       <h1>To Do List: {this.state.incomplete} items pending</h1>
//     </header>
//     )
//   }
// }

// export default Header
