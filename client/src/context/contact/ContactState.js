import React,{useReducer} from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactContext from '../contact/contactContext';
import contactReducer from "../contact/contactReducer";

import { ADD_CONTACT,DELETE_CONTACT,SET_CONTACT,CLEAR_CONTACT,UPDATE_CONTACT,FILTER_CONTACT,CLEAR_FILTER } from "../types";

const ContactState = (props) => {
    const initialState = {
        contacts : [
            {
                "id": 1,
                "type": "Professional",
                "name": "John",
                "email": "john@123.com",
                "callingCode": "01",
                "phoneNumber": "1111111111",
            },{
                "id": 2,
                "type": "Personal",
                "name": "Chandler",
                "email": "Chandler@123.com",
                "callingCode": "02",
                "phoneNumber": "2222222222",
            },{
                "id": 3,
                "type": "Personal",
                "name": "Rayn",
                "email": "Rayn@123.com",
                "callingCode": "03",
                "phoneNumber": "3333333333",
            }
        ],
        current : null,
        filtered : null
    }

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact
    const addContact = (contact) => {
        contact.id = uuidv4();
        dispatch({type : ADD_CONTACT, payload : contact});
    }
    
    //Delete Contact
    const deleteContact = (id) => {
        dispatch({type : DELETE_CONTACT, payload : id});
    }
    
    //Set Current Contact
    const setContact = (contact) => {
        dispatch({type : SET_CONTACT, payload : contact});
    }

    //Clear Current Contact
    const clearContact = () => {
        dispatch({type : CLEAR_CONTACT});
    }

    //Upate Contact
    const updateContact = (contact) => {
        dispatch({type : UPDATE_CONTACT, payload : contact});
    }

    //Filter Contacts
    const filterContact = (text) => {
        dispatch({type : FILTER_CONTACT, payload : text});
    }
    
    //Clear Filter
    const clearFilter = () => {
        dispatch({type : CLEAR_FILTER});
    }

    return(
        <ContactContext.Provider value = {{
            contacts : state.contacts,
            current : state.current,
            filtered : state.filtered,
            addContact,
            deleteContact,
            setContact,
            clearContact,
            updateContact,
            filterContact,
            clearFilter
        }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState; 