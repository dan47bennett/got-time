import React, { useState } from 'react';

const CreateTask = () => {
    let [task, takeTaskInput] = useState('');

    return (
        <form>
            <div>
                <label>Create Task</label>
                <input type='text' value={task} onChange={(event) => takeTaskInput(event.target.value)}/>
            </div>
        </form>
    )
}

export default CreateTask;