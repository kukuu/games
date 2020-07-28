import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
  
    constructor(props){
        super(props);

        this.state = {
            search: '',
            contacts: props.contact
        };
    }
  
    updateSearch(event) {
        console.log(event.target.value);
        this.setState({
            search: event.target.value.substr(0,10)
        })
    }

    addContact(event) {
        event.preventDefault();
        console.log(this.refs.name.value);
    }
  
    render() {
    
    let filteredContacts = this.props.contacts.filter(
        (contact) => {
            return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }

    );
    //console.log(this.props.contacts);
    
    return(

      <div>
            <input type="text" placeholder="Search" value= { this.state.search } 
            onChange={this.updateSearch.bind(this)} />
            <ul>
            {filteredContacts.map((contact) => {
                return <Contact contact={contact} key={contact.ID} />
            })}

            <form onSubmit={this.addContact.bind(this)}>
                <input type="text" ref="name" />
                <input type="text" ref="phone" />
                <button type="submit">Add new Contact</button>
            </form>
            </ul>
        </div>
   
    )
  }

}

export default ContactsList;


