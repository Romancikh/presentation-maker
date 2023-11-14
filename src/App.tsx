import Editor from "./components/Editor/Editor.tsx";
import Header from "./components/Header/Header.tsx";
import { Presentation } from "./types/types.ts";
import classes from "./App.module.css";

type AppProps = {
  presentation: Presentation;
};

function App({ presentation }: AppProps) {
  return (
    <div className={classes.app}>
      <Header presentationName={presentation.name} />
      <Editor presentation={presentation} />
    </div>
  );
}

export default App;
