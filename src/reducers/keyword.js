import * as type from './../constants/ActionTypes';

var initialState='';

var myReducer=(state= initialState, action)=>{
    switch(action.type){
        case type.SEARCH:
            state=action.keyword;
            return state; 
        default: 
            return state;
    }
}
export default myReducer;