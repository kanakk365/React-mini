import MenuList from "./MenuList.jsx";
import menus from "./data.js";

export default function TreeView({ menus = [] }) {
  return (
    <div className="treeView-Container">
      <MenuList list={menus} />
      
    </div>
  );
}
