import InputFieldButton from './List/TaskCard/InputFieldButton';
import List from './List/List';
import { useState, useEffect } from 'react';
import './ToDoList.css';

function ToDoList({ todos, updateBarXp, completed }) {
  const [taskList, setTaskList] = useState(todos);

  useEffect(() => {
    updateBarXp(taskList);
    // eslint-disable-next-line
  }, [taskList]);

  //Ajout de taches dans la liste de taches et dans le localstorage
  const addTask = (taskName) => {
    let newId = taskName + Math.floor(Math.random() * (10000 - 1 + 1)) + 1 + '';
    const newTask = { name: taskName, checked: false, id: newId };
    setTaskList([newTask, ...taskList]);
    localStorage.removeItem('Todos');
    todos.unshift(newTask);
    localStorage.setItem('Todos', JSON.stringify(todos));
  };

  //MAJ des taches validé/checked dans la liste de taches et dans le localstorage
  const checkTask = (checkedTaskId) => {
    let tempTaskList = taskList;
    tempTaskList = tempTaskList.map((task) => {
      return task.id === checkedTaskId
        ? { ...task, checked: !task.checked }
        : task;
    });
    tempTaskList.sort((a, b) => (a.checked > b.checked ? 1 : -1));
    setTaskList(tempTaskList);
    localStorage.removeItem('Todos');
    let tab = taskList.map((task) =>
      task.id === checkedTaskId ? { ...task, checked: !task.checked } : task
    );
    tab.sort((a, b) => (a.checked > b.checked ? 1 : -1));
    localStorage.setItem('Todos', JSON.stringify(tab));
  };

  //Supprime la tache selectionné dans la liste de taches et dans le localstorage
  const deleteTask = (taskToDelete) => {
    setTaskList(taskList.filter((task) => task.id !== taskToDelete.id));
    let index = todos.indexOf(taskToDelete);
    todos.splice(index, 1);
    localStorage.removeItem('Todos');
    localStorage.setItem('Todos', JSON.stringify(todos));
  };

  return (
    <div className="containerTask">
      <div className="headerBox">
        <div className="titleBox">
          <h1>Daily To do</h1>
          <span className="taskCheckCount">
            {completed
              ? Math.round((completed * taskList.length) / 100) / 1
              : 0}
            /{taskList.length}
          </span>
        </div>
        <InputFieldButton addTask={addTask} />
      </div>
      <List
        className="listTask"
        taskList={taskList}
        deleteTask={deleteTask}
        checkTask={checkTask}
      />
    </div>
  );
}

export default ToDoList;
