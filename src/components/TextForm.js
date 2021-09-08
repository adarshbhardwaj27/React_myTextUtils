import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpCLick = () => {
        console.log("UpperCase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState("Write Somethin Here!!");
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpCLick}>Convert to uppercase</button>
        </div>
        <div className="container my-3">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
        </div>
        </>
    )
}
