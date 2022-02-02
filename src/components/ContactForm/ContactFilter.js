import React from 'react';
import s from "./contactForm.module.css"

const ContactFilter=({value, onChange})=>(
  <label className={s.labelFilter}>Find contacts by name
       <input value={value}
    onChange={onChange}></input>
  </label>
   
)
export default ContactFilter