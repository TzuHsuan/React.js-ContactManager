import React, { Component } from 'react';
import {ListGroup} from 'react-bootstrap';
import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStores';
import ContactListItem from './ContactListItem';

function getContactListItem(contact){
  return(
      <ContactListItem key={contact.id} contact={contact} />
    );
}

class Contacts extends Component {
  constructor(props){
    super(props)
    this.state = {
      contacts: []
    }

    this.onChange = this.onChange.bind(this);
  }

componentWillMount(){
  AppStore.addChangeListener(this.onChange);
}

componentDidMount(){
  AppActions.recieveContacts();
}

componentWillUnmount(){
  AppStore.removeChangeListener(this.onChange);
}

onChange(){
  this.setState({
    contacts: AppStore.getContacts()
  });
}

  render() {
  let ContactListItem;
  if(this.state.contacts){
    ContactListItem = this.state.contacts.map(contact => getContactListItem(contact));
  }

    return (
      <div>
        <ListGroup>
          {ContactListItem}
        </ListGroup>
      </div>
    );
  }
}
export default Contacts;
