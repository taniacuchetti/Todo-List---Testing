import Task from '../Task'

function Tasks({tasks}) {
  console.log("esto es tasksks",tasks);
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