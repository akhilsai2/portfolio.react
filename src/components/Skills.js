import React from 'react'
import "./skills.css"
const listOfSkills = [{ image: "https://assets.ccbp.in/frontend/react-js/jobby-app/reactjs-img.png", text: "React Js" },
{ image: "https://assets.ccbp.in/frontend/react-js/jobby-app/nodejs-img.png", text: "Node Js" },
{ image: "https://assets.ccbp.in/frontend/react-js/jobby-app/redux-img.png", text: "Redux" },
{ image: "https://assets.ccbp.in/frontend/react-js/jobby-app/python-img.png", text: "Python" },
{ image: "https://assets.ccbp.in/frontend/react-js/jobby-app/html-img.png", text: "HTML" },
{ image: "https://assets.ccbp.in/frontend/react-js/jobby-app/css-img.png", text: "CSS" },
{ image: "https://assets.ccbp.in/frontend/react-js/jobby-app/javascript-img.png", text: "JavaScript" },
{ image: "https://assets.ccbp.in/frontend/react-js/jobby-app/sqlite-img.png", text: "SQL Lite" },
]
const Skills = () => {
    return (
        <div className="skills">
            <div style={{ alignSelf: "flex-start", paddingLeft: "30px" }}>
                <h1 className="skills-head">
                    Skills
                </h1>
            </div>
            <div className="skills-Cont">
                {listOfSkills.map(each => (
                    <div key={each.text} className="icon">
                        <img src={each.image} alt={each.image} />
                        <h1 style={{ fontSize: "20px" }}>{each.text}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills