import React, {useState} from 'react';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
import AddContact from './AddContact';

function App() {
  const [contacts, setContacts] = useState([])
  const addContactHandler =(contact) =>{
    console.log(contact)
  }
  return (
    <div className='ui container'>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
