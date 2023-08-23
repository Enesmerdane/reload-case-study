import React from "react";
import SendButtonSVG from "../assets/messsage_send_button.svg";

interface SendButtonProps {
    classname?: string;
    onclick: any;
}
function SendButton(props: SendButtonProps) {
    return (
        <img
            src={SendButtonSVG}
            className={props.classname}
            onClick={props.onclick}
        />
    );
}

export default SendButton;
