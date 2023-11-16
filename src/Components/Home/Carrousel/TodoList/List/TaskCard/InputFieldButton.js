import { useState } from 'react';
import './InputFieldButton.css';

function InputFieldButton({ addTask }) {
  const [taskValue, setTaskValue] = useState('');

  const handleInputValue = (event) => {
    setTaskValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    if (taskValue.length > 0 && taskValue !== ' ') {
      addTask(taskValue.toUpperCase());
      setTaskValue('');
    } else {
      alert('Task is empty.');
    }
  };

  return (
    <form className="InputFieldBox" onSubmit={handleClick}>
      <input
        type="text"
        placeholder="TASK"
        value={taskValue}
        onChange={handleInputValue}
        maxLength="20"
      />
      <button>ADD</button>
    </form>
  );
}

export default InputFieldButton;
