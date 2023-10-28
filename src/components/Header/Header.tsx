import "./Header.css";
import MenuBar from "../common/MenuBar/MenuBar.tsx";
import ToolBar from "../ToolBar/ToolBar.tsx";

type HeaderProps = {
  presentationName: string;
};

function Header({ presentationName }: HeaderProps) {
  return (
    <div className="header">
      <MenuBar presentationName={presentationName} />
      <ToolBar />
    </div>
  );
}

export default Header;
