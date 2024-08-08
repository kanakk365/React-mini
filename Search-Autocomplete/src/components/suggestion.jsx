import "./style.css";
export function Suggestion({ data, handelClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handelClick} key={index}>
              {" "}
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
