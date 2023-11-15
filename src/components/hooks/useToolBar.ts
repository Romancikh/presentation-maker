import { Presentation } from "../../types/types";

export const useToolBar = (presentation: Presentation) => {
  const download = () => {
    const data = JSON.stringify(presentation, null, 2);
    const link = document.createElement("a");
    const file = new Blob([data], { type: "application/json" });
    link.href = URL.createObjectURL(file);
    link.download = presentation.name + ".json";
    link.click();
  };

  return { download };
};
