import "./Header.css";
import MenuBar from "../common/MenuBar/MenuBar.tsx";
import ToolBar from "../ToolBar/ToolBar.tsx";

type HeaderProps = {
  namePresentation: string;
};

function Header({ namePresentation }: HeaderProps) {
  return (
    <div className="header">
      <MenuBar namePresentation={namePresentation} />
      <ToolBar />
    </div>
  );
}

export default Header;
