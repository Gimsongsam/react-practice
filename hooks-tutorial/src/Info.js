import React, {useState, useEffect } from 'react';
import useInputs from './useInputs';

const Info = () => {
    const [ state, onChange] = useInputs({
        name: '',
        nickname: ''
    });
    const { name, nickname } = state;


    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //         console.log('unmount');
    //     };
    // }, []);

    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };


    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
