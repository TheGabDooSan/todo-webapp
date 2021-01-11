import React, { Fragment } from 'react'

import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

const Todos = () => {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default Todos;