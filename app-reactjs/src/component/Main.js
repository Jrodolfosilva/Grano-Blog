import React, { useState,useEffect } from "react";
import {ContainerMain} from "../style/styled"
import axios from "axios"
import Card from "./Card";


const Main = ()=>{
    const [posts,sePosts] = useState([]);
    

    const [categories, setCategories] = useState("")
    
    useEffect(()=>{
        axios.get('https://testewp.granostudio.com.br/?rest_route=/wp/v2/posts')
        .then((data)=>sePosts(data))
        .catch((error)=>{
        console.log(error)    
        })
    },[])
    
    /*
    filtrar request
    tratar error e load
    filtar categories sem fazer novo request  --- pronto no teste
    sort para ordenar posts
    ----component Header usa hook para força 1xrender/ responsivo.
    
    */
    
    
    
    
    /*teste */
    const resp =[
          
        {
            title:"POst3fs",
            date: "junho 8 2022",
            author:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            categories:"category2"
        },
        {
            title:"POst3sd",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            ccategories:"category1"
        },
        {
            title:"POst4ff",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            categories:"category1"
        },
        {
            title:"POst45jgh",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            categories:"category1"
        },
        {
            title:"POst4k4",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            categories:"category1"
        },
        {
            title:"POst5ghk5",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            categories:"category1"
        },
        {
            title:"POst4jhk5",
            date: "junho 8 2022",
            autor:"Rodolfo silva",
            image:"https://lolitajoias.com.br/wp-content/uploads/2020/09/no-image.jpg",
            categories:"category1"
        }
    ]
    const filtro = resp.filter((post)=>(
        post.categories === categories
       ))

    /*teste render/filter */
   return(
        <ContainerMain>
            <div>
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
           </div>
           <div>
            <ul>

            {/*
            tratar load e error/reposta no front
            
            */
            categories.length?
            filtro.map((post)=>(
                <Card key={post.title} post={post}/>))
            
           : resp.map((post)=>(
                      <Card key={post.title} post={post}/>))
           }
            </ul>
                
            </div> 
        </ContainerMain>
    )
}

export default Main