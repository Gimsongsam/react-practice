import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss'

const TodoListItem = ({todo}) => { // 파라미터로 todoList에게 값을 전달받기

    const {text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})}> {/* checked의 값이 ture일때만 클래스를 부여 */}
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} {/* checked의 값을 따라 체크박스의 모양을 부여 */}
                <div className="text">{text}</div>
            </div>
            <div className="remove">
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default TodoListItem;