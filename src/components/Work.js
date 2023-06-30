import React from 'react'
import ipl from "../images/ipldash.jpg"
import job from "../images/jobby.png"
import rps from '../images/rps.png'
import trend from '../images/trendz.png'
import watch from '../images/watch.png'
import CardWork from './CardWork'
import { AiOutlinePlus } from 'react-icons/ai'
import "./work.css"


const cardStore = [{ image: ipl, text: "IPL DASHBOARD", gitlink: "https://github.com/akhilsai2/ipldashboard-reactjs", applink: "https://ipldash.ccbp.tech" },
{ image: job, text: "JOBBY APP", gitlink: "https://github.com/akhilsai2/jobbyApp-reactjs", applink: "https://jobbyapp8.ccbp.tech" },
{ image: rps, text: "RPS GAME", gitlink: "https://github.com/akhilsai2/rpsgame-reactjs", applink: "https://RPSgame8.ccbp.tech" },
{ image: trend, text: "ECOMMERCE APP", gitlink: "https://github.com/akhilsai2/E-Commerce-App", applink: "https://nxttrendz8.ccbp.tech/products" },
{ image: watch, text: "YOUTUBE CLONE", gitlink: "https://github.com/akhilsai2/nxtwatch-reactjs", applink: "https://watchtube4.ccbp.tech" },
]
const Work = () => {
    return (
        <div className="skills" >
            <div style={{ alignSelf: "flex-start", paddingLeft: "30px" }}>
                <h1 className="skills-head">
                    Work On
                </h1>
            </div>
            <div className="skill-show">
                {cardStore.map(each => <CardWork items={each} />)}
                <div style={{ display: "flex", alignItems: "center", height: "180px", marginLeft: "26px", }}>
                    <div className="empty-card">
                        <AiOutlinePlus style={{ fontSize: "30px", color: "#fofofo" }} />
                    </div>

                </div>

            </div>
        </div >
    )
}

export default Work