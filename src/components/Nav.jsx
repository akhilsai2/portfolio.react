import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import "./nav.css"


const section=[{text:"Home",path:"/"},{text:"About",path:"/about"},{text:"Skills",path:"/skills"},{text:"Work On",path:"/work"},{text:"Contact Me",path:"/contact"}]
const Nav = () => {
  const [selected,setSelected]=useState(section[0])
  return (
   
    <nav className="nav-Cont">
        <h1 className="logoHead">KVSA</h1>      
            <div className="section-cont">
            {section.map((each,i)=><Link to={each.path} style={{textDecoration:"none"}} onClick={()=>setSelected(section[i])} key={each.text} ><h1 className="link-head" style={(selected.text===each.text)?{borderBottom:"2px solid #f8fc08",paddingBottom:"5px"}:null}>{each.text}</h1></Link>)}
        </div>
    </nav>
  
  )
}

export default Nav