import React from "react";
import "./Style.css";
import PageHeader from "./../PageHeader"
import codeThinking from "./../../img/Code_thinking.svg";
const listTitleStyle={fontWeight:900, color:'#9B1FE8', marginBottom:'4px'}
const backendSkills=
    <ul>
        <li style={listTitleStyle}>BACKEND</li>
        <li>SQL - Sequelize - GraphQL   </li>
        <li>Mongo Db- Mongoose</li>
        <li>NodeJS - Express</li>
    </ul>
const frontendSkills=
    <ul>
        <li style={listTitleStyle}>FRONTEND</li>
        <li>HTML - CSS - JavaScript</li>
        <li>ReactJS - Handlebars - jQuery </li>
        <li>Bootstrap - Foundation </li>
        
    </ul>
const otherSkills=
        <ul>
            <li style={listTitleStyle}>OTHER</li>
            <li>Git - Heroku - Azure DevOps - Trello </li>
            <li>VB.NET - Visual Basic 6 - C# </li>
            <li>Microsoft Access - VBA</li>
            
        </ul>

const totalSkills=[backendSkills, frontendSkills, otherSkills]       




const Skils=()=>{
    return(
        <div className="Skills container-fluid">
            
            <PageHeader title={'What about Skills?'}/>
                <p>
                    Below are some programming languages, toolkits, frameworks and libraries that I worked with.
                </p>
               
                <div className="Container">
                    
                    
                    {totalSkills.map(skills=>{
                        return(
                           <div className="List">
                               {skills}
                           </div>
                        )
                    })}
                </div>
                <div className="imgstyle"> <img className="img-fluid  rounded" src={codeThinking} alt="Code Thinking"></img> </div>

            
        </div>
    );
}

export default Skils;



