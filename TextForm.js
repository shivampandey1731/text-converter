import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
   
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("onChange");
    setText(event.target.value);
  }


  const handleClearClick = () => {
    
    let newText ="";
    setText(newText);
  }
  
  




  const [text, setText] = useState("Enter the text here");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="my-box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>ConverttoUppeerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>ConverttoUppeerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>ClearText</button>
      
     
      </div>
      <div className="container my-3">
        <h1>Your text here</h1>
        <p>{text.split(" ").length} words and {text.length}Character</p>
      <p>{0.008 * text.split("").length }Minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"enter something in preview box "}</p>
      </div>
      </>
  )
}
