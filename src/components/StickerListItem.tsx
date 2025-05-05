import { useState } from "react";
import { StickerData } from "../types/StickerData";

function StickerListItem(props: StickerData) {
  const { id, src, title, text, url } = props;
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="bg-purple-200 p-1">
      <div key={id} className="flex justify-between">
        <div className="flex items-center gap-4 p-1">
          {!showInfo && (
            <img
              className={`w-12 object-contain ${id % 2 ? "rotate-10" : "-rotate-15"}`}
              src={src}
              alt={title}
            />
          )}
          <div className={`text-pink-500 ${showInfo && "mb-2 font-bold"}`}>
            {title}
          </div>
        </div>
        <button
          className="h-6 border px-2 py-1 text-orange-500 hover:cursor-pointer"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? "close" : "open"}
        </button>
      </div>

      {/* expand to show more information on mobile */}
      {showInfo && (
        <div className="flex gap-1">
          <img
            className={`w-36 object-contain p-2 ${id % 2 ? "rotate-10" : "-rotate-15"}`}
            src={src}
            alt={title}
          />
          <div className="mx-2 flex flex-col gap-2">
            <span className="text-wrap">{text}</span>
            {url && (
              <a
                className="break-all underline hover:font-bold hover:text-pink-400"
                href={url}
              >
                {url}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default StickerListItem;
