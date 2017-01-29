import React, { Component } from 'react';
import {Button, Panel, FormGroup} from 'react-bootstrap';
import AppActions from '../actions/AppActions';

class AddContact extends Component {
  constructor(props){
    super(props);
    this.state = {
      newContact: {
        name:'',
        email:'',
        phone:''
      }
    }
  }
  
  handleSubmit(event){
    this.setState({newContact:{
      name: this.refs.name.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value
    }}, function(){
      AppActions.saveContact(this.state.newContact);
    });

       this.refs.name.value = '';
       this.refs.email.value = '';
       this.refs.phone.value = '';


    event.preventDefault();
  }

  render() {
    return (
      <Panel header="Add Contacts" >
      <form onSubmit={this.handleSubmit.bind(this)}>
        <FormGroup>
          <input className="form-control" 
                 type="text" 
                 ref="name" 
                 placeholder="Add Name" />
        
          <input className="form-control" 
                 type="text" 
                 ref="email" 
                 placeholder="Add email" />
        
          <input className="form-control" 
                 type="text" 
                 ref="phone" 
                 placeholder="Add phone" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
      </Panel>
    );
  }
}

export default AddContact;
