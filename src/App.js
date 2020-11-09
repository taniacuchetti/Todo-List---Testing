import { useState } from 'react'
import Input from './components/Input'
import Button from './components/Button'
import Tasks from './components/Tasks'
import './App.css';

function App() {

  const [value, setValue] = useState('')
  const [tasks, setTasks] = useState([])
  
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleClick(){
    if (value != "") {
      setTasks((prevState) => [...prevState,value]);
      setValue('')
    }
  }
  return (
    <>
    <div>
    <Input onChange={handleChange} value={value}/>
    <Button onClick={handleClick} label="Agregar tarea"/>
    </div>
    <div>
      <Tasks tasks={tasks} />
    </div>
    </>
  );
}

export default App;
