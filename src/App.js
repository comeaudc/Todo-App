import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Todos from './components/Todos'
import Todo from "./components/Todo"
import Edit from './components/EditTodo'

function App() {
  return (
    <div className="App">
      <h2>ToDo List:</h2>
      <Router>
        <Routes>
          <Route path='/' element={<Todos />} />
          <Route path='/:id' element={<Todo />}/>
          <Route path='/:id/edit' element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;