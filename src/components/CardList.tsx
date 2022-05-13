import "./CardList.css";

import { Task } from "../interface/Tasks.interface"
import { Card } from "./Card"
import { Text } from "./elementos/Text";

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
            {task.length === 0 ?
                <div className="card__list_message">
                    <Text 
                        text="👆🏻👆🏻 No hay tareas, añade con el formulario de arriba 👆🏻👆🏻👆🏻"
                        size="title"
                    />
                </div>
                :
                // div con el metodo map
                <div className="card_list_body">
                    {task.map((task) => (
                        <Card
                            key={task.id}
                            task={task}
                            deleteTask={deleteTask}
                            completeTask={completeTask}
                            editTask={editTask}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

        //         <Text
        //             text="No hay tareas"
        //             size="title"
        //         /> :
        //         <div className="card__list__body">
        //             task.map((task) => {
        //                 return(
        //                     <Card
        //                         key={task.id}
        //                         task={task}
        //                         deleteTask={deleteTask}
        //                         completeTask={completeTask}
        //                         editTask={editTask}
        //                     />
        //                 )
        //             }
        //             )
        //         </div>
        //     }
        // </div>