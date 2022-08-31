//this file will be our endpoints
import axios from 'axios'

export const getTodos = () => {
    const URL = 'https://todoapidcc.herokuapp.com/todos'
    const response = axios.get(URL)
    console.log(response)
    return response
}

export const getTodo = (id) => {
    const URL = `https://todoapidcc.herokuapp.com/todos/${id}`
    const response = axios.get(URL)
    return response      
}

export const deleteTodo = (id) => {
    const URL = `https://todoapidcc.herokuapp.com/todos/${id}`
    const response = axios.delete(URL)
    return response
}

export const editTodo = (id, updatedTodo) => {
    const URL = `https://todoapidcc.herokuapp.com/todos/${id}`
    const response = axios.put(URL, updatedTodo)
    return response
}

export const createTodo = (todo) => {
    const URL = 'https://todoapidcc.herokuapp.com/todos'
    const response = axios.post(URL, todo)
    return response
}