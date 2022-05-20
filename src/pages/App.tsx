import { useEffect, useState } from "react";

import { CardList } from "../components/CardList";
import { Form } from "../components/Form";
import { Task } from "../interface/Tasks.interface";
import "./App.css"

const API = 'https://fp909semm0.execute-api.us-east-1.amazonaws.com/tasks'

interface Props {
  title?: string;
}

function App(
  {title}: Props
) {
  const [Tasks, setTask] = useState ({
    data: [],
    error: '',
    loading: false
  });

  const [TaskToUpdate, setTaskToUpdate] = useState<Task>();

  const getTasks = async () => {
    const res = await fetch(API);
    const resJSON  = await res.json();
    if(resJSON ){
      setTask({
        data: resJSON,
        error: '',
        loading: false
      });

    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  const addNewTask = async (task: Task) => {
    const newTask = {
      ...task,
      done: false
    };
    let res = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(res){
      getTasks();
    }
  }

  const deleteTask = async (id: number) => {
    let res = await fetch(`${API}/${id}`, {
      method: 'DELETE'
    });
    if(res){
      getTasks();
    }
  }

  const completeTask = async (id: number) => {
    let res = await fetch(`${API}/${id}/complete`, {
      method: 'PUT'
    });
    if(res){
      getTasks();
    }
  }

  const editTask = async (id: number, taskUpdated: Task) => {
    let res = await fetch(`${API}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(taskUpdated),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if(res){
      getTasks();
    }
    
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
        task={Tasks.data}
        deleteTask={deleteTask}
        completeTask={completeTask}
        assignDataToForm={assignDataToForm}
      />
    </div>
  );
}

export default App;
