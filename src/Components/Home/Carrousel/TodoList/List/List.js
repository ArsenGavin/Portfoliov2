import TaskCard from './TaskCard/TaskCard';
import './List.css';

function List({ taskList, deleteTask, checkTask }) {
  return (
    <div className="toDoList">
      <ul className="listTask">
        {taskList.map((data, index) => {
          return (
            <TaskCard
              data={data}
              key={index}
              deleteTask={deleteTask}
              checkTask={checkTask}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default List;
