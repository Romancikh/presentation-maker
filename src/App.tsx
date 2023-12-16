import { useContext } from "react";
import Editor from "./components/Editor/Editor.tsx";
import Header from "./components/Header/Header.tsx";
import { PresentationContext } from "./contexts/presentation.tsx";
import classes from "./App.module.css";

function App() {
  const { presentation } = useContext(PresentationContext);

  return (
    <div className={classes.app}>
      <Header presentationName={presentation.name} />
      <Editor presentation={presentation} />
    </div>
  );
}

export default App;
