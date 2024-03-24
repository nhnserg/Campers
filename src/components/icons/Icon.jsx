import sprite from "../../assets/icons/sprites.svg"

const Icon = ({ width, height, svg }) => {
    return (
        <svg width={width} height={height} style={{ stroke: "none" }}>
            <use href={`${sprite}#${svg}`}></use>
        </svg>
    );
};
export default Icon;


