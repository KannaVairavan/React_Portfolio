import React from "react";
import phone from './../../img/phone.svg';
import email from './../../img/emailme.svg';
import github from './../../img/github.svg';
import contactImg from './../../img/contactme.svg';
import "./Style.css";
import ContactItem from "./ContactItem"
import PageHeader from "./../PageHeader"

const Contact=()=>{
    return(
        <div className="ContactPage">
            <div className= "container-fluid">
                <PageHeader title={'Contact'}/>
               
                    <div className="Contact">
                        <div className="row justify-content-around">
                                <div className="col-5 img-sect">
                                    <img className="img-fluid p-1 p-sm-1" src={contactImg}alt="binary world"></img>
                                </div>
                                <div className="col-5 contact-sect">
                                        <ContactItem icon={phone} text1={'832-275-2496'}  title={'Phone'}/>
                                        <ContactItem icon={email} text1={'kvairavan01@gmail.com'}  title={'Email'}/>
                                        <ContactItem icon={github} text1={'https://github.com/KannaVairavan/Portfolio.git'}  title={'Github'}/>
                                </div>
                        
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Contact;