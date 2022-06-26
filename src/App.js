import React from "react";
import "./style.css";
import {FaHome} from '@react-icons/all-files/fa/FaHome'
import {BsFillDropletFill} from '@react-icons/all-files/bs/BsFillDropletFill'

export default function App() {
  return (
    <div className="container">  
    <div className="first" style={{color: "red"}}>
   <div className="bb" style={{margin: "10px 10px 10px 10px"}} />
   <div  className="Pmack">
     <div><BsFillDropletFill /></div>
    <div className="Pmack"><span className="bibop" style={{color: "red"}}><BsFillDropletFill /></span></div>
   </div>
   </div>
   <div className="second" style={{color: "transparent", marginTop: "10px"}}><strong>Parker was here</strong></div>
 <h1 className="animation">
   <button style={{backgroundColor: "transparent", border: "3px solid transparent"}}><a href="https://stackblitz.com/edit/react-d2pjuj?file=public%2Findex.html,src%2FApp.js/"><FaHome /></a></button>
   </h1>
   <iframe width="60%" height="25%" src="https://www.youtube.com/embed/joCmPF7FnSw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}
