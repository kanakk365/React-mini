import MenuItem from "./MenuItem";


export default function MenuList({ list = [] }) {
  return (
    <ul className="menuList-Container">
      {list && list.length
        ? list.map((listItem) => <MenuItem item={listItem}/>)
        : null}
    </ul>
  );ul
}
