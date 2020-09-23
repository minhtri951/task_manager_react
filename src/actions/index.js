import * as types from './../constants/ActionTypes';

export const search=(keyword)=>{
    return {
        type: types.SEARCH,
        keyword: keyword,

    }
}
export const sort=(sort)=>{
    return {
        type: types.SORT,
        sort: sort //explicit tuong minh != implicit

    }
}
export const openForm=()=>{
    return {
        type: types.OPEN_FORM,
    }
}
export const closeForm=()=>{
    return {
        type: types.CLOSE_FORM,
    }
}
export const addTask=(data)=>{
    return {
        type: types.ADD_TASK,
        data: data
    }
}
export const updateTask=(data)=>{
    return {
        type: types.UPDATE_TASK,
        data: data
    }
}
export const deleteTask=(id)=>{
    return {
        type: types.DELETE_TASK,
        id: id
    }
}
export const setTaskEditing=(data)=>{
    return {
        type: types.SET_TASK_EDITING,
        data: data
    }
}

