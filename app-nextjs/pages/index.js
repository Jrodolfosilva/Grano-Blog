import React from "react";
import Header from "../component/Header"
import Banner from "../component/Banner"
import Main from "../component/Main"
import {GlobalStyle} from "../style/GlobalStyle"
export default function Home() {
  return (
    <div className="styles.container">
      <GlobalStyle/>
      <Header/>
      <Banner/>
     <Main/>
    </div>
  )
}
