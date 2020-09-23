import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index.js';

class TaskSearchControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
         
        }
    }

    onSearch=()=>{
        let k = this.refs.txtKeyword.value;
        console.log('ons ',k);
        this.props.onSearch(k);
    }
    
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="input-group">
                    <input
                        name="keyword"
                        ref='txtKeyword'
                        type="text"
                        className="form-control"
                        placeholder="Typing task name"
                       
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button"
                            onClick={this.onSearch}     
                         >
                            <span className="fa fa-search mr-5"></span>Search
                        </button>
                    </span>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps=( dispatch, props)=>{
    return {
        onSearch: (keyword)=>{
            dispatch(actions.search(keyword));
        }
    }
} 

export default connect(null, mapDispatchToProps )(TaskSearchControl);
