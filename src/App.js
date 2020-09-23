import React, { Component } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';

import { connect } from 'react-redux';
import * as actions from './actions/index.js';

class App extends Component {

    render() {
        console.log('render app');
        //   var { taskEdit, txtKeyword, sort} = this.state;
        var { isDisplayForm } = this.props;


        return (
            <div className="container">
                <div className="text-center">
                    <h1>Task Manager</h1><hr />
                </div>
                <div className="row">
                    {/* display task form */}
                    {isDisplayForm ? <div className='col-xs-4 col-sm-4 col-md-4 col-lg-4' >
                        <TaskForm /></div> : ''}

                    {/* resize main content */}
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'} >
                        <button type="button" className="btn btn-primary"
                            onClick={this.props.onclickAdd}
                        >
                            <span className="fa fa-plus mr-5"></span>Add task
                      </button>
                        <TaskControl />
                        <TaskList />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('state to app');
    return {
        isDisplayForm: state.isDisplayForm
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onclickAdd: () => {

            dispatch(actions.openForm());
            dispatch(actions.setTaskEditing(null));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
