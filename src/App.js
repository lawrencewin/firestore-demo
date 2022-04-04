import "./App.css"

function Message(props) {
    return (
        <div className="message">
            <div className="message__sender">{props.sender}</div>
            <div className="message__date">{props.date}</div>
            <p className="message__content">{props.content}</p>
        </div>
    )
}

function Messages(props) {
    return (
        <div className="messages">
            { props.messages.map((message) => <Message 
                sender={message.sender}
                date={message.date}
                content={message.content}
            />) }
        </div>
    )
}

function Inputs(props) {
    return (
        <div className="inputs">
            <div className="inputs__group">
                <label htmlFor="nameInput">Name</label>
                <input id="nameInput" type="text" />
            </div>
            <div className="inputs__group">
                <label htmlFor="messageInput">Your Message</label>
                <textarea id="messageInput"></textarea>
            </div>
            <button>Send Message</button>
        </div>
    )
}

function App() {
    return (
        <div className="app">
            <h1>AET Chat</h1>
            <Messages messages={[
                { sender: "Larry", date: "9/4/20", content: "Hello!" }
            ]} />
            <Inputs />
        </div>
    )
}

export default App
