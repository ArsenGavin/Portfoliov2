import { FaDeleteLeft } from 'react-icons/fa6';
import { GrValidate } from 'react-icons/gr';
import './TaskCard.css';

function TaskCard({ data, deleteTask, checkTask }) {
  return (
    <li className="task">
      <p className={data.checked === false ? 'taskText' : 'taskTextChecked'}>
        {data.name}
      </p>
      <div className="boxIcon">
        <GrValidate
          className={
            data.checked === false ? 'validateIcon' : 'validateIconChecked'
          }
          onClick={() => checkTask(data.id)}
        />
        <FaDeleteLeft className="deleteIcon" onClick={() => deleteTask(data)} />
      </div>
    </li>
  );
}

export default TaskCard;
