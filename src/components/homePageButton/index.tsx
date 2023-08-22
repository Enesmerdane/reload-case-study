import styles from "./styles.module.css";

enum buttonColorEnum {
    white = "#FFFFFF",
    blue = "#B6FBFF",
}

interface buttonProps {
    text: string;
    color?: buttonColorEnum;
}

function Button(props: buttonProps) {
    const buttonColor = props.color ? props.color : buttonColorEnum.white;
    const buttonStyle = { backgroundColor: buttonColor, ...styles };

    return <button style={buttonStyle}>{props.text}</button>;
}

export default Button;
