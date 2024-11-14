const randomRotation = () => Math.random() * 360;

const Snowflake = () => {
    return (
        <div className="snowflake">
            <img src="strawberry.png" className="w-10" style={{ transform: `rotate(${randomRotation()}deg)` }} />
        </div>
    )
}

export default Snowflake