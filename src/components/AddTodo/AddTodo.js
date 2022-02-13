import React, {useState} from 'react'
import './AddTodo.css'

const AddTodo = ({todo, setTodo}) => {

    const [value, setValue] = useState('')

    const saveTodo = () => {
        if(value === ''){
            return
        }else{
            setTodo([...todo,{
                id: Math.floor(Math.random() * 1000),
                title: value,
                status: true
            }])
            setValue('')
        }
    }

    const heandleEnter = e => {
        if(e.key === 'Enter') saveTodo()
    }

    return(
            <div className ="input-group mb-3">
                <input type="text" 
                        className ="form-control" 
                        placeholder="Введите задачу" 
                        aria-label="Recipient's username" 
                        aria-describedby="basic-addon2"
                        value={value}
                        onChange = { e => setValue(e.target.value)}
                        onKeyPress = {heandleEnter}
                />
                <div className ="input-group-append">
                    <button className="btn btn-outline-secondary btn-save" 
                            type="button"
                            onClick={saveTodo}>Добавить</button>
                </div>
            </div>
    )
}

export default AddTodo