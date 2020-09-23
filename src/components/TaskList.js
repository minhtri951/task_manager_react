import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index.js';
class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keywordOnTable: '',
            statusOnTable: -1

        };
    }
    passIdEdit = (idEdit) => {
        let { tasks } = this.props;

        let indexEdit;
        tasks.map((task, index) => {
            if (task.id === idEdit) {
                indexEdit = index;
            }
        });
        let taskEdit = tasks[indexEdit];
        this.props.setTaskEditing(taskEdit);
        this.props.openForm();

    }
    onKeywordChange = (event) => {
        let v = event.target.value;
        this.setState({
            keywordOnTable: v
        });

    }
    onStatusChange = (event) => {
        let v = event.target.value;
        this.setState({
            statusOnTable: v === 'true' ? true : (v === 'false' ? false : -1)
        });
        alert( v === 'true' ? true : (v === 'false' ? false : v))

    }
    //dung thu
    componentWillReceiveProps() {
        this.setState({
            keywordOnTable: ''
        });
    }

    render() {
        console.log('render tasklist', this.props.keyword);

        var { tasks, keyword, sort } = this.props;
        var { keywordOnTable, statusOnTable } = this.state;

        // search/filter
        var keywordSearch = '';

        if (keywordOnTable === '') {
            keywordSearch = keyword;
        } else {
            keywordSearch = keywordOnTable;
        }

        tasks = tasks.filter((task) => {
            return task.name.toLowerCase().indexOf(keywordSearch.toLowerCase()) !== -1
                && (statusOnTable === -1 || task.status === statusOnTable);
        });
        //sort
        if (sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }
        var displayTaskItem = tasks.map(
            (task, index) => {
                return <TaskItem
                    key={index}
                    index={index}
                    task={task}
                    passIdDelete={this.props.passIdDelete}
                    passIdEdit={this.passIdEdit}
                />;
            }
        );
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* filter */}
                            <tr>
                                <td></td>
                                <td>

                                    <input
                                        type="text"
                                        className="form-control"
                                        name="filterName"
                                        value={keywordOnTable}
                                        onChange={this.onKeywordChange}

                                    />
                                </td>
                                <td>

                                    <select
                                        className="form-control"
                                        name="filterStatus"
                                        onChange={this.onStatusChange}
                                    >
                                        <option value={-1}>All</option>
                                        <option value={false}>Done</option>
                                        <option value={true}>In Process</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {/* list item */}
                            {displayTaskItem}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log('state to tasklist');
    return {
        tasks: state.tasks,
        keyword: state.keyword,
        sort: state.sort
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        setTaskEditing: (data) => {
            dispatch(actions.setTaskEditing(data));
        },
        openForm: () => {
            dispatch(actions.openForm());
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

