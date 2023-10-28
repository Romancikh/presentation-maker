import { Option } from "../types/types.ts";
import { v4 as uuidv4 } from "uuid";

export const fontOptions: Option[] = [
  {
    id: uuidv4(),
    label: "Roboto",
    value: "Roboto",
  },
  {
    id: uuidv4(),
    label: "Arial",
    value: "Arial",
  },
];
