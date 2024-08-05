import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingleSelection(id) {
    setSelected(id === selected ? null : id);
  }
  function handelMultiSelection(id) {
    let cypMulti = [...multi];
    const findIndex = cypMulti.indexOf(id);

    if (findIndex === -1) cypMulti.push(id);
    else cypMulti.splice(findIndex, 1);
    setMulti(cypMulti);
    console.log(multi);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMulti(!enableMulti)}>
        Enable multi selection
      </button>
      <div className="accordian">
        {data && data.length > 0
          ? data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMulti
                      ? () => handelMultiSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                >
                  <div className="con">
                    <h3> {dataItem.question} </h3>
                    <span>
                      <i class="ri-arrow-down-wide-line"></i>
                    </span>
                  </div>

                  <div>
                    {enableMulti
                      ? multi.indexOf(dataItem.id) !== -1 && (
                          <div className="content">{dataItem.answer}</div>
                        )
                      : selected === dataItem.id && (
                          <div className="content">{dataItem.answer}</div>
                        )}
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
