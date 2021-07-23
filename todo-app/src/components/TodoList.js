import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos}) => { // props.todos의 값을 받아온다.
    return (
        <div className="TodoList">
            {/* {<TodoListItem todo={todos[0]} key={todos[0].id} />} */} {/* todos 배열의 모든 값을 받아오기 위해선 반복문으로 받아와야한다. */}
            {todos.map(todo => {
                return <TodoListItem todo={todo} key={todo.id}> {console.log(todo)} </TodoListItem>
            })}
        </div> // todos의 모든 배열을 순회하는 map을 사용하여 TodoListItem에게 값을 전달
    );
};

export default TodoList;