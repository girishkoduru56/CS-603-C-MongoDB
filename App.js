import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoView from './components/TodoListView';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  // Read all todos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/todo/');
        setTodoList(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchData();
  }, []);

  // Post a todo
  const addTodoHandler = () => {
    axios.post('http://localhost:8000/api/todo/', { title, description: desc })
      .then(res => {
        console.log('Todo added:', res.data);
        setTodoList([...todoList, res.data]); // Update the todo list after successful addition
        setTitle(''); // Clear the title input
        setDesc(''); // Clear the description input
      })
      .catch(error => {
        console.error('Error adding todo:', error);
      });
  };

  return (
    <div className="App container mt-5">
      <div className="card shadow-sm">
        <div className="card-header text-center text-white bg-dark">
          <h1 className="my-2">Expense Tracker</h1>
        </div>
        <div className="card-body">
          <h5 className="text-center mb-4">Add Your Expense</h5>
          <div className="mb-4">
            <input
              className="form-control mb-2"
              value={title}
              onChange={event => setTitle(event.target.value)}
              placeholder='Expense Title'
            />
            <input
              className="form-control mb-2"
              value={desc}
              onChange={event => setDesc(event.target.value)}
              placeholder='Cost'
            />
            <button
              className="btn btn-primary btn-block"
              onClick={addTodoHandler}
            >
              Add Expense
            </button>
          </div>
          <h5 className="text-center mb-4">Your Expenses</h5>
          <TodoView todoList={todoList} />
        </div>
        <div className="card-footer text-center text-muted">
          &copy; 2024, All rights reserved
        </div>
      </div>
    </div>
  );
}

export default App;
