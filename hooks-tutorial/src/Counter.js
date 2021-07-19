import React, {useReducer} from 'react';

function reducer(state, action){
    // action.type에 따라 다른 작업 수행
    switch (action.type){
        case 'INCREMENT':
            return {value: state.value + 1};
    }
}