import React, { useState } from 'react';
import Categories from './Categories';
import MenuItems from './MenuItems';
import portfolios from './Project';
import PageHeader from "./../PageHeader"
import "./Style.css";


const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];
function Portfolio() {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) =>{
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData  = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return(
        <div className="PortfolioPage container-fluid">
            <div className="title">
                <PageHeader title={'Portfolio'}/>
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories} />
                <MenuItems menuItem={menuItems} />
            </div>
        </div>
    );
}

export default Portfolio;