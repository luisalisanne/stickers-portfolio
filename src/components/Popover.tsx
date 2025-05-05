import { useRef, useState } from "react";
import { StickerData } from "../types/StickerData";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface PopoverProps {
  sticker: StickerData;
}

function Popover(props: PopoverProps) {
  const { sticker } = props;
  const [showInfo, setShowInfo] = useState(false);

  const triggerRef = useRef<HTMLImageElement | null>(null);

  // handle click on sticker
  const handleClick = () => {
    setShowInfo(!showInfo);
    console.log("clicked ", triggerRef.current);
  };

  // use custom hook to close popover when clicking outside
  const popoverRef = useOutsideClick(() => {
    console.log("clicked outside", popoverRef.current);
    setShowInfo(false);
  });

  return (
    <>
      {/* trigger to open the popover on click */}
      <span
        key={sticker.id}
        ref={triggerRef}
        onClick={() => handleClick()}
        className="peer peer-hover:opacity-25 hover:cursor-pointer has-[~_.peer:hover]:opacity-25"
      >
        <img
          key={sticker.id}
          src={sticker.src}
          alt={sticker.title}
          className={`border-box relative rounded object-contain ${sticker.id % 2 ? "w-48 rotate-10" : "w-52 -rotate-10"}`}
        />

        {/* Popover (appears on click, closes when leaving the element or clicking on another one) */}
        {showInfo && (
          <div
            ref={popoverRef}
            className={`absolute z-25 mx-[-70px] flex max-w-96 flex-col gap-2 bg-white p-4 text-xs shadow-lg lg:text-sm ${sticker.id <= 10 ? "my-[-20px]" : "my-[-400px]"}`}
          >
            <span className="flex justify-between">
              <h2 className="font-bold text-pink-500">{sticker.title}</h2>
              <button
                className="h-6 border px-2 py-1 text-orange-500 hover:cursor-pointer"
                onClick={() => setShowInfo(!showInfo)}
              >
                {showInfo ? "close" : "open"}
              </button>
            </span>
            <p>{sticker.text}</p>
            {sticker.url && (
              <a
                href={sticker.url}
                target="_blank"
                className="break-all underline hover:font-bold hover:text-orange-500"
              >
                {sticker.url}
              </a>
            )}
          </div>
        )}
      </span>
    </>
  );
}

export default Popover;
