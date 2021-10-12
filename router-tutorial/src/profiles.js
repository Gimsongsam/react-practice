import React,{useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = ({history,getBlockObj}) => {
    useEffect(() => {
        console.log("Did mount");
        console.log(history);
        const unblock = history.block('정말 떠나실 건가요?');
        getBlockObj && getBlockObj(unblock);
       return () => {
           console.log('unmount');
       }
      }, [])

    return (
        <div>
            <h3>사용자 목록: </h3>
            <ul>
                <li>
                    <Link to="/profiles/velopert">velopert</Link>
                </li>
                <li>
                    <Link to="/profiles/gildong">gildong</Link>
                </li>
            </ul>

            <Route 
                path="/profiles" // 사용자가 선택되어지지 않았을때의 경로
                exact // JSX에서 props를 설정할 때 값을 생략하면 자동으로 true로 설정된다.
                render={() => <div>사용자를 선택해주세요.</div>} // 보여주고 싶은 JSX를 넣을 수 있다.
            />
            {/* 사용자가 선택되었을때 선택된 프로필 보여주기 */}
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};

export default Profiles;
