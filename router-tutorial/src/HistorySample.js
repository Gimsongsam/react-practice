import React,{useEffect} from 'react';

const HistorySample = ({history,getBlockObj}) => {
    
    const handleGoBack = () => {
        history.goBack()
        // console.log(history)
    }

    const handleGoHome = () => {
        history.push('/')
    }

    useEffect(() => {
        console.log("Did mount");
        console.log(history);
        const unblock = history.block('정말 떠나실 건가요?');
        getBlockObj(unblock);
        
    }, [])

    return(
        <div>
            <button onClick={handleGoBack}>뒤로</button>
            <button onClick={handleGoHome}>홈으로</button>
        </div>
    )
    


}

export default HistorySample;
