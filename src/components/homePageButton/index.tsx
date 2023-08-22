import "./styles.css";

export enum buttonColorEnum {
    blue = "blue",
    white = "white",
    black = "black",
}

interface buttonProps {
    text: string;
    color: buttonColorEnum;
    onclick: React.MouseEventHandler<HTMLButtonElement>;
    classname?: string;
}

function Button(props: buttonProps) {
    const buttonColor = props.color ? props.color : buttonColorEnum.white;
    return (
        <button
            className={`${props.classname} button ${buttonColor}`}
            onClick={props.onclick}
        >
            {props.text}
        </button>
    );
}

export default Button;
