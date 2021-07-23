import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = props => { // 파라미터를 이용해 컴포넌트 태그 사이의 내용을 받아오기
    return (
        <div className="TodoTemplate">
            <div className="app-title">일정 관리</div>
            <div className="content">{props.children}</div>
            {console.log(props.children)} {/* Todo App을 만들자! */}
        </div>
        
    );
};

export default TodoTemplate;