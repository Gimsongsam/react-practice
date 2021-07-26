import React, {useCallback} from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => { // props.todos의 값을 받아온다.
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return(
                <TodoListItem
                    todo={todo}
                    key={key}
                    onRemove={onRemove}
                    onToggle={onToggle}
                    style={style}
                >
                {console.log(index)}
                {console.log(style)}
                </TodoListItem>
            );
        },
        [onRemove, onToggle, todos],
    );
    return (
        <List
            className="TodoList"
            width={512}  // 전체 크기
            height={513} // 전체 높이
            rowCount={todos.length} // 항목 개수
            rowHeight={57}  // 항목 높이
            rowRenderer={rowRenderer} // 항목을 렌더링할 때 쓰는 함수
            list={todos} // 배열
            style={{outline: 'none'}} // List에 기본 적용되는 outline 스타일 제거
        />
    );

    // return (
    //     <div className="TodoList">
    //         {/* {<TodoListItem todo={todos[0]} key={todos[0].id} />} */} {/* todos 배열의 모든 값을 받아오기 위해선 반복문으로 받아와야한다. */}
    //         {todos.map(todo => (
    //             <TodoListItem
    //                 todo={todo}
    //                 key={todo.id}
    //                 onRemove={onRemove}
    //                 onToggle={onToggle}
    //             />
    //         ))}
    //     </div> // todos의 모든 배열을 순회하는 map을 사용하여 TodoListItem에게 값을 전달
    // );
};

export default React.memo(TodoList);