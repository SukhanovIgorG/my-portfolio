import { Task } from "../../types";
import { makeAutoObservable } from "mobx";
import { defaultTasks } from "./constants";

class TaskStore {
    tasks: Task[] = defaultTasks

    constructor() {
        makeAutoObservable(this)
    }

    addTask = (title: string, description: string) => {
        this.tasks.unshift({
            id: this.tasks.length + 2,
            title: title,
            description: description,
            completed: false
        });
    }
    
    editTask = (id: number, title: string, description: string) => {
        this.tasks.map((item) => {
            if (item.id === id) {
                item.description = description;
                item.title = title;
            }
            return item;
        });
    }

    deleteTask = (id: number) => {
        const index = this.tasks.findIndex((item) => item.id === id);
        this.tasks.splice(index, 1);
    }

    toggleComplete = (id: number) => {
        this.tasks.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed;
            }
            return item;
        });
    }
}

export default new TaskStore()