import { useNavigate} from 'react-router-dom'
import {createTodo} from '../services/todos-api'

const Create = () => {
    const nav = useNavigate();

    const createTheTodo = (e) => {
        const todo = {description: e.target.description.value, complete: false}
        createTodo(todo)
        nav('/')
    }

    return (
        <div>
            <h3>New Todo:</h3>
            <form onSubmit={createTheTodo}>
                <input type='text' name='description' placeholder='Description' id='dsc' />
                <input type='submit' />
            </form>
        </div>
    )
}

export default Create;