import React, {Component, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => (
    <tr>
        <td>{props.todo_description}</td>
        <td>{props.todo_responsible}</td>
        <td>{props.todo_priority}</td>
        <td>
            <Link to={"/edit/" + props.todo._id}>Edit</Link>
        </td>
    </tr>
)

function Todolist(props) {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                setTodos(response.data);
                console.log('mounted!');
            })
            .catch(function(error){
                console.log(error);
            })
    },[])

    const todoList = (todos) => {
        todos.map(function(currentTodo, i){
            return <Todo todo = {currentTodo} key={i} />;
        });
    }

    return(
        <div>
            <h3>Todos List</h3>
            <table className="table table-stripped" style={{marginTop: 20}}>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { todos && todoList(todos) }
                </tbody>
            </table>
        </div>
    )
}

export default Todolist;