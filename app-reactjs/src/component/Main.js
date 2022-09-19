import React, { useState,useEffect } from "react";
import {ContainerMain} from "../style/styled"
import axios from "axios"
import Card from "./Card";


const Main = ()=>{
    const [posts,sePosts] = useState([]);
    const [categories, setCategories] = useState("")
    useEffect(()=>{
        axios.get('https://testewp.granostudio.com.br/?rest_route=/wp/v2/posts')
        .then((data)=>sePosts(data.data))
        .catch((error)=>{
            console.log(error)    
        })
        
    },[])
    
    let filtro;
    if(categories&&posts){
    filtro = posts.filter((post)=> post.categories[0] === Number(categories))
    }
  

   return(
        <ContainerMain>
            <section>
            <h2>Browser The Category</h2>
           <ul>
                <li
                onClick={()=>setCategories("1")}
                >Categories 1</li> 
                <li
                onClick={()=>setCategories("2")}
                >Categories 2</li> 
                <li
                onClick={()=>setCategories("3")}
                >Categories 3</li> 
                <li
                onClick={()=>setCategories("4")}
                >Categories 4</li> 
           </ul>
           </section>
           <div>
            <ul>{
              filtro?
              filtro.map((post)=>(
                <Card
                key={post.id}
                post={post}
                />
              )):
              posts.map((post)=>(
                <Card
                key={post.id}
                post={post}
                />
              ))
                
                /*Validar dados que não vem... as categorias 1 e 2 não tem postes deve mostrar uma mensagem na tela */
               }
                      
            </ul>
                
            </div> 
        </ContainerMain>
    )
}

export default Main