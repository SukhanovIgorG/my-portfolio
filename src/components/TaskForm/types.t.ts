import type { Task } from "../../types"

export interface TaskFormProps {
    task?: Task
    onSave: () => void | undefined
}