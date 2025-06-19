import React, { useState } from 'react'




export default function About() {
    
const [myStyle,setMYStyle]=useState({
    
        backgroundColor: "white",
        color:"dark"
    }
)
const [btntext,setbtntext]=useState("Enable dark mode");

const togglestate=()=>{
    if(myStyle.backgroundColor==="black"){
        setMYStyle({...myStyle,backgroundColor:"white",color:"black"});
          setbtntext("Enable dark mode");
        }
        else{
            setMYStyle({...myStyle,backgroundColor:"black",color:"white"});
             setbtntext("Enable Light mode");
            }

    }



  return (
    <div>
        <div className="container" style={myStyle}>
            hello world
        </div>
        <button type="button" onClick={togglestate} className="btn btn-primary">{btntext}</button>
        
      
    </div>
  )
}

