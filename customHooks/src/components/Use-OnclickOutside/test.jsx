import { useRef, useState } from "react";
import useOutsideClick from "./Index";

export default function UseOnclickTest() {
  const ref = useRef();
  useOutsideClick({ ref, handler: () => setShow(false) });

  const [show, setShow] = useState(false);

  return (
    <div ref={ref}>
      {show ? (
        <div>
          <h1> This is random content</h1>
          <p> Click outside of this to close this. </p>
        </div>
      ) : (
        <button onClick={() => setShow(true)}> Show Content</button>
      )}
    </div>
  );
}
