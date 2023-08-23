import "./styles.css";

import ChatGPTLogo from "../../assets/ChatGPT_logo.png";

interface MessageInterface {
    sentByUser: boolean;
    messageText: string;
}

function MessageBox(props: MessageInterface) {
    let senderTitle = props.sentByUser ? "You" : "Chat GPT";
    
    return (
        <div
            className={`chatpage__message_box ${
                !props.sentByUser ? "response" : null
            }`}
        >
            {props.sentByUser ? (
                <div className="chatpage_message_box_noimg_circle"></div>
            ) : (
                <img
                    src={!props.sentByUser ? ChatGPTLogo : null}
                    className="chatpage_message_box_img"
                ></img>
            )}

            <div className="chatpage_message_box_text">
                <code>{senderTitle}</code>
                <div className="chatpage_message_box_text_content">
                    {props.messageText}
                </div>
            </div>
        </div>
    );
}

export default MessageBox;
