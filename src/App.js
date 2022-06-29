
import './App.css';
import Header from './Header';
import data from './data.json';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import {useState} from 'react'

function App() {
  const [ toDoList, setToDoList ] = useState(data);
  
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <Header /> 
        <ToDoForm addTask={addTask}/>
        <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      </header>
    </div>
  );
}

export default App;
