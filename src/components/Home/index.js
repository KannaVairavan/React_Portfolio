import React from "react";
import "./Style.css";
import codetyping from "./../../img/code.png";
import binaryimg from "./../../img/Binary-Globe-2.svg"

const Home=()=>{
    return(
        <div className="Home">
            <div className="Container">
                <div className="Text">
                    <h1 className="Hello">Hello, World</h1>
                    
                    <h2>Welcome on my website</h2>
                </div>
                
            </div>
            <img className="Code" src={codetyping}alt="code typing img"></img>
            <img className="Binary"src={binaryimg}alt="binary world"></img>


        </div>
    );
}

export default Home;