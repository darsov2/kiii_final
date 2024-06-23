import React, { useEffect, useRef, useState } from "react";

const Counter = (props) => {
  const [value, setValue] = useState(null);
  const start = props.start;
  const end = props.end;

  const ref = useRef(start);
  const count = end / 200;

  const counter = () => {
    if (ref.current < end) {
      const res = Math.ceil(ref.current + count);
      if (res > end) {
        return setValue(end);
      }
      setValue(res);
      ref.current = res;
    }
    setTimeout(counter, 10);
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      counter();
    }
    return () => {
      mounted = false;
    };
  }, [end]);

  return (
    <>
      <span className="footer-number">{value}</span>
    </>
  );
};

export default Counter;
