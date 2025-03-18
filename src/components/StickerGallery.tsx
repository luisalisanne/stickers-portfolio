// import { shuffleStickers } from "../helpers/shuffleStickers";
import useScreenSize from "../hooks/useScreenSize";
import { StickerData } from "../types/StickerData";
import StickerListItem from "./StickerListItem";
import Tooltip from "./Tooltip";
import TooltipContent from "./TooltipContent";
import { useTranslation } from "react-i18next";

function StickerGallery() {
  const { t } = useTranslation();

  // get array with sticker data from i18next
  const stickers = t<"stickers", { returnObjects: true }, StickerData[]>(
    "stickers",
    {
      returnObjects: true,
    },
  );

  // conditionally render content depending on the size of the device
  const screenSize = useScreenSize();

  return screenSize.width > 768 ? (
    <>
      <div className="m-auto grid aspect-16/10 w-[80%] grid-cols-5 grid-rows-3 content-evenly items-center justify-items-center overflow-hidden rounded-2xl bg-[url(/src/assets/images/macbook.png)] bg-cover bg-center p-12">
        {/* For each sticker in the list, render an image item that displays some information on hover*/}
        {stickers.map((sticker) => (
          <Tooltip
            side="top"
            content={
              <TooltipContent
                title={sticker.title}
                text={sticker.text}
                url={sticker.url}
              />
            }
          >
            <img
              className={`border-box peer object-contain peer-hover:opacity-25 has-[~_.peer:hover]:opacity-25 ${stickers.indexOf(sticker) % 2 ? "rotate-10" : "-rotate-15"}`}
              key={sticker.id}
              src={sticker.src}
              alt={sticker.title}
            />
          </Tooltip>
        ))}
      </div>
    </>
  ) : (
    <ul className="mx-auto mt-[5vh] flex w-full flex-col gap-2 bg-indigo-600 p-6">
      {stickers.map((sticker) => (
        <StickerListItem
          id={sticker.id}
          src={sticker.src}
          title={sticker.title}
          text={sticker.text}
          url={sticker.url}
        />
      ))}
    </ul>
  );
}

export default StickerGallery;
