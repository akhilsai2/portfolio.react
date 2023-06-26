import React, { useRef, useState } from 'react'
import Axios from "axios"
import pngcontact from '../images/pngegg.png'
import contact from '../images/contact.png'
import "./contact.css"

const Contact = () => {
 const Name=useRef("")
 const Email=useRef("")
 const Message=useRef("")
 const [show,setShow]=useState(false)
 const [showMsg,setShowMsg]=useState("")


const fileSubmit= async (e)=>{
    e.preventDefault()
        const response=await Axios.post("http://localhost:5000/contact",{Name:Name.current.value,Email:Email.current.value,Message:Message.current.value})
        console.log(response)
        Name.current.value=""
        Email.current.value=""
        Message.current.value=""
        if(response.statusText==="OK"){
            setShow(true)
            setShowMsg(response.data)
        }
}

  return (
    <div className="contact">
     <div style={{ alignSelf: "flex-start", paddingLeft: "30px" ,paddingTop:"10px"}}>
                <h1 className="skills-head">
                    Contact Me
                </h1>
            </div>
            <div style={{display:"flex" , justifyContent:"space-around",alignItems:"center",height:"80vh" }}>
                <div className="formCont">
                <img src={pngcontact} alt="contact" className="contact-image" style={{width:"700px",height:"250px"}} />
                <form className="inCont" onSubmit={fileSubmit}>
                <label htmlFor='Name' className="label" >Name</label>
                <input id="Name" className="input" type="text" placeholder='Name' ref={Name} value={Name.current.value} onChange={(e)=>{                  
                    Name.current.value=e.target.value
                    setShow(false)}
                    }/>
                <label htmlFor='email' className="label">Email</label>
                <input id="email" className="input" type="text" placeholder='Email' ref={Email} value={Email.current.value} onChange={(e)=>Email.current.value=e.target.value}/>
                <label htmlFor='msg' className="label">Message</label>
                <textarea id="msg" className="textarea" placeholder='Enter Message...' rows={10} cols={85} ref={Message}  value={Message.current.value} onChange={(e)=>Message.current.value=e.target.value}/>
                <button type="submit" className="btn">Send</button>
                {show && <p style={{color:"green"}}>{showMsg}</p>}
                </form>
                
                </div>
                <img src={contact} alt="server" style={{width:"800px",height:"400px"}} />
            </div>
    </div>
  )
}

export default Contact