import React, {useEffect, useState} from 'react';

import './App.css';

import Header from './components/Header/Header';
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'

function App() {
  
  const [todo, setTodo] = useState([{
    id: Math.floor(Math.random() * 1000),
    title: 'Задача номер один'
  }])
  
  return (
    <div className="App">
      <header className="App-header">
        <Header todo = {todo}/>
        <div className='wrapper'>
          <AddTodo todo = {todo} setTodo = {setTodo}/>
          <TodoList todo = {todo} setTodo = {setTodo}/>
        </div>
      </header>
    </div>
  );
}

export default App;
