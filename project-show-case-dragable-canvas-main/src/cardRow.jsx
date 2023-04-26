import React from "react";

import {Pics1,Pics2,Pics3,Pics4} from "./pics";
import './App.css';


function addLink(link){
    return(
        
        <div key={link.id} className="card" style={{background:`url(${link.link})`}}></div>
        
    )
}



function cardRow(){
    return(
        
        <div>
            <div className='row'>
                {Pics1.map(addLink)}
            </div>
            <div className='row'>
                {Pics2.map(addLink)}
            </div>
            <div className='row'>
                {Pics3.map(addLink)}
            </div>
            <div className='row'>
                {Pics4.map(addLink)}
            </div>
        
        </div>
    )
}
export default cardRow;