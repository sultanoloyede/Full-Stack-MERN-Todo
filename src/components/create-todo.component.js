import React, { useState } from 'react';
import axios from 'axios';

function CreateTodo(props){

    const [description,setDescription] = useState('');
    const [responsible,setResponsible] = useState('');
    const [priority,setPriority] = useState('');
    const [completed,setCompleted] = useState(false);

    const onChangeTodoDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeTodoResponsible = (e) => {
        setResponsible(e.target.value);
    }

    const onChangeTodoPriority = (e) => {
        setPriority(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${description}`);
        console.log(`Todo Responsible: ${responsible}`);
        console.log(`Todo Priority: ${priority}`);
        console.log(`Todo Completed: ${completed}`);

        const newTodo = {
            description: description,
            responsible: responsible,
            priority: priority,
            completed: completed
        }

        axios.post('http://localhost:4000/todo/add', newTodo)
            .then(res => console.log(res.data));

        setDescription('');
        setResponsible('');
        setPriority('');
        setCompleted(false);

    }

        return (
            <div style={{marginTop: 20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={description}
                                onChange={onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={responsible}
                                onChange={onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={priority==='Low'}
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={priority==='Medium'}
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={priority==='High'}
                                    onChange={onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
}

export default CreateTodo;

/*import React, { useState } from 'react';

function Createtodo() {
    const[form, setValues] = useState({
        todo_description: '',
        todo_responsible: '',
        todo_priority: '',
        todo_completed: false
    })

    const onChangeTodoDescription = e => {
        setValues({
            ...form,
            todo_description: e.todo_description
        });
    }

    const onChangeTodoResponsible = e => {
        setValues({
            todo_responsible: e
        })
    }

    const onChangeTodoPriority = e => {
        setValues({
            todo_priority: e
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        console.log('Form submitted');
        console.log('Todo Description: ${this.state.todo_description}');
        console.log('Todo Responsible: ${this.state.todo_responsible}');
        console.log('Todo Priority: ${this.state.todo_priority}');
        console.log('Todo Completed: ${this.state.todo_completed}');

        setValues({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    return(
        <div style={{marginTop: 20}}>
            <h3>Create New Todo</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text"
                           className="form-control"
                           value={form.todo_description}
                           onChange = {onChangeTodoDescription()}
                           />
                </div>
                <div className="form-group">
                    <label>Responsible:</label>
                    <input type="text"
                           className="form-control"
                           value={setValues}
                           onChange = {onChangeTodoResponsible}
                           />
                </div>
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityLow"
                            value="Low"
                            checked={onChangeTodoPriority==='Low'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Low</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityMedium"
                            value="Medium"
                            checked={onChangeTodoPriority==='Medium'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">Medium</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input"
                            type="radio"
                            name="priorityOptions"
                            id="priorityHigh"
                            value="High"
                            checked={onChangeTodoPriority==='High'}
                            onChange={onChangeTodoPriority}
                        />
                        <label className="form-check-label">High</label>
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Todo" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default Createtodo;
*/