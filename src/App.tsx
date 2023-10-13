import { Color, Presentation, Slide } from "./types/types.ts";
import Header from "./components/Header/Header.tsx";
import SlideBar from "./components/SlideBar/SlideBar.tsx";
import Workspace from "./components/Workspace/Workspace.tsx";

type AppProps = {
  presentation: Presentation;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function App({ presentation }: AppProps) {
  function initNewPresentation() {
    const background: Color = "#fff";

    const newSlide: Slide = {
      background: background,
      id: "1",
      objects: [],
      selectObjects: [],
    };

    presentation.name = "";
    presentation.slides = [newSlide];
    presentation.currentSlide = newSlide;
  }

  initNewPresentation();

  return (
    <div>
      <Header />
      <SlideBar slides={presentation.slides} />
      <Workspace slide={presentation.currentSlide} />
    </div>
  );
}

export default App;
