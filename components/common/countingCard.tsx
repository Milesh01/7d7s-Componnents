import React, { useState, useEffect } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 1000, className }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil((end - start) / (duration / 50));

    const interval = setInterval(() => {
      setCount((prev) => (prev + increment >= end ? end : prev + increment));
    }, 50);

    return () => clearInterval(interval);
  }, [end, duration]);

  return <h2 className={`${className}`}>{count}K+</h2>;
};

export default Counter;
