import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { db } from "./firebase"

export default function Inputs() {

    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }
    
    const handleClick = () => {
        if (name.length === 0) {
            alert("Please enter a name")
        } else if (message.length === 0) {
            alert("Please enter a message")
        } else {
            addDoc(collection(db, "messages"), {
                sender: name,
                date: new Date(),
                content: message
            })
        }
    }

    return (
        <div className="inputs">
            <div className="inputs__group">
                <label htmlFor="nameInput">Name</label>
                <input id="nameInput" type="text" onChange={handleNameChange} value={name} />
            </div>
            <div className="inputs__group">
                <label htmlFor="messageInput">Your Message</label>
                <textarea id="messageInput" onChange={handleMessageChange} value={message} />
            </div>
            <button onClick={handleClick}>Send Message</button>
        </div>
    )
}