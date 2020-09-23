import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index.js';
class TaskSortControl extends Component {

    constructor(props){
        super(props);
        this.state={
            indexSelected: 1
        }
    }
    
    onClick=(by, value, index)=>{
        
        //set index to state
        this.setState({indexSelected: index});
        // pass by+value to store
        let sort={
            by: by,
            value: value
        }
        this.props.onSort(sort);
    }
    

    render() {
        var a='',b='',c='',d='';
        let {indexSelected}= this.state;
        if(indexSelected===1) a='sort_selected';
        else if(indexSelected===2) b='sort_selected';
        else if(indexSelected===3) c='sort_selected';
        else d='sort_selected';

        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true"
                    >
                        Sort <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li  onClick={()=>this.onClick('name', 1, 1)} >
                            <a role="button" className= {a} >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Name A-Z
                                </span>
                            </a>
                        </li>
                        <li   onClick={()=>this.onClick('name', -1, 2)} >
                            <a role="button" className={b} >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Name Z-A
                                </span>
                            </a>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li  onClick={()=>this.onClick('status', 1, 3 )} >
                            <a role="button" className= {c} >
                                In Process
                            </a>
                        </li>
                        <li  onClick={()=>this.onClick('status', -1, 4)} >
                            <a role="button" className= {d} >
                                Done
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps=( dispatch, props)=>{
    return {
        onSort: (sort)=>{
            dispatch(actions.sort(sort));
        }
    }
} 

export default connect(null, mapDispatchToProps )(TaskSortControl);
