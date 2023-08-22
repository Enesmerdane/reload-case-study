import React from "react";
import ChatImage from "../assets/section2_chat_image.png";

interface ImageProps {
    classname?: string;
    altText?: string;
}
function Chat_image(props: ImageProps) {
    return <img src={ChatImage} alt={props.altText} className={props.classname} />;
}

export default Chat_image;
