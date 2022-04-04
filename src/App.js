import { useState, useEffect } from "react"
import { collection, onSnapshot } from "firebase/firestore"
import { db } from "./firebase"
import Messages from "./Messages"
import Inputs from "./Inputs"
import "./App.css"

function App() {

    const [ messages, setMessages ] = useState([])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, "messages"), (snapshot) => {
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added") {
                    setMessages(messages => {
                        const data = change.doc.data()
                        data.date = data.date.toDate().toLocaleString()
                        return [data, ...messages]
                    })
                }
            })
        })
        return () => unsubscribe()
    }, [])

    return (
        <div className="app">
            <h1>AET Chat</h1>
            <Messages messages={messages} />
            <Inputs />
        </div>
    )
}

export default App
