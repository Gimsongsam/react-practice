import React, {useEffect} from 'react';
import qs from 'qs';

const About = ({location, history,getBlockObj}) => {

    useEffect(() => {
        console.log("About did mount")
        
        console.log("Did mount");
        const unblock = history.block('정말 떠나실 건가요?');
        getBlockObj(unblock);
    
    }, [])

    console.log(location) // 경로의 규칙 값을 객체형태로 받아온다.
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true // 이 설정을 통해 문자열 맨 앞의 ?를 생략한다.
    });
    // location.search => "?detail=false"  // 쿼리는 문자열이다.
    console.log(query) // {detail: "true"}

    const showDetail = query.detail === 'false'; // 쿼리의 파싱 결과 값은 문자열이다.
    return(
        <div>
            <h1>소개</h1>
            <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
            {showDetail && <p>detail 값을 false로 설정하셨군요!</p>} 
            {/* showDetail의 값이 false이면 보여주지 않는다. */}
        </div>
    );
};

export default About;
