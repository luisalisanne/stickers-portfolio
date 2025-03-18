import About from "./components/About.tsx";
import StickerGallery from "./components/StickerGallery";
import "./i18nextConfig.ts";

function App() {
  return (
    <div className="md:align-center bg-teal-600 font-mono text-xs text-indigo-900 md:flex md:h-screen md:w-screen md:items-center md:text-sm">
      <About />
      <StickerGallery />
    </div>
  );
}

export default App;
