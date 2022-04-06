import React from "react";
import PageHeader from "./../PageHeader"
import me from "./../../img/Kanna_portfolio.JPG";
import "./Style.css";
const About=()=>{
    return(
        <div className="AboutMe">
            <PageHeader title={'About Me'}/>
            <div className="Container">
                <div className="Text">
                    <h2> Hello! I'm Kanna</h2>
                    <p>
                        Innovative thinker and talented Full-Stack Web Developer; 
                        able to work with tight deadlines and manage competing priorities; 
                        an ultimate team player with an impeccable work ethic. Endeavoring 
                        to apply a 23-year track record of innovation and success creating 
                        and managing legacy software based solutions to the web development.
                    </p>
                    
                </div>
                <div className="Photo">
                    <img className="Me img-fluid p-1 p-sm-1" src={me}alt="me"></img>
                </div>
                
            </div>

            
        </div>
    );
}

export default About;