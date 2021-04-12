import React,{useRef,useContext,useEffect} from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
    const contactContext = useContext(ContactContext);
    const {filterContact,clearFilter,filtered} = contactContext;

    const text = useRef('');

    useEffect(() => {
        if(filtered === null){
            text.current.value = '';
        }
        //eslint-disable-next-line
    }, [])
    
    const onChangeHandler = (e) => {
        if(text.current.value !== ''){
            filterContact(e.target.value);
        }else{
            clearFilter();
        }     
    }

    return (
        <form>
            <input ref={text} type="text" placeholder="Filter Contacts.." onChange={onChangeHandler}/>
        </form>
    )
}

export default ContactFilter;
