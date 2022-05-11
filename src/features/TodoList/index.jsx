import React, { useState } from 'react';
import TodoList from './components/TodoList';

TodoListFeature.propTypes = {

};

function TodoListFeature(props) {
    const [todos, setTodos] = useState([
        { id: 1, title: 'Chúng tôi là Siêu Nhân', status: 'new' },
        { id: 2, title: 'Siêu Nhân Điện Quang', status: 'completed' },
        { id: 3, title: 'Điện Quang là bóng đèn', status: 'new' },
    ]);

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


    return (
        <div>
            <TodoList todos={todos} onTodoClick={handleDeleteOnClick} />
            <TodoList todos={todos} onTodoClick={handleChangeStatusOnClick} />
        </div>
    );
}

export default TodoListFeature;