import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import style from './todo.module.css';


const Todo = (props) => {
  const { title, desc, id } = props.todo;

  const handleClick = () => {
    alert("clicked");
  }

  return (
    <article key={id} className={style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>

      <div>
        <button className={style.btn} onClick={handleClick}>
           <FaTrashAlt />
        </button>
      </div>
    </article>
  );
};

export default Todo;



