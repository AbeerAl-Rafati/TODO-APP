import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../../context/list";
import { OptionsContext } from "../../context/options";

function List(props) {
  const listContext = useContext(ListContext);
  const optionsContext = useContext(OptionsContext);

  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);

  
  useEffect(() => {
    if (optionsContext.view) {
      setList(listContext.list);
    } else {
      let value = [];
      value = listContext.list.filter((item) => {
        if (!item.complete) {
          return item;
        }
      });
      setList(value);
    }
  }, [listContext.list]);
  
  useEffect(() => {
    if (optionsContext.view) {
      setList(listContext.list);
    } else {
      let value = [];
      value = listContext.list.filter((task) => {
        if (!task.complete) {
          return task;
        }
      });
      setList(value);
    }
  }, []);


  
  function nextPage() {
    optionsContext.nextpage();
    setPage(page + 1);
  }

  function prePage() {
    optionsContext.previouspage();
    setPage(page - 1);
  }

  function modifyList(id) {
    listContext.toggleComplete(id);
    if (optionsContext.view) {
      setList(listContext.list);
    } else {
      let value = [];
      value = listContext.list.filter((task) => {
        if (!task.complete) {
          return task;
        }
      });
      setList(value);
    }
  }

  return (
    <div>
      {list.map((item, id) => {
        if (id >= optionsContext.first && id <= optionsContext.end) {
          return (
            <li
              className={`complete-${item.complete.toString()}`}
              key={item.Id}
            >
              <span onClick={() => modifyList(item.Id)}>{item.text}</span>
            </li>
          );
        }
      })}
      {page > 0 && <button onClick={prePage}>back page</button>}
      {!(
        page ===
        Math.ceil(listContext.list.length /optionsContext.numberOfTasks) - 1
      ) && <button onClick={nextPage}>next page</button>}
    </div>
  );
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
