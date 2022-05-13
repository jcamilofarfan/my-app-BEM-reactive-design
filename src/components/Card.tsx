
import "./Card.css";
import { Task } from "../interface/Tasks.interface";
import { Text } from "./elementos/Text";
import { Button } from "./elementos/Button";

interface Props {
    task:Task
    deleteTask: (id: number) => void
    completeTask: (id: number) => void
    editTask: (id:number, task: Task) => void
}

export const Card = (
    {
        task,
        deleteTask,
        completeTask,
        editTask
    }:Props
) => {
    return (
        <div className="card">
            <div className={`card__content card__status--${task.isCompleted ? "completed" : "pending"}`}>
                <div className="car__header">
                    <Button
                        text="Complete"
                        action={() => completeTask(task.id||0)}
                        active={task.isCompleted}
                    />
                    <Text
                        text={`${task.id ? task.id : ""}`}
                    />
                    <Text
                        text={task.title}
                        size="title"
                    />
                </div>
                <Text
                    text={task.description}
                />
                <div className="card__actions">
                    <div className="card__actions--edit">
                        <Button
                            text="Edit"
                            action= {() => { editTask(task.id||0, task) }}
                            active={task.isCompleted}
                        />
                    </div>
                    <div className="card__actions--delete">
                        <Button
                            text="Delete"
                            action= {() => deleteTask(task.id||0)}
                            active={task.isCompleted}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}