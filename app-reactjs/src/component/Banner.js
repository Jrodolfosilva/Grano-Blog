import React from "react";
import {ContainerBanner} from "../style/styled"
import img from "../img/Group.png"

const Banner = ()=>{
    return(
        <ContainerBanner>
            <div>
            <h1>Hi, I`m <br/>Front End Dev</h1>
            <p>On this blog I Share tips and ticks, frameworks,projects, tutorials, etc.</p>
            <div>
                <input placeholder="Enter your email here..." type="email" required/>
                <input type="submit" value="Subscribe"/>

            </div>
            
            </div>
            <div>
                <img src={img} alt="IMAGEM"/>
            </div>
        </ContainerBanner>
    )
}
export default Banner