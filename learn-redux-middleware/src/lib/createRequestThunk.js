import { startLoading, finishLoading } from "../modules/loading";

export default function createRequestThunk(type, request){
    // 성공 및 실패 액션 타입을 정의합니다.
    const SUCCESS = `${type}_SUCCESS`;
    const FAILUSE = `${type}_FAILUSE`;
    return params => async dispatch => {
        console.log(params)
        dispatch({type}); // 시작됨
        dispatch(startLoading(type));
        try{
            const response = await request(params);
            dispatch({
                type: SUCCESS,
                payload: response.data
            }); // 성공
            dispatch(finishLoading(type));
        }
        catch(e){
            dispatch({
                type: FAILUSE,
                payload: e,
                error: true
            }); // 에러 발생
            dispatch(startLoading(type));
            throw e;
        }

    };
}

// 사용법: createRequestThunk('GET_USERS', api.getUsers);