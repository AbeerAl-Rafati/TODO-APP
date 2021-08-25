import React, {useState, useEffect, createContext } from 'react'
import axios  from 'axios'
import { v4 as uuid } from 'uuid';
import { AuthContext } from './auth';

export const OptionsContext = createContext();

function OptionsProvider(props){
  state = {
  listNum = 5,
  showCompleted : true
}
const [list, setList] = useState([])
const [listNum, setListNum] = useState()
const [values, setValues] = useState({})






  render() {
    return (
     <OptionsContext.Provider value={{...this.state}}>
       {this.props.children}
     </OptionsContext.Provider>
    )
  }
}

export default OptionsProvider



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
