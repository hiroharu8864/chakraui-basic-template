import { FC, memo, useEffect, useState } from "react";

export const Timer: FC = memo(() => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div>
        <p>Timer CountUp {count}</p>
      </div>
    </>
  );
});
