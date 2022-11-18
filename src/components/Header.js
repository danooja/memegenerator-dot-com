import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./img/troll-face.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">source: i.imgflip.com</h4>
        </header>
    )
}