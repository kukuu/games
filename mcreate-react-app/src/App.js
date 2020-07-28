import React from 'react';
import ContactsList from './ContactsList';
//import './App.css';

let contacts = [{
  ID: 1,
  name: "Last Action Hero",
  director: "Stephen Spielberg"
},{
  ID: 2,
  name: "In Search of the Last Action Heroes",
  director: "Robert de Niro"
},{
  ID: 3,
  name: "Time Warp Vol 2 ",
  director: "John Drake"
},{
  ID: 4,
  name: "Not Another Sci-Fi Movie",
  director: "Thomas Jefferson"
}]



 class App extends React.Component {
  
  render() {

    return(
      <div style={{marginLeft:200}}>
        <header className="App-header">
          <h1> Contacts List</h1>
          <ContactsList contacts = { contacts } />
        </header>
      </div>
    )
  }

}
export default App;
