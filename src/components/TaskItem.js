import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actions from './../actions/index.js';
class TaskItem extends Component {

    showStatusElement(){
        return (
            <span
                className={ this.props.task.status ? 'label label-danger' : 'label label-info' }
                onClick={ this.onUpdateStatus }
            >{ this.props.task.status === true ? 'In Process' : 'Done' }</span>
        );
    }


    render() {
        console.log('render taskitem');
        var {task, index}=this.props;
        return (
            <tr>
                <td>{ index }</td>
                <td>{ task.name }</td>
                <td className="text-center">
                    { this.showStatusElement() }
                    
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning" 
                             onClick={()=>this.props.passIdEdit(task.id)}
                    >
                        <span className="fa fa-pencil mr-5"></span>Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger"
                            onClick={()=>this.props.deleteTask(task.id)}
                    >
                        <span className="fa fa-trash mr-5"></span>Remove
                    </button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps=(state)=>{
    return {
        isDisplay: state.isDisplayForm
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        deleteTask: (id)=>{
            dispatch(actions.deleteTask(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(TaskItem);
