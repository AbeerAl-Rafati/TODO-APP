import React, { Component, createContext } from 'react'

export const OptionsContext = createContext();

export class OptionsProvider extends Component {
  state = {
  listNum = 5,
  showCompleted : true
}






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
