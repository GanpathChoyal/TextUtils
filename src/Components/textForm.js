import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }
     const handlereverseClick = () =>{
        let newText = text.split('').reverse().join('');
        setText(newText);
        props.showAlert("text reversed","success");
    
    }
    const handleCopy = () =>{
        var text=document.getElementById("mybox");
         text.select();
        
        navigator.clipboard.writeText(text.value)
        props.showAlert("text copied to clipboard","success");
    }
    const handleOnChange = (event) =>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text,setText] =useState('Enter text here');
    

return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        
        
        </div>
        <button className={`btn btn-${document.body.style.backgroundColor==="rgb(212, 0, 255)"?"danger":"primary"} mx-1 my-1`} onClick={handleUpClick}>convert to uppercase</button>
        <button className={`btn btn-${document.body.style.backgroundColor==="rgb(212, 0, 255)"?"danger":"primary"} mx-1 my-1`} onClick={handleLoClick}>convert to lowercase</button>
    
         <button className={`btn btn-${document.body.style.backgroundColor==="rgb(212, 0, 255)"?"danger":"primary"} mx-1 my-1`}  onClick={handlereverseClick}>reverse</button>
         <button className={`btn btn-${document.body.style.backgroundColor==="rgb(212, 0, 255)"?"danger":"primary"} mx-1 m  y-1`} onClick={handleCopy}>copytext</button>
    
    </div>
     <div className="container"> 
        <h2> your text summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length}characters</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>
        <h2>preview</h2>
        <p>{text}</p>
     </div>
     </>
  )
    }

