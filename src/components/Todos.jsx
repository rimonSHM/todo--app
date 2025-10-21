// import React from 'react'
// import Todo from './Todo';

// const Todos = (props) => {
 
//   return (
//     <section>

//       {
//         props.todos.map((todo) => <Todo todo={todo} key={todo.id} />)
//       }

//     </section>
//   )
// }
// import React from 'react';
// import Todo from './Todo';
// import style from "./todos.module.css";

// const Todos = ({ todos }) => {
//   return (
//     <section className={style.todos}>
//       {todos.length > 0 ? (
//         todos.map((todo) => (
//           <Todo key={todo.id} todo={todo.todo} />
//         ))
//       ) : (
       
//       )}
//     </section>
//   );
// };

// export default Todos;



import React from 'react';
import Todo from './Todo';
import style from "./todos.module.css";

const Todos = (props) => {
  console.log(props.todos);
  return (
    <section className={style.todos}>
      {props.todos.map((todo) => (
        <Todo todo={todo.todo} key={todo.id} />
      ))}
    </section>
  )
}

export default Todos;







