import React from "react";
import SendButtonSVG from "../assets/messsage_send_button.svg";

interface SendButtonProps {
    classname?: string;
    altText?: string;
}
function SendButton(props: SendButtonProps) {
    return (
        <img
            src={SendButtonSVG}
            alt={props.altText}
            className={props.classname}
        />
    );
}

export default SendButton;
