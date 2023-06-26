import React, { useState,useEffect, useCallback } from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { Animation, Typer } from 'react-easy-animations'
import {AiFillFacebook,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import Nav from './Nav'
import "./home.css"
const Home = () => {
  const names=["Venkata Sai Akhil","Software Developer","Web Designer"]
    const [name,setName]=useState(names[0])

   
   
  return (
//    <div className="home-cont">
<>
       {/* <div style={{display:"flex",justifyContent:"center"}}>
       <Nav/>  
       </div> */}
       <div style={{display:"flex",justifyContent:"center",height:"88vh"}}>
       <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",height:"85vh",width:"90%"}} className="profile">
       <Animation
      type="fadeInFromLeft"
      duration="1100ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none"
    >
        <img src="https://i.postimg.cc/L87QMwLN/IMG-20221221-193405-169-fotor-bg-remover-20230622121831-transformed.png" alt="piss" style={{width:"450px" , height:"490px"}}/>
        </Animation>
        <Animation
      type="fadeInFromRight"
      duration="1200ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="1"
      fillMode="none"
    >
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"500px"}} className="nameCont">
            <h1 className="name">HI, I am{" "} 
            <span className="intial"> 
            <Typewriter 
               words={["Venkata Sai Akhil","Software Developer","Web Designer"]}
               loop={200}
               cursor
               cursorStyle="|"
               cursorBlinking={false}
               typeSpeed={100}
               deleteSpeed={60}
               delaySpeed={1000}           
            />
             </span></h1>
            <p className="cap">I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.</p>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"30%",marginTop:"30px"}}>
             <a href="https://www.facebook.com/akhil.sai.92123/" target="_blank" rel="noreferrer" ><AiFillFacebook  className="link" /></a> 
              <a href="https://github.com/akhilsai2" target="_blank" rel="noreferrer" ><AiFillGithub  className="link"/></a>
             <a href="https://www.linkedin.com/in/venkatasaiakhil/" target="_blank" rel="noreferrer" ><AiFillLinkedin   className="link"/></a> 
            </div>
        </div>
        </Animation>
       </div>
       </div>
       </>
//    </div>
    
  )
}

export default Home