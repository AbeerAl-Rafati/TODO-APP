import Login from "../auth/login";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <NavLink to="/">
        HOME
        <Login />
      </NavLink>
      <NavLink to="/option">option</NavLink>

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
