import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles); // 미리 styles에서 클래스를 받아 오도록 설정하고

const MyComponent = ({highlighted, theme}) => (
        <div className={classNames('MyComponent', {highlighted}, theme)}>
            Hello
            {console.log(classNames('MyComponent', {highlighted}, theme))}
        </div>
    );

const CSSModule2 = () => {

    // 자바스크립트 문법을 넣을 수 있다.
    // return을 써주어야 한다.

    return (<div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className="something">CSS Module!</span>
            {console.log(styles)}
        </div>
    );
};


const CSSModule = () => (
    
    // 자바스크립트 문법을 넣을 수 없다.
    // return이 포함되어 있다.

    <div className={cx('wrapper', 'inverted')}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
        {console.log(styles)}
    </div>
);

export default MyComponent;
