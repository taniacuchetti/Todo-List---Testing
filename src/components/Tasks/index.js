import Task from '../Task'

function Tasks({tasks}) {
  
  return (
    <ul>
      {tasks.map((task, key) => {
        return(
         <Task value={task} key={key}/>
        )
      })}
    </ul>
  )
}

export default Tasks