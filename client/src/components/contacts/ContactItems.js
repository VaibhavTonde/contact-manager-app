import React,{useContext} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactItems = ({contact}) => {
    const contactContext = useContext(ContactContext);
    const {setContact,clearContact,deleteContact} = contactContext;
    const {_id,name,email,callingCode,phoneNumber,type} = contact

    const onDeleteHandler = () => {
        deleteContact(_id);
        clearContact();
    }

    const onSetHandler = () => {
        setContact(contact);
    }
    

    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name}{' '} <span className={'badge ' + (type === "Professional"? 'badge-success' : 'badge-primary')} style={{float:'right'}}>
                    {type}
                </span>
            </h3>
            <ul className="list">
                {email  && (<li>
                    <i className="fas fa-envelope-open"></i>{' '}{email}
                </li>)}                
                {phoneNumber && (<li>
                    <i className="fas fa-phone"></i>{' '}{callingCode}{' - '}{phoneNumber}
                </li>)}                
            </ul>
            <p>
                <button className="btn btn-dark btn-sm" onClick={onSetHandler}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={onDeleteHandler}>Delete</button>
            </p>
        </div>
    )
}

export default ContactItems
