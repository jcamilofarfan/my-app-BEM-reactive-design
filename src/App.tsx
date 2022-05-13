import { useState } from "react";

// interface
import { Task } from "./interface/Tasks.interface";

// component
import { CardList } from "./components/CardList";

// css
import "./App.css";
import { Form } from "./components/Form";

interface Props {
  title?: string;
}

function App(
  {title}: Props
) {
  const [Tasks, setTask] = useState<Task[]> ([
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      isCompleted: false
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      isCompleted: false
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      isCompleted: false
    },
    {
      id: 4,
      title: "Task 4",
      description: "Description 4",
      isCompleted: false
    },
    {
      id: 5,
      title: "Task 5",
      description: "Description 5",
      isCompleted: false
    },
    {
      id: 6,
      title: "Task 6",
      description: "Description 6",
      isCompleted: false
    },
    {
      id: 7,
      title: "Task 7",
      description: "Description 7",
      isCompleted: false
    }
  ]);

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
