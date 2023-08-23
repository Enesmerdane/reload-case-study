import ChatImage from "../assets/section2_chat_image.png";

interface ImageProps {
    classname?: string;
    altText?: string;
    perspective?: number;
}
function Chat_image(props: ImageProps) {
    let style = { transform: `rotateX( ${props.perspective}deg)` };

    return (
        <img
            src={ChatImage}
            alt={props.altText}
            className={props.classname}
            style={style}
        />
    );
}

export default Chat_image;
