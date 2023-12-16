import { v4 as uuidv4 } from "uuid";
import { Menu, MenuElement } from "../types/types.ts";

const fileMenuElements: MenuElement[] = [
  {
    id: uuidv4(),
    text: "Создать",
  },

  {
    id: uuidv4(),
    text: "Скачать",
  },
];
export const fileMenu: Menu = {
  menuElements: fileMenuElements,
};

const correctionMenuElements: MenuElement[] = [
  {
    id: uuidv4(),
    shortcut: "Ctrl+Z",
    text: "Отменить",
  },
  {
    id: uuidv4(),
    shortcut: "Ctrl+Y",
    text: "Повторить",
  },
];
export const correctionMenu: Menu = {
  menuElements: correctionMenuElements,
};
