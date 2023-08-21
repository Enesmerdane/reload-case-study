import React from "react";

import LogoSVG from "../assets/logo.svg";

interface LogoProps {
    classname?: string;
}

function Logo(props: LogoProps) {
    return <img src={LogoSVG} className={props.classname} />;
}

export default Logo;
