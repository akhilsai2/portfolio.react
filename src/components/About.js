import React, { useEffect, useState } from 'react'
import { Chrono } from 'react-chrono'
import "./about.css"
import { useLocation } from 'react-router-dom'
const items = [{ title: 'April 2023' }, { title: 'Aug 2022' }, { title: "April 2022" }, { title: "2015" }, { title: "2013" }]
const About = () => {
    //     const [show,setShow]=useState(false)
    //     const [lastScrollY,setLastScrollY]=useState(0)
    //   const  location=useLocation()
    //     useEffect(() => {
    //         window.scrollTo(0,0)  
    //         console.log(window.scrollTo(0,0))    
    //           },[location])       
    // const controlNavBar=()=>{       
    //     // console.log(window.scrollY)       
    //     if (window.scrollY > 200){        
    //         if (window.scrollY > lastScrollY && !mobileMenu){        
    //             setShow("hide")        
    //         }else{       
    //             setShow("show")               
    //         }        
    //         setLastScrollY(window.scrollY)       
    //     }       
    //     else{

    //         setShow('top')

    //     }

    // }

    return (
        <div className="about">
            <div style={{ alignSelf: "flex-start", paddingLeft: "30px" }}>
                <h1 className="detail-head">
                    Details
                </h1>
            </div>
            <div style={{ width: "90%", height: "90vh", borderBottom: "1px solid #bfbfbf" }}>
                <Chrono mode="VERTICAL_ALTERNATING" items={items} theme={{
                    primary: "white",
                    secondary: "#bfbfbf",
                    cardBgColor: "transparent",
                    cardForeColor: "violet",
                    titleColor: "white",
                }} hideControls
                >
                    <div>
                        <h1 style={{ fontSize: "40px" }}>Software Developer</h1>
                        <h1 style={{ fontSize: "30px", color: "#1ecafa" }}>KodeCorp </h1>
                        <p style={{ fontSize: "15px", color: "white" }}>Full-Time Present 3 Months</p>
                    </div>

                    <div>
                        <h1 style={{ fontSize: "30px" }}>Traniee Software Developer</h1>
                        <h1 style={{ fontSize: "20px", color: "#1ecafa" }}>NXTWAVE </h1>
                        <p style={{ fontSize: "15px", color: "white" }}>6 Months</p>
                    </div>
                    <div>
                        <h1 style={{ fontSize: "30px" }}>Bachelors of Technology</h1>
                        <h1 style={{ fontSize: "23px", color: "#1ecafa" }}>JB Institute of Engineering and Technology</h1>
                        <h1 style={{ fontSize: "20px", color: "#1ecafa" }}>Electrical and Electronics Engineering </h1>
                        <p style={{ fontSize: "15px", color: "white" }}>2015 - 2022</p>
                    </div>
                    <div>
                        <h1 style={{ fontSize: "30px" }}>Board of Intermediate</h1>
                        <h1 style={{ fontSize: "20px", color: "#1ecafa" }}>SR College</h1>
                        {/* <p style={{fontSize:"20px",color:"white"}}>2013 - 2015</p> */}
                    </div>
                    <div>
                        <h1 style={{ fontSize: "28px" }}>Secondary School of Education</h1>
                        <h1 style={{ fontSize: "20px", color: "#1ecafa" }}>Nirmala Vidhyalaya High School </h1>
                        {/* <p style={{fontSize:"20px",color:"white"}}>2013</p> */}
                    </div>

                </Chrono>
            </div>

        </div>
    )
}

export default About