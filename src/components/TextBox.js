import React, { useState } from 'react'

export default function TextBox(props) {
    const [text, setText] = useState("this is the text")
    const [nam, setnam] = useState(false)

    //one time used function to clear the tect when we click it
    function some() {
        if (!nam) {
            clear()
            setnam(true)
        } else {

        }
    };
    //function that will get triggered when onchange happens 
    function hehaa(event) {
        setText(event.target.value)
    }

    // This will upper case the value
    const up = () => {
        setText(text.toUpperCase())
        props.showAlert("Converted to UpperCase", "success")
    }

    // This will lowercase the value
    const down = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase", "success")

    }

    // this will clear
    const clear = () => {
        setText("")
        props.showAlert("Cleared the Text", "success")

    }
    //it will remove extra Spaces
    const extraSpace = () => {
        setText(text.split(' ').filter(Boolean).join(' '))
        props.showAlert("Removed extra Spaces", "success")

    }
    //it will copy the text
    const copy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to Clipboard", "success")

    }



    return (
        <>
            <div className='container my-3' >
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="box" rows="8" value={text} onChange={hehaa} onClick={some} style={{ backgroundColor: props.color.back === "white" ? "white" : "#282c34", color: props.mode === "dark" ? "white" : "#282c34"}}></textarea>
                    <button className="btn btn-primary m-2 uppercase" onClick={up}>UpperCase</button>
                    <button className="btn btn-primary m-1 lowercase" onClick={down}>LowerCase</button>
                    <button className="btn btn-primary m-1 clear" onClick={clear}>Clear</button>
                    <button className="btn btn-primary m-1 extraSpace" onClick={extraSpace}>Extra Space Remover</button>
                    <button className="btn btn-primary m-1 copy" onClick={copy}>Copy</button>
                </div>
            </div>
            <div className='container my-3' >
                <h2>Text Summery</h2>
                <p>{text.split(" ").length} words / {text.length} Characters</p>
                <p>{0.008 * text.length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

