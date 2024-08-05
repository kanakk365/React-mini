import { useState } from "react";
import MenuList from "./MenuList";

export default function MenuItem({ item }) {
  const [child, setChild] = useState({});

  function handleToogle(itemLable){
    setChild(prevChild=>({
        ...prevChild,
        [itemLable] : !prevChild[itemLable]
    }));
  }
  return (
    <li>
      <div style={{display: 'flex' , gap : '20px'}}>
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={()=> handleToogle(item.label)}>
            {child[item.label] ? <>-</>: <>+</>}
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && child[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
