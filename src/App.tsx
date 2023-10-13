import Editor from "./components/Editor/Editor.tsx";
import Header from "./components/Header/Header.tsx";
import { Presentation } from "./types/types.ts";

type AppProps = {
  presentation: Presentation;
};

function App({ presentation }: AppProps) {
  return (
    <div>
      <Header />
      <Editor presentation={presentation} />
    </div>
  );
}

export default App;
