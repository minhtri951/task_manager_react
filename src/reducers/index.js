import {combineReducers} from 'redux';
import tasks from './tasks.js';
import keyword from './keyword.js';
import sort from './sort.js';
import isDisplayForm from './isDisplayForm.js'
import taskEditing from './taskEditing.js';
const myReducer = combineReducers({
    tasks,
    keyword,
    sort,
    isDisplayForm,
    taskEditing
    
});

export default myReducer;