import * as type from './../constants/ActionTypes';

var initialState=null;

var myReducer=(state= initialState, action)=>{
    switch(action.type){
        case type.SET_TASK_EDITING:
            state=action.data;
            return state;
        default: 
            return state;
    }
}
export default myReducer;