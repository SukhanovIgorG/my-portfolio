import { useState } from 'react';
import { TaskForm } from '../';
import taskStore from '../../stores/taskStore/taskStore';
import type { Task } from '../../types';

import './TaskItem.css'

export const TaskItem = (props: Task) => {
    const { id, title, description, completed } = props;
    const { toggleComplete } = taskStore
    const [edit, setEdit] = useState(false);

    function handleChange() {
        toggleComplete(id);
    }

    // по клику на одно из полей запускается окно редактора

    return (
        <>
            {
                edit ?
                    <TaskForm task={props} onSave={() => setEdit(false)} /> :
                    <div className='card' >
                        <div className='container' >
                            <h3
                                className={`${completed ? 'title_through ' : ""}title`}
                                onClick={() => setEdit(true)}
                            >
                                {title}
                            </h3>
                            <span
                                className='description'
                                onClick={() => setEdit(true)}
                            >{description}</span>
                        </div>
                            <input
                                className='completed'
                                type="checkbox"
                                name="completed"
                                id="completed"
                                onChange={handleChange}
                                checked={completed}
                            />
                    </div>
            }
        </>
    )
}