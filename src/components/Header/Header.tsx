import MenuBar from "../common/MenuBar/MenuBar.tsx";
import ToolBar from "../ToolBar/ToolBar.tsx";
import classes from "./Header.module.css";

type HeaderProps = {
  presentationName: string;
};

function Header({ presentationName }: HeaderProps) {
  return (
    <div className={classes.header}>
      <MenuBar presentationName={presentationName} />
      <ToolBar />
    </div>
  );
}

export default Header;
