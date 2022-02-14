import React, { useState } from "react";

export default function TextForm(props) {
    const handleClear  = () => {
        let newText ="";
        setText(newText);
        props.showalert("clear text","success")
      };
      const copy = () => {
       var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showalert("copy text","success")
        
      };
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("coverted to upper case","success")
    
  };
  const handleLoClick = () => {
    console.log("lowerrcase was clicked" + text);
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showalert("coverted to lower case","success")
  };
  const handleOnChange = (event) => {
    console.log("on changed");
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "));
    props.showalert("handle extra spaces","success")
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style = {{color: props.mode==="dark"?"white":"black"}}>
        
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange} style ={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}
              id="mybox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>
            convert into upper case
          </button>
          <button className="btn btn-primary" onClick={handleLoClick}>
            convert into lower case
          </button>
          <button className="btn btn-primary" onClick={handleClear}>
            clear text
          </button>
          <button className="btn btn-primary" onClick={copy}>
            copy text
          </button>
          <button className="btn btn-primary" onClick={handleExtraSpaces}>
            remove extra spaces
          </button>
        </div>
        <div className="container my-4 " style={{color:props.mode==="dark"?"white":"black"}}>
          <h1>Your Text summary</h1>
          <p>{text.split(" ").length} words and {text.length} characters</p>
          <p>{0.008*text.split(" ").length}minutes</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"enter something in the text to preview it here"}</p>
        </div>
      
    </>
  );
}
