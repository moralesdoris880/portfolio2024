import '../css/Contact.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_ID)
        .then((result) => {
            console.log(result.text);
            handleSendEmail(e)
        }, (error) => {
            console.log(error.text);
        });
    };

    function handleSendEmail(e){
        e.preventDefault()
        setName("")
        setEmail("")
        setMessage("")
    }

    return(
        <div id="ContactSection">
            <div id="ContactTitle"></div>
                <div id="ContactContent">
                    <form ref={form} onSubmit={sendEmail} id="formSection">
                        <div id="messageSection">
                        <label id="messageLabel">Message:</label>
                        <textarea id="messageTextbox" name="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                        <div id="secondSection">
                        <label id="nameLabel">Name:</label>
                        <input type="text" name="user_name" className="inputs" value={name} onChange={(e) => setName(e.target.value)}/>
                        <label id="emailLabel">Email:</label>
                        <input type="email" name="user_email" className="inputs" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input type="submit" value="Send" id="submitButton"/>
                        </div>
                    </form>
                </div>
        </div>  
    )
}

export default Contact;