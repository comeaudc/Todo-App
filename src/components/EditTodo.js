import { getTodo ,editTodo } from "../services/todos-api"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Edit = () => {
    const {id} = useParams()
    const nav = useNavigate()
    const [data, setData] = useState({})

    useEffect(() => {
        getTodo(id) // Get todo that matches this ID
        .then(res => setData(res.data)) //u[dating the state of todo we get back]
    }, []) //prevent a continuous loop with square brackets

    const editTheTodo = (e) => {
        e.preventDefault()

        const updatedTodo = {description: e.target.description.value, complete: e.target.complete.checked}

        editTodo(id, updatedTodo)
        nav(`/${id}`)
    }

    return (
        <div>
            <form onSubmit={editTheTodo}>
                <input type='text' name='description' defaultValue={data.description} placeholder='Description' />
                Complete: <input type='checkbox' name='complete' defaultChecked={data.complete} />
                <input type='submit' />
            </form>
            <br/>
            <button onClick={() => nav('/')}>Back To List</button>
            <button onClick={() => nav(`/${id}`)}>Back To Todo</button>
        </div>
    )
}

export default Edit;