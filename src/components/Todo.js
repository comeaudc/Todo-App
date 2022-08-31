import { useState, useEffect } from "react"
import {getTodo, deleteTodo} from '../services/todos-api'
import {useNavigate, useParams} from 'react-router-dom'

function Todo() {
    const nav = useNavigate()
    const {id} = useParams()
    const [todo, setTodo] = useState({})

    useEffect(() => {
        getTodo(id)
        .then(res => setTodo(res.data))
    })

    const deleteTheTodo = () => {
        deleteTodo(id)
        nav('/')
    }
    return (
        <div>
            <h1>Todo:</h1>
            <h3>{todo.description}</h3>
            Completed: <input type='checkbox' checked={todo.complete}/>
            <br/>
            <button onClick={()=> {nav(`./edit`)}}>Edit</button>
            <button onClick={deleteTheTodo}>Delete</button>
            <br/>
            <button onClick={() => nav('/')}>View List</button>
        </div>
    )
}

export default Todo;