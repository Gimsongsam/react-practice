import React, {useEffect} from 'react';

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자'
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공'
    }
};

const Profile = ({match, history}) => { 

    useEffect(() => {
        console.log("Did mount");
        const unblock = history.block('정말 떠나실 건가요?');
        // if()
    
        
    }, [history])

    console.log(match) // match -> 현재 컴포넌트가 어떤 경로 규칙에 의해 보이는지에 대한 정보
    const {username} = match.params;
    // match.params의 키값인 {username: "gildong"}객체의 username값을 키로 설정,
    // {username: "gildong"} 객체 자체를 값으로 설정
    console.log(username) // gildong
    console.log(match.params) // {username: "gildong"}

    const profile = data[username]; // == data[gildong], 프로퍼티 값을 가져온다.
    console.log(profile)  // {name: "홍길동", description: "고전 소설 홍길동전의 주인공"}
    if (!profile){ // false 라면
        return <div>존재하지 않는 사용자입니다.</div>;
    }
    return(
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;