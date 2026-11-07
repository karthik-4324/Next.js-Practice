"use client";

import { useState } from "react";

export default function Counter({ noteTitle }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{noteTitle}</h2>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
}
