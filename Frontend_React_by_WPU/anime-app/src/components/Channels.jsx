const channelsNow = [
  {
    src: "watch-anime-in-now/BSTATION.webp",
    alt: "Bstation",
  },
  {
    src: "watch-anime-in-now/CRUNCHYROLL.webp",
    alt: "Crunchyroll",
  },
  {
    src: "watch-anime-in-now/DISNEYPLUSHOTSTAR.webp",
    alt: "Disney+ Hotstar",
  },
  {
    src: "watch-anime-in-now/FUNIMATION.webp",
    alt: "Funimation",
  },
  {
    src: "watch-anime-in-now/GENFLIX.webp",
    alt: "Genflix",
  },
  {
    src: "watch-anime-in-now/IQIYI.webp",
    alt: "iQIYI",
  },
  {
    src: "watch-anime-in-now/NETFLIX.webp",
    alt: "Netflix",
  },
  {
    src: "watch-anime-in-now/PRIMEVIDEO.webp",
    alt: "Prime Video",
  },
  {
    src: "watch-anime-in-now/VIDIO.webp",
    alt: "Vidio",
  },
  {
    src: "watch-anime-in-now/VIU.webp",
    alt: "Viu",
  },
  {
    src: "watch-anime-in-now/WETV.webp",
    alt: "WeTV",
  },
];

const channelsThen = [
  {
    src: "watch-anime-in-then/ANTV.webp",
    alt: "ANTV (old)",
    size: "M",
  },
  {
    src: "watch-anime-in-then/GLOBALTV.webp",
    alt: "Global TV (old renamed)",
    size: "M",
  },
  {
    src: "watch-anime-in-then/INDOSIAR.webp",
    alt: "Indosiar (old)",
    size: "L",
  },
  {
    src: "watch-anime-in-then/RCTI.webp",
    alt: "RCTI (old)",
    size: "M",
  },
  {
    src: "watch-anime-in-then/SCTV.webp",
    alt: "SCTV (old)",
    size: "L",
  },
  {
    src: "watch-anime-in-then/SPACETOON.webp",
    alt: "Spacetoon (closed)",
    size: "L",
  },
  {
    src: "watch-anime-in-then/TPI.webp",
    alt: "TPI (closed)",
    size: "XL",
  },
  {
    src: "watch-anime-in-then/TRANSTV.webp",
    alt: "Trans TV (old)",
    size: "XL",
  },
  {
    src: "watch-anime-in-then/TV7.webp",
    alt: "TV7 (closed)",
    size: "XL",
  },
];

export default function Channels() {
  return (
    <>
      <aside className="aside top-left">
        <div className="channels stream">
          {channelsNow.map((stream) => (
            <div className="frame" key={stream.alt} title={stream.alt}>
              <img src={stream.src} alt={stream.alt} />
            </div>
          ))}
        </div>
      </aside>
      <aside className="aside top-right">
        <div className="channels tv">
          {channelsThen.map((tv) => (
            <div className="frame" key={tv.alt} title={tv.alt}>
              <img
                src={tv.src}
                alt={tv.alt}
                style={
                  tv.size === "L"
                    ? { width: "73.5%" }
                    : tv.size === "XL"
                    ? { width: "65%" }
                    : {}
                }
              />
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}
