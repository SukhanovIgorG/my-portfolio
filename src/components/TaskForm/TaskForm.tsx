import { useState } from "react";
import { useTranslation } from "react-i18next";
import taskStore from "../../stores/taskStore/taskStore";
import type { TaskFormProps } from "./types.t";

import './TaskForm.css'
// Компонент используется для добавления или редактирования задачи
// В зависимости он наличия в props task

export const TaskForm = (props: TaskFormProps) => {
    const { task, onSave } = props;
    const { addTask, editTask, deleteTask } = taskStore;
    const [title, setTitle] = useState<string>(task ? task.title : "");
    const [description, setDescription] = useState<string>(task ? task.description : "");

    const { t } = useTranslation();

    const contWordsPerLine = 40

    function submitHandler(e: React.FormEvent) {
        e.preventDefault();
        if (task) {
            editTask(task.id, title, description)
        } else {
            addTask(title, description)
            setDescription('')
            setTitle('')
        }
    }

    function deleteHandler () {
        if (task) {
            deleteTask(task.id)
        }
    }

    return (
            <form onSubmit={submitHandler}>
                {!task && <h2>{t("TaskForm.header")}</h2>}
                <fieldset className="container">
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type='text'
                        placeholder={t("TaskForm.placeholderTitle")}
                        required
                        minLength={1}
                        maxLength={20}
                        className="input"
                    />
                    <textarea
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder={t("TaskForm.placeholderDescription")}
                        rows={description.length / contWordsPerLine} 
                        maxLength={250}
                        className="textarea"
                    />
                </fieldset>
                <div>
                {task ?
                    <div className="group_button">
                    <button
                        type='submit'
                        className="button_in_group"
                    >{t("TaskForm.saveButtonLabel")}</button>
                    <button
                        type='button'
                        className="button_in_group"
                        onClick={() => onSave()}
                    >{t("TaskForm.cancelButtonLabel")}</button>
                    <button
                        type='button'
                        className="delete_button"
                        onClick={deleteHandler}
                    >{t("TaskForm.deleteButtonLabel")}</button>
                    </div>
                : <button
                    type='submit'
                    className="button"
                >{t("TaskForm.addButtonLabel")}</button>
    }
                </div>
            </form>
    )
}