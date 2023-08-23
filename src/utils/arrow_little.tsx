import ArrowSVG from "../assets/arrow_little.svg";

interface ArrowInterface {
    classname?: string;
}

function Arrow_little(props: ArrowInterface) {
    return <img src={ArrowSVG} className={props.classname}></img>;
}

export default Arrow_little;
