import { useEffect, useState } from "react";
import Snowflake from "./Snowflake"

interface SnowflakesProps {
    incrementCount: () => void;
}

const Snowflakes = ({ incrementCount }: SnowflakesProps) => {
    const [visible, setVisible] = useState(true);

    const handleClick = () => {
        incrementCount();
        setVisible(false);
    }

    useEffect(() => {
        if (!visible) {
            const timer = setTimeout(() => {
                setVisible(true);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [visible]);

    return (
        visible && (
            <div className="snowflakes" aria-hidden="true">
                <Snowflake key={1} incrementCount={handleClick} />
                <Snowflake key={2} incrementCount={handleClick} />
                <Snowflake key={3} incrementCount={handleClick} />
                <Snowflake key={4} incrementCount={handleClick} />
                <Snowflake key={5} incrementCount={handleClick} />
                <Snowflake key={6} incrementCount={handleClick} />
                <Snowflake key={7} incrementCount={handleClick} />
                <Snowflake key={8} incrementCount={handleClick} />
                <Snowflake key={9} incrementCount={handleClick} />
                <Snowflake key={10} incrementCount={handleClick} />
            </div>
        )
    )
}

export default Snowflakes