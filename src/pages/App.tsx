import { useState } from "react";
import { CardList } from "../components/CardList";
import { Form } from "../components/Form";
import { Task } from "../interface/Tasks.interface";
import "./App.css"

interface Props {
  title?: string;
}

function App(
  {title}: Props
) {
  const [Tasks, setTask] = useState<Task[]> ([]);

  const [TaskToUpdate, setTaskToUpdate] = useState<Task>();

  const getCurrentTimestamp = (): number =>new Date().getTime();

  const addNewTask = (task: Task) => {
    setTask([...Tasks, {...task, id: getCurrentTimestamp(), isCompleted: false}]);
  }

  const deleteTask = (id: number) => {
    const newTasks = Tasks.filter((task) => task.id !== id);
    setTask(newTasks);
  }

  const completeTask = (id: number) => {
    const newTasks = Tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    }
    );
    setTask(newTasks);
  }

  const editTask = (id: number, taskUpdated: Task) => {
    const newTasks = Tasks.map((task) => {
      if (task.id === id) {
        task = taskUpdated;
      }
      return task;
    }
    );
    setTask(newTasks);
  }

  const assignDataToForm = (taskToUpdate: Task) => {
    setTaskToUpdate(taskToUpdate);
  }


  return (
    <div className="App">
      <h1 className= "App__title">
        {title}
      </h1>
      <Form
        taskToUpdate={TaskToUpdate}
        addNewTask={addNewTask}
        editTask={editTask}
      />
      <CardList
        task={Tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        assignDataToForm={assignDataToForm}
      />
    </div>
  );
}

export default App;
