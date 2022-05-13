import { useState, FormEvent, useEffect } from "react"

import "./Form.css"

import { Task } from "../interface/Tasks.interface"
import { Button } from "./elementos/Button"
import { Input } from "./elementos/Input"

interface Props {
    taskToUpdate?: Task
    addNewTask: (task: Task) => void
    editTask: (id:number, task: Task) => void,
}

const initalState = {
    id: 0,
    title: "",
    description: ""
}

export const Form = (
    {
        taskToUpdate,
        addNewTask,
        editTask
    }: Props) => {
    const [task, setTask] = useState(
        taskToUpdate ? taskToUpdate : initalState
    )
     const [isEditing, setIsEditing] = useState(
        taskToUpdate ? true : false
    )

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget
        setTask({
            ...task,
            [name]: value
        })

    }

    const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addNewTask(task)
        setTask(initalState)
    }

    const handleEditTask = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        editTask(task.id|| 0, task)
        setTask(initalState)
        setIsEditing(false)
    }

    // cuando taskToUpdate cambie se ejecuta el setTask
    useEffect(() => {
        if (taskToUpdate && taskToUpdate?.id !== 0) {
            setTask(taskToUpdate)
            setIsEditing(true)
        } else {
            setIsEditing(false)
        }
    }, [taskToUpdate])


    return (
        <form onSubmit={
            isEditing ? handleEditTask : handleNewTask
        }>
            <Input
                name ="title"
                value={task.title}
                onChange={handleInputChange}
            />
            <Input
                name="description"
                value={task.description}
                onChange={handleInputChange}
            />
            <Button
                text={isEditing ? "Edit" : "Save"}
            />
        </form>
    )
}