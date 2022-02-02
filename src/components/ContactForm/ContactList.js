import React from 'react';
import s from './ContactList.module.css'


const ContactList =({contacts, ondeleteContact})=>(
<ul className={s.contactList}>
   {
    contacts.map(({id,name, number})=>{
      return(
        <li key={id}
        className={s.contactList_item}>
        <p className={s.contactList__text}>{name}</p>
        <p className={s.contactList__text}>{number}</p>
        <button onClick={()=>ondeleteContact(id)}>delete</button>
      </li>
      )
    
    })
  }
    
  </ul>

 )


 export default ContactList

/*class ContactList extends Component{
   
      render(e){
        return(
            <form className={s.inputContact}
             type="submit"
        
            >
           <label>Name
               <input
               type="text"
               name="name"
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
               required/>
           </label>
           <label htmlFor={this.telInputId}>Number
             <input
               type="tel"
               name="number"
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
               required/>
           </label>
           <button type='submit'>Add contact</button>
               </form>

        )
    }
}*/

/*ContactList.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};*/
