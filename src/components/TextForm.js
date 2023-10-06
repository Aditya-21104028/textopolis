import React, { useState } from 'react'


export default function TextForm(props) {
    // To convert entered text to Uppercased text
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);       
        // setText will get newText and then set text = setText using useState...
        props.showAlert("Converted to uppercase!", "success");
    }
    
    // To convert entered text to Lowercased text
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }
    
    // To allow typing in the text area as value={text} with text = "" intially has been set for the textarea below
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    // To clear the complete text area
    const handleClearText = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Textbox cleared!", "success");
    }
    
    // To copy your entered text
    const handleCopy = () => {
        navigator.clipboard.writeText(text);   
        //writes the specified text to the system clipboard and automatically deselects the text after copying
        props.showAlert("Copied to clipboard!", "success");
    }
    
    // To remove the extra spaces
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);       // splitting text acc to one white space or multiple white spaces
        setText(newText.join(" "));             // joining text again by a single space
        props.showAlert("Extra spaces removed!", "success");
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#27374D' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#27374D' : 'white', color: props.mode === 'dark' ? 'white' : '#27374D' }} ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mr-1 my-1" style={{ backgroundColor: props.mode === 'dark' ? '#19A7CE' : '#1B6B93' }} onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" style={{ backgroundColor: props.mode === 'dark' ? '#19A7CE' : '#1B6B93' }} onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1" style={{ backgroundColor: props.mode === 'dark' ? '#19A7CE' : '#1B6B93' }} onClick={handleClearText}>Clear text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" style={{ backgroundColor: props.mode === 'dark' ? '#19A7CE' : '#1B6B93' }} onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary my-1" style={{ backgroundColor: props.mode === 'dark' ? '#19A7CE' : '#1B6B93' }} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#27374D' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                {/* filter function will remove the element from the array formed by split whose arrow function (as stated above) returns fale, else will keep it */}
                {/* the split function parameter here means split on the basis of white spaces as well as a new line */}
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes required to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}
