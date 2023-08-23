import VectorSVG from "../assets/vector_1.svg";

interface VectorProps {
    classname?: string;
}

function Vector(props: VectorProps) {
    return <img src={VectorSVG} className={props.classname} />;
}

export default Vector;
