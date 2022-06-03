import React, { useState } from "react";

// function ToDoItem(props) {
//   // const [isDone, setIsDone] = useState(false);

//   // function markDone() {
//   //   setIsDone(prevValue => !prevValue);
//   // }

//   function markDone() {
//     props.onChange(props.id);
//   }

//   return (
//     <li
//       onClick={markDone}
//       // style={isDone ? { textDecoration: "line-through" } : null}
//     >
//       {props.text}
//     </li>
//   );
// }

// export default ToDoItem;

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);
  // const [todos, setTodos] = useState([]);

  const handleDelete = () => {
    props.onChange(props.id);
  };

  return (
    <div className="div-li">
      <li
        // style={isDone ? { textDecoration: "line-through" } : null}
        onClick={handleDelete}
      >
        {props.text}
      </li>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ToDoItem;
