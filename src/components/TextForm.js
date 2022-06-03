import React, { useState } from "react";

export default function TextForm(props) {
    const handleClear  = () => {
        let newText ="";
        setText(newText);
        props.showalert("clear text","success")
      };
      const copy = () => {
      //  var text = document.getElementById("mybox")
      //   text.select();
        navigator.clipboard.writeText(text)
        props.showalert("copy text","success")
        document.getSelection().removeAllRanges();
        
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
        
          <h1 className="my-4">{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange} style ={{backgroundColor:props.mode==="dark"?"#13466e":"white",color:props.mode==="dark"?"white":"#042743"}}
              id="mybox"
              rows="8"
            ></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
            convert into upper case
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
            convert into lower case
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
            clear text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copy}>
            copy text
          </button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>
            remove extra spaces
          </button>
        </div>
        <div className="container my-4 " style={{color:props.mode==="dark"?"white":"black"}}>
          <h1>Your Text summary</h1>
          <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
          <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}minutes</p>
          <h2>Preview</h2>
          <p>{text.length>0?text:"enter something in the text to preview it here"}</p>
        </div>
      
    </>
  );
}
