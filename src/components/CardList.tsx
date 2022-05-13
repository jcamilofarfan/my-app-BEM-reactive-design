import "./CardList.css";

import { Task } from "../interface/Tasks.interface"
import { Card } from "./Card"

interface Props {
    task:Task[]
    deleteTask: (id: number) => void
    completeTask: (id: number) => void
    assignDataToForm: (task: Task) => void
}
export const CardList = (
    {
        task,
        deleteTask,
        completeTask,
        assignDataToForm
    }:Props
) =>{

    const editTask = (id: number, taskUpdated: Task) => {
        assignDataToForm(taskUpdated);
    }

    return(
        <div className="card__list">
            {task.map((item,index)=>{
                return(
                    <Card
                        key={index}
                        task={item}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                        editTask={editTask}
                    />
                )
            })}
        </div>
    )
}