import React from 'react'
import {BiLinkExternal,BiLinkAlt} from 'react-icons/bi'
import "./cardwork.css"

const CardWork = (props) => {
    const {items}=props
    if (items!=={}) {
   return (
    <div key={items} className="card">      
        <img src={items.image} alt={items.text} style={{width:"500px",height:"200px"}} className="card-image"/>
        <div className="card-link">
        <h1 className="card-name">{items.text}</h1>
        <div style={{width:"100px",display:"flex",justifyContent:"space-around"}}>
        <a href={items.gitlink} target="_blank" rel="noreferrer"> <BiLinkAlt className="link-icon" /></a> 
        <a href={items.applink} target="_blank" rel="noreferrer"><BiLinkExternal className="link-icon" /></a>
        </div>
        </div>        
    </div>
  ) }
  
    return  (
      <div className="card">
  
      </div>
    )
  
}

export default CardWork