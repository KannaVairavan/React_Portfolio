import React from "react";
import "./Style.css";
import codetyping from "./../../img/coder.svg";
import binaryimg from "./../../img/Binary-Globe-2.svg"
import resdoc1 from "./../../doc/Kanna_Vairavan_CV.pdf"
import { FaGithub, FaLinkedin, FaFile } from "react-icons/fa";

const handleURL=(url)=>{
    return()=>window.open(url, "_blank")
}

const Home=()=>{
    return(
       
        <div className="Home">
            <div className= "container-fluid">
                <div className="Container">
                    <div className="Text">
                        <h1 className="Hello">Hello, I am Kanna</h1>
                        
                        <h2>Full-Stack Developer</h2>

                            <div className="Icons">
                                <FaGithub size='35px' 
                                onClick={handleURL("https://github.com/KannaVairavan/Portfolio.git")} className="icon"/>
                                <FaLinkedin  size='35px' 
                                onClick={handleURL("https://kannavairavan.github.io/Portfolio/index.html")} className="icon"/>
                                 <a href={resdoc1} target = "_blank" className="btn btn-light btn-sm icon" role="button" data-bs-toggle="button" aria-pressed="true"><strong>Resume</strong></a>
                                {/* <FaFile size='35px' 
                                onClick={handleURL("./../../doc/Kanna_Vairavan_CV.pdf")} className="icon"/> */}
                                {/* */}
                            </div>
                    </div>
                    
                </div>
                
                <img className="Code img-fluid p-1 p-sm-1" src={codetyping}alt="code typing img"></img>
                <img className="Binary img-fluid p-1 p-sm-1" src={binaryimg}alt="binary world"></img>
            
            </div>
        </div>
    );
}

export default Home;