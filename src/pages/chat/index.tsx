import "./styles.css";

import Arrow_little from "../../utils/arrow_little";
import Logo from "../../utils/logo";
import SendButton from "../../utils/message_send_button";
import MessageBox from "../../components/messageBox";

import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { getResult } from "../../services/Chatgpt";

interface MessageInterface {
    sentByUser: boolean;
    messageText: string;
}

function Chat() {
    const [textInput, setInput] = useState<string>("");
    const [messages, setMessages] = useState<MessageInterface[]>([]);

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleResponseMessage = (message: string, error: string) => {
        if (error) {
            window.alert(
                "There has been an error while getting the response\n" + error
            );
            return;
        } else {
            setMessages((prevState) => [
                { sentByUser: false, messageText: message },
                ...prevState,
            ]);
        }
        textAreaRef.current!.disabled = false;
    };

    const handleQuestion = (message: string, event: KeyboardEvent) => {
        event.preventDefault();
        console.log("textInput: ", textInput);
        console.log("message: ", message);

        if (textAreaRef.current?.value !== "") {
            let question = textAreaRef.current?.value;
            setMessages((prevState) => [
                {
                    sentByUser: true,
                    messageText: question!,
                },
                ...prevState,
            ]);
            textAreaRef.current!.disabled = true;
            setInput("");
            getResult(question!, handleResponseMessage);
        } else {
            window.alert("You should write something before you send.");
        }
    };

    useEffect(() => {
        const keyDownHandler = (event: KeyboardEvent) => {
            console.log("User pressed: ", event.key);
            if (event.key === "Enter") {
                handleQuestion(textInput, event);
            }
        };

        document.addEventListener("keydown", keyDownHandler);

        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

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
                            ref={textAreaRef}
                            value={textInput}
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                        />
                        <SendButton
                            classname="chatpage__send_button"
                            onclick={() => {
                                if (textInput !== "") {
                                    setMessages((prevState) => [
                                        {
                                            sentByUser: true,
                                            messageText: textInput,
                                        },
                                        ...prevState,
                                    ]);
                                    let question = textInput;
                                    setInput("");
                                    textAreaRef.current!.disabled = true;
                                    getResult(question, handleResponseMessage);
                                } else {
                                    window.alert(
                                        "You should write something before you send."
                                    );
                                }
                            }}
                        />
                    </div>
                    <div className="chatpage__message_container">
                        {messages.map((message, id) => (
                            <MessageBox
                                key={id}
                                sentByUser={message.sentByUser}
                                messageText={message.messageText}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
