import React, {useState, useEffect} from "react";

import './TodoList.css'

const TodoList = ({todo, setTodo}) => {

    const [edit, setEdit] = useState(null)
    const [value, setValue] =useState('')

    const saveTodo = (id) =>{
        let newTodo = [...todo].map(item => {
            if(item.id === id){
               item.title = value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    const removeTodo = (id) => {
        let newTodo = [...todo].filter(item => item.id !== id)
        setTodo(newTodo)
    }

    const todoEdit = (id, title) => {
        setEdit(id)
        setValue(title)
    }

    useEffect( () => {
        let raw = localStorage.getItem('value')
        raw = JSON.parse(raw)   
        setTodo(raw)
       }, [])
   
       useEffect( () => {
           localStorage.setItem('value', JSON.stringify(todo))
       }, [todo])

    return (
        <div className="wrapper">
        {
            todo.map(item => {
               return (
                   (edit === item.id) 
                   ? 
                        <div>
                            <input className="inputText" type="text" value={value} onChange = { e => setValue(e.target.value)}/>
                            <button className="btn btn-secondary but" onClick={() => saveTodo(item.id)}>Сохранить!</button>
                        </div>
                        :
                    <div key={item.id}>
                        <input className="input" type="checkbox" name="" id={item.id} />
                        <label htmlFor={item.id}>{item.title}</label>
                        <button className="btn btn-success but" onClick={()=>todoEdit(item.id, item.title)}>Изменить</button>
                        <button className="btn btn-primary but" onClick={()=>removeTodo(item.id)}>Удалить</button>
                    </div>) 
            })
        }
        </div>
    )
}

export default TodoList