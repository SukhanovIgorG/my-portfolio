import { useState } from "react";
import { observer } from "mobx-react-lite"
import { useTranslation } from "react-i18next";
import taskStore from "../../stores/taskStore/taskStore"
import { TaskItem } from "../";

import "./TaskList.css"

export const TaskList = observer(() => {
    const { tasks } = taskStore
    const [filter, setFilter] = useState(false)
    const tasksCopy = [...tasks]
    const taskToShow =  filter ? [...tasksCopy.filter((el) => !el.completed)] : tasks

    const { t } = useTranslation();

    return (
        <>
            <button className="button"
            onClick={()=> setFilter(prev => !prev)}>
                {t("TaskList.filterButton")} { !filter ? t("TaskList.showNotCompleted")  : t("TaskList.showAll")}
            </button>
            {taskToShow.length ?
                taskToShow.map((task) => (<TaskItem {...task} key={task.id + Math.random()} />))
            :
            <p>{t("TaskList.noTasks")}</p>}
        </>
    )
});