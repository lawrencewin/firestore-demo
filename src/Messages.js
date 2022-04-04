function Message(props) {
    return (
        <div className="message">
            <div className="message__sender">{props.sender}</div>
            <div className="message__date">{props.date}</div>
            <p className="message__content">{props.content}</p>
        </div>
    )
}

export default function Messages(props) {
    return (
        <div className="messages">
            { props.messages.map((message, i) => <Message 
                sender={message.sender}
                date={message.date}
                content={message.content}
                key={i}
            />) }
        </div>
    )
}