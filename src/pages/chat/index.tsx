import "./styles.css";

import Arrow_little from "../../utils/arrow_little";
import Logo from "../../utils/logo";
import SendButton from "../../utils/message_send_button";
import MessageBox from "../../components/messageBox";

import { Link } from "react-router-dom";
import { useState } from "react";

interface MessageInterface {
    sentByUser: boolean;
    messageText: string;
}

function Chat() {
    const [textInput, setInput] = useState("");
    const [messages, setMessages] = useState<MessageInterface[]>([]);

    return (
        <div className="ChatPageBody">
            <div className="chatpage__section1">
                <Link to="/" className="chatpage__section1_backbutton">
                    <Arrow_little classname="chatpage__section1_arrow" />
                    Back
                </Link>
                <div className="chatpage__section1_title">
                    <code>AI</code> ChatBot
                </div>
                <div className="chatpage__section1_description">
                    We’ve trained a model called ChatGPT which interacts in a
                    conversational way.
                </div>
            </div>
            <div className="chatpage__section2">
                <Logo classname="chatpage__section2_logo" />
                <div className="chatpage_chat_screen">
                    <div className="chatpage__input_field">
                        {/* <input /> */}
                        <textarea
                            placeholder="Enter your message"
                            value={textInput}
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                        />
                        <SendButton
                            classname="chatpage__send_button"
                            onclick={() => {
                                window.alert(textInput);
                            }}
                        />
                    </div>
                    <div className="chatpage__message_container">
                        {messages.map((message, id) => (
                            <MessageBox
                                sentByUser={message.sentByUser}
                                messageText={message.messageText}
                            />
                        ))}
                        <MessageBox sentByUser={true} messageText="yes" />
                        <MessageBox sentByUser={true} messageText="yes" />
                        <MessageBox sentByUser={true} messageText="yes" />
                        <MessageBox sentByUser={true} messageText="yes" />
                        <MessageBox sentByUser={true} messageText="yes" />
                        <MessageBox sentByUser={true} messageText="yes" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
