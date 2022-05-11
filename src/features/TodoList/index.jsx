import React, { useState } from 'react';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoListFeature.propTypes = {

};

function TodoListFeature(props) {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Chúng tôi là Siêu Nhân', status: 'new' },
        { id: 2, title: 'Siêu Nhân Điện Quang', status: 'completed' },
        { id: 3, title: 'Điện Quang là bóng đèn', status: 'new' },
    ]);

    const [filteredStatus, setFilteredStatus] = useState('all');

    function handleDeleteOnClick(todo) {
        const index = todos.findIndex(x => x.id === todo.id);
        if (index < 0) return;
        console.log(index);

        const newListTodo = [...todos];
        newListTodo.splice(index, 1);
        setTodos(newListTodo);
    }

    function handleChangeStatusOnClick(todo, idx) {
        const newTodoList = [...todos];

        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        }
        setTodos(newTodoList);
    }

    function handleTodoFormSubmit(formValues) {
        console.log('Form Submit: ', formValues);
        const newTodo = {
            id: todos.length + 5,
            ...formValues,
            status: 'new',
        }
        const newTodoList = [...todos];
        newTodoList.push(newTodo);
        setTodos(newTodoList);
        console.log(newTodo);
    }

    function handleFilterClick(status) {
        setFilteredStatus(status);
        const renderedTodoList = todos.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
        console.log(renderedTodoList);
        //setTodos(renderedTodoList);
    }


    return (
        <div>
            {/* <TodoList todos={todos} onTodoClick={handleDeleteOnClick} /> */}
            <TodoList todos={todos} onTodoClick={handleChangeStatusOnClick} />
            <TodoFilter onFilterClick={handleFilterClick} />
            <TodoForm onSubmit={handleTodoFormSubmit} />
        </div>
    );
}

export default TodoListFeature;