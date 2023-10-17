import "./Header.css";
import MenuBar from "../common/MenuBar/MenuBar.tsx";
import ToolBar from "../ToolBar/ToolBar.tsx";

function Header() {
  return (
    <div className="header">
      <MenuBar />
      <ToolBar />
    </div>
  );
}

export default Header;
