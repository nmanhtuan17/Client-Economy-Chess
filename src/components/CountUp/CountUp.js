import React, { useEffect, useRef, useState } from 'react';

const CountUp = ({ end }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const observerRef = useRef();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCount();
          observerRef.current.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observerRef.current.observe(ref.current);
    }

    return () => observerRef.current && observerRef.current.disconnect();
  }, [ref]);

  const startCount = () => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 10);

    const updateCount = () => {
      start += increment;
      if (start < end) {
        setCount(Math.ceil(start));
        setTimeout(updateCount, 10);
      } else {
        setCount(end);
      }
    };

    updateCount();
  };

  return (
    <div ref={ref}>
      {count.toLocaleString()}
    </div>
  );
};

export default CountUp;
