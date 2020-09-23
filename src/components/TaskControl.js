import React, { Component } from 'react';
import TaskSearchControl from './TaskSearchControl';
import TaskSortControl from './TaskSortControl';
import {connect} from 'react-redux';
class TaskControl extends Component {
    render() {
        console.log('render taskcontrol');
        return (
            <div className="row mt-15">
                <TaskSearchControl 
                    passKeyword={this.props.passKeyword}
                 />
                <TaskSortControl
                    passSort={this.props.passSort}
                />
            </div>
        );
    }
}

// const mapStateToProps=(state)=>{
//     //console.log('state to prop');
//     return {
//         tasks: state.tasks
//     }
// }

export default connect(null, null )(TaskControl);

// export default TaskControl;
