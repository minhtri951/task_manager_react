import * as type from './../constants/ActionTypes';

var initialState={
    by: 'name',
    value: 1
};

var myReducer=(state= initialState, action)=>{
    switch(action.type){
        case type.SORT:
            state=action.sort;
            return state; 
        default: 
            return state;
    }
}
export default myReducer;