import React, { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactList from "./ContactForm/ContactList";
import contacts from "./ContactForm/contacts.json"
import ContactForm  from './ContactForm/ContactForm';
import ContactFilter  from './ContactForm/ContactFilter';
import s from "./ContactForm/contactForm.module.css"

class App extends Component {
state={
    contacts,
    filter: "",
}
deleteContact=(contactId)=>{
    this.setState(prevState=>({
        contacts: prevState.contacts.filter(contact=>contact.id !==contactId),
    }))
}

    addContact=({id,name,number})=>{
    const todo={
        id: nanoid(),
        name,
        number
    }
    const normalaze=this.state.contacts.find(e=>
         e.name===name)
    console.log(normalaze)
  if(normalaze){
        alert(`${name} is already in contacts`)
    }
    else{
    this.setState(prevState=>({
        contacts: [todo, ...prevState.contacts],
    }))}
    
    }

    changeFilter=(e)=>{
        this.setState({
            filter: e.currentTarget.value
        })
    }

    getVisibleContacts=()=>{
        const {filter,contacts}=this.state
        const normalizeFilter=filter.toLowerCase()
    return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizeFilter))

    }

render(){
    const {filter} = this.state
    const filterContacts=this.getVisibleContacts();
    
    return (
        <div className={s.container}>
             <h2>Phonebook</h2>
        <ContactForm onSubmit={this.formSubmitHandler} onSubmitAdd={this.addContact}/>
            <h2>Contacts</h2>
          <ContactFilter value={filter} onChange={this.changeFilter}/>  
        <ContactList contacts={filterContacts}
        ondeleteContact={this.deleteContact}/> 
        </div>
    )
}}
export default App