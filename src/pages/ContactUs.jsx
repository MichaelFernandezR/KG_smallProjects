// import React from 'react';
import  { Typography } from "@material-ui/core";
import  React, {useRef, useState, useEffect } from 'react';

const ContactUs = () => {
    const fnameRef = useRef(null);
    const lnameRef =  useRef(null);
    const emailRef = useRef(null);
    const msgRef = useRef(null);
    const [id, setID] = useState(Date.now);
    const [allContacts, setAllContacts] = useState([]);
    const handlesubmit=(event)=> {
        event.preventDefault();
        let obj = {
            id:id, 
            fname:fnameRef.current.value,
            lname:lnameRef.current.value,
            email:emailRef.current.value,
            msg:msgRef.current.value,
            
        };
        setAllContacts([...allContacts,obj]);
        alert(JSON.stringify(obj));
        fnameRef.current.value = null;
        lnameRef.current.value = null;
        emailRef.current.value = null;
        msgRef.current.value = null;
        setID(Date.now);
    }
    useEffect(()=>localStorage.setItem("contactus", JSON.stringify(allContacts)),[allContacts]);

    return (
        
        <Typography>
            <form id="contactus"
            onSubmit={handlesubmit}>
            <h1> Contact me</h1>
                <label for="fname">First Name</label><br></br>
                <input ref={fnameRef} id="fname" name="fname" placeholder="First Name" required></input>
                <label for="lname">Last Name</label><br></br>
                <input ref={lnameRef} id="lname" type="text" name="lname" placeholder="Last Name" required></input>
                <label for="email">Email</label>
                <input ref={emailRef} id="email" type="email" name="email" placeholder="Email" required></input>
                <label for="msg">Message</label>
                <textarea ref={msgRef} id="msg" rows="4" cols="50" name="msg" placeholder="Your Message"></textarea>
                <button>
                    Send Message
                </button>
            </form>
        </Typography>
    )
}

export default ContactUs
