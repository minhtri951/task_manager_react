import * as type from '../constants/ActionTypes';

var initialState=false;

var myReducer=(state= initialState, action)=>{
    switch(action.type){
        case type.OPEN_FORM:
            return true; 
            
        case type.CLOSE_FORM:
            return false;

        default: 
            return state;
    }
}
export default myReducer;