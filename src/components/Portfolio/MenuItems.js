import React from 'react'
import "./Style.css";
function MenuItems({menuItem}) {
    return (
        <div className="portfolis">
            {
                menuItem.map((item)=>{
                    return <div className="portfolioMenu  jumbotron" key={item.id}>
                        <h5>
                            {item.title}
                        </h5>
                        <div className="image-data">
                            <img className="img-fluid p-1 p-sm-1" src={item.image} alt=""/>
                            
                        </div>
                           
                        
                        <p>{item.description}</p>
                        
                        <ul className="hover-items">
                                <li>
                                    <a href={item.link1}>{item.icon1}</a>
                                   
                                </li>
                                <li>
                                    <a href={item.deployed}>{"Deployed"}</a>
                                   
                                </li>
                              
                        </ul>
                    </div>
                })
            }
        </div>
    )
}

export default MenuItems;