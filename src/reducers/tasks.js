import * as type from './../constants/ActionTypes';

let tasks = JSON.parse(localStorage.getItem('tasks'));
var initialState = tasks !== null ? tasks : [];
console.log(tasks)
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.ADD_TASK:

            state.push(action.data);
            console.log(tasks);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case type.UPDATE_TASK:

            let indexUpdate;
            let idUpdate = action.data.id;
            state.map((task, index) => {
                if (task.id === idUpdate) {
                    indexUpdate = index;
                }
            });
            //console.log(indexUpdate);
            //dang edit ma bi xoa thi ko tim dc index, bao loi ko ton tai doi tuong de cap nhat

            state[indexUpdate] = action.data;
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case type.DELETE_TASK:
            let indexDelete;
            let idDelete = action.id;
            state.map((task, index) => {
                if (task.id === idDelete) {
                    indexDelete = index;
                }
            });
            //console.log(indexDelete);
            state.splice(indexDelete, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state;
    }
}
export default myReducer;