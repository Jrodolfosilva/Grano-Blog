import React,{useState} from "react";
import {ContainerHeader} from "../style/styled"
import logo from "../img/Logo.png"
import icon from "../img/Icon.png"
import iconMenu from "../img/menu.png"


const Header = ()=>{
const [ativo,setAtivo] = useState(false);
const tela = document.documentElement.clientWidth   
    
    return(
        <ContainerHeader mobile={ativo}>
            <img src={logo} alt="LOGO" />
            <div>
                <ul>
                    <li>Home</li>
                    <li>Category</li>
                    <li style={{display:"flex"}}>
                        <>
                        <img src={icon} alt="ico"/>
                        </>
                        Search
                    </li>
                    <li>Contact</li>
                </ul>
            </div>

            {
            
            tela <= "475"
            &&<div style={{cursor:"pointer"}}>
                 <img
                  src={iconMenu} alt="menu-mobile"
                  onClick={()=>setAtivo(!ativo)}
                    />
                </div>}
           
        </ContainerHeader>
    )
}

export default Header