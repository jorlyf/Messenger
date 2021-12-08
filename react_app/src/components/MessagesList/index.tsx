import Message from "../../models/Message";

import styles from "./MessagesList.module.scss";

const MessagesList = ({ messages }: { messages: Message[] }) => {
    return (
        <>
            {messages.map((message: Message) =>
                <MessageComponent key={message.id} message={message} />
            )}
        </>
    )
}

const MessageComponent = ({ message }: { message: Message }) => {
    const getStyles = () => {
        if (message.isMy)
            return styles.mymessage;
        return styles.message;
    }

    return (
        <div className={getStyles()}>
            <span className={styles.username}>{message.username}</span>
            <span>{message.text}</span>
        </div>
    )
}

export default MessagesList;