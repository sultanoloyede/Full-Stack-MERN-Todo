import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

function EditTodo(props){

    const [description, setDescription] = useState('');
    const [responsible, setResponsible] = useState('');
    const [priority, setPriority] = useState('');
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:4000/todos/'+props.match.params.id)
            .then(response => {
                setDescription(response.data.todo_description);
                setResponsible(response.data.todo_responsible);
                setPriority(response.data.todo_priority);
                setCompleted(response.data.todo_completed);
            })
            .catch(function(error) {
                console.log(error)
            })
    },[])

    const onChangeTodoDescription = (e) => {
        setDescription(e.target.value);
    }

    const onChangeTodoResponsible = (e) => {
        setResponsible(e.target.value);
    }

    const onChangeTodoPriority = (e) => {
        setPriority(e.target.value);
    }

    const onChangeTodoCompleted = (e) => {
        setCompleted(!completed);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${description}`);
        console.log(`Todo Responsible: ${responsible}`);
        console.log(`Todo Priority: ${priority}`);
        console.log(`Todo Completed: ${completed}`);

        const newTodo = {
            "todo_description": description,
            "todo_responsible": responsible,
            "todo_priority": priority,
            "todo_completed": completed
        }

        axios.post('http://localhost:4000/todos/update/'+props.match.params.id, newTodo)
            .then(res => console.log(res.data));

        props.history.push('/');
    }
        return (
            <div>
                <h3>Update Todo</h3>
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
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={onChangeTodoCompleted}
                                    checked={completed}
                                    value={completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" value="Update Todo" className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
}

export default EditTodo;