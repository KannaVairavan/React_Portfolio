import React from "react";
import phone from './../../img/phone.svg';
import email from './../../img/emailme.svg';
import github from './../../img/github.svg';
import contactImg from './../../img/contactme.svg';
import "./Style.css";
import ContactItem from "./ContactItem"

const Contact=()=>{
    return(
        <div className="Contact">
            <div className="img-sect">
                <img src={contactImg}alt="binary world"></img>
            </div>
            <div className="contact-sect">
                    <ContactItem icon={phone} text1={'832-275-2496'}  title={'Phone'}/>
                    <ContactItem icon={email} text1={'kvairavan01@gmail.com'}  title={'Email'}/>
                    <ContactItem icon={github} text1={'https://github.com/KannaVairavan/Portfolio.git'}  title={'Github'}/>
            </div>
           
        </div>
    );
}

export default Contact;