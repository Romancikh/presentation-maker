import "./MenuButton.css";

type MenuButtonProps = {
  label: string;
};

function MenuButton({ label }: MenuButtonProps) {
  return <div className={"menu-bar__button"}>{label}</div>;
}

export default MenuButton;
