const randomRotation = () => Math.random() * 360;

interface SnowflakeProps {
    incrementCount: () => void;
}

const Snowflake = ({ incrementCount }: SnowflakeProps) => {
    return (
        <button
            onClick={incrementCount}
            className="snowflake"
        >
            <img src="strawberry.png" className="w-10" style={{ transform: `rotate(${randomRotation()}deg)` }} />
        </button>
    )
}

export default Snowflake