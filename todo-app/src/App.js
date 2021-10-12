import React, {useReducer, useRef, useCallback} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array = [];
  for(let i=1; i<=2500; i++){
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action){   // 이전값과 액션 값 전달하기 위해 reduce 함수 사용
  switch(action.type){
    case 'INSERT': // 새로 추가
      // {type: 'INSERT', todo:{id: 1, text: 'todo', checked: false}}
      return todos.concat(action.todo);
    case 'REMOVE': // 제거
      // {type: 'REMOVE', id: 1}
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE': // 토글
      // {type: 'REMOVE', id: 1}
      return todos.map(todo =>
        todo.id === action.id ? {...todo, checked: !todo.checked} : todo,
        );
      default:
        return todos;
  }
}

const App = () => {

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  // 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501); // nextId에 {current:4} 객체를 저장

  const onInsert = useCallback(text => {
      const todo = {
        id: nextId.current, // 객체의 값을 가져오기위해 nextId.current로 참조
        text,
        checked: false,
      };
      dispatch({type: 'INSERT', todo});
      nextId.current += 1; // nextId 1씩 더하기

    },[]);

  const onRemove = useCallback(id => { // id를 파라미터로 가져오기
      dispatch({type: 'REMOVE', id})
      console.log("onRemove", onRemove)
    },[]);

  // const onRemove = useCallback(
  //   function (id) {
  //     setTodos(
  //       todos.filter(
  //         function(todo){
  //           return(todo.id !== id)
  //         }
  //       )
  //     )
  //   },[todos]);


  const onToggle = useCallback(id => { // id값을 파라미터로 받아오기
      dispatch({type: 'TOGGLE', id})
    },[]); 

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} /> {/* onInsert 함수를 props 설정 */}
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> {/* TodoList에게 props로 전달해준다 */}
      {/* {console.log(todos)} */}
      {/* {console.log(item)} */}
    </TodoTemplate>
    
  );
};

export default App;