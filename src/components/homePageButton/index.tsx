import styles from "./styles.module.css";

export enum buttonColorEnum {
    white = "#FFFFFF",
    blue = "#B6FBFF",
}

interface buttonProps {
    text: string;
    color: buttonColorEnum;
    onclick: React.MouseEventHandler<HTMLButtonElement>;
}

function Button(props: buttonProps) {
    const buttonColor = props.color ? props.color : buttonColorEnum.white;
    const buttonStyle = { backgroundColor: buttonColor, ...styles };

    return (
        <button className={styles.button} onClick={props.onclick}>
            {props.text}
        </button>
    );
}

export default Button;
