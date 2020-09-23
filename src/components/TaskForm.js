import React, { Component } from 'react';
import {  connect} from 'react-redux';
import * as actions from './../actions/index.js';
class TaskForm extends Component {

    // constructor(props){
    //     super(props);
  
    // }
    
    onSubmit=(event)=>{
        event.preventDefault();
        let txtName=this.refs.txtName.value;
        let sltStatus= this.refs.sltStatus.value==='true'?true:false;
       
        let data= {
            id: '',
            name: txtName,
            status: sltStatus
        };
        
     
        if(this.props.taskEditing===null){    // add
            data.id=this.randomID();
            this.props.onAdd(data);
        }
        else{                               // edit
            data.id= this.props.taskEditing.id;
            this.props.onUpdate(data);
            this.props.onAbort();
        }
        


    }
    // onChange=()=>{
    //     console.log('onchange');
    //     //console.log(event.target.value);
    //     let name= this.refs.txtName.value;
    //     let status= this.refs.sltStatus.value;
    //     this.flag=true;
    //     this.setState({
    //         txtName: name,
    //         sltStatus: status
    //     });
    // }
    // chi chay khi comp da render at least 1 lan, khi props change, run truoc khi render
    componentWillReceiveProps(nextprops){
        console.log('receProp');
        //console.log(this.refs.txtName.value);
        
        if(nextprops.taskEditing!==null){
            this.refs.txtName.value=nextprops.taskEditing['name'];
            this.refs.sltStatus.value=nextprops.taskEditing['status'];
        }
        else{
            this.refs.txtName.value='';
            this.refs.sltStatus.value=true;
        }
        //this.setState(this.state);

    }
    s4() {
        return  Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    randomID() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }
    
    render() {
       
        var {taskEditing}= this.props;
        
        console.log('render taskform');
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.taskEditing!==null?'Editing task':'Adding task'}
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.props.onAbort}
                        ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label>Name :</label>
                            <input
                               
                               // value={this.state.txtName}
                               defaultValue={taskEditing!==null?taskEditing['name']:''}
                                type="text"
                                className="form-control"
                                //onChange={this.onChange}
                                ref="txtName" 
                               
                            />
                        </div>

                        <label>Status :</label>
                        <select
                            
                           // value={this.state.sltStatus}
                           defaultValue={taskEditing!==null?taskEditing['status']:''}
                            className="form-control"
                           // onChange={this.onChange}
                            ref="sltStatus"
                        >
                            <option value={true}>In Process</option>
                            <option value={false}>Done</option>
                        </select><br/>

                        <div className="text-center">
                            <button type="submit" className="btn btn-warning"
                            >
                                <span className="fa fa-plus mr-5"></span>Save
                            </button>&nbsp;
                            <button type="button"  className="btn btn-danger"
                                    onClick={this.props.onAbort}
                            >
                                <span className="fa fa-close mr-5"></span>Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>{
    console.log('state to form');
    return {
       taskEditing: state.taskEditing
    }
}
const mapDispatchToProps=(dispatch, props)=>{
    return{
        onAbort: ()=>{ //close or abort
            dispatch(actions.closeForm());
            dispatch(actions.setTaskEditing(null));
        },
        onAdd: (data)=>{
            dispatch(actions.addTask(data));
        },
        onUpdate: (data)=>{
            dispatch(actions.updateTask(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(TaskForm);
