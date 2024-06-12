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

export default function Channels() {
  return (
    <>
      <div className="aside top-left">
        <div className="channels">
          {channelsNow.map((stream) => (
            <img
              src={stream.src}
              alt={stream.alt}
              title={stream.alt}
              key={stream.alt}
            />
          ))}
        </div>
      </div>
      <div className="aside top-right"></div>
    </>
  );
}
