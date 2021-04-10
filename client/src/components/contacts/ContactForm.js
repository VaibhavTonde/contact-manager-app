import React,{useState,useContext,useEffect} from 'react'
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
    const contactContext = useContext(ContactContext);
    const {addContact,current,clearContact,updateContact} = contactContext;
    
    useEffect(() => {
            if(current !== null){
                setContact(current);
            }else{
                setContact({
                    name : '',
                    email : '',
                    callingCode : '',
                    phoneNumber : '',
                    type : 'Personal'  
                })
            }
    }, [contactContext,current]);
    
    const [contact, setContact] = useState({
        name : '',
        email : '',
        callingCode : '',
        phoneNumber : '',
        type : 'Personal'
    })

    const {name,email,callingCode,phoneNumber,type} = contact;

    const onChangeHandler = (e) => {
        setContact({
            ...contact,[e.target.name] : e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(current === null){
            addContact(contact);
        }else{
            updateContact(contact);
            clearAll();
        }
    }

    const clearAll = () => {
        clearContact();
    }
    
    return (
        <form onSubmit = {onSubmitHandler}>
            <h2 className="text-primary">{current ? 'Edit' : 'Add'} Contact</h2>
            <input type="text" placeholder="Name" name="name" value={name} onChange={onChangeHandler}/>
            <input type="email" placeholder="Email" name="email" value={email} onChange={onChangeHandler}/>
            <input type="text" placeholder="Country Code" name="callingCode" value={callingCode} onChange={onChangeHandler}/>
            <input type="text" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={onChangeHandler}/>
            <h5>Contact Type</h5>
            <input type="radio" name="type" value="Personal" checked={type === 'Personal'} onChange={onChangeHandler}/>Personal{' '}
            <input type="radio" name="type" value="Professional" checked={type === 'Professional'} onChange={onChangeHandler}/>Professional{' '}
            <div>
                <input type="submit" value={current ? 'Update Contact' : 'Add Contact'} className="btn btn-primary btn-block"/>
            </div>
            {current && <div>
                <button className="btn btn-light btn-block" onClick={clearAll}>Clear</button>
            </div>}
        </form>
    )
}

export default ContactForm
