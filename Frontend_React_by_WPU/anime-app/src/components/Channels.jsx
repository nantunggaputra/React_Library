const channelsNow = [
  {
    src: "watch-anime-in-now/BSTATION.png",
    alt: "Bstation",
  },
  {
    src: "watch-anime-in-now/CRUNCHYROLL.png",
    alt: "Crunchyroll",
  },
  {
    src: "watch-anime-in-now/DISNEYPLUSHOTSTAR.png",
    alt: "Disney+ Hotstar",
  },
  {
    src: "watch-anime-in-now/FUNIMATION.png",
    alt: "Funimation",
  },
  {
    src: "watch-anime-in-now/GENFLIX.png",
    alt: "Genflix",
  },
  {
    src: "watch-anime-in-now/IQIYI.png",
    alt: "iQIYI",
  },
  {
    src: "watch-anime-in-now/NETFLIX.png",
    alt: "Netflix",
  },
  {
    src: "watch-anime-in-now/PRIMEVIDEO.png",
    alt: "Prime Video",
  },
  {
    src: "watch-anime-in-now/VIDIO.png",
    alt: "Vidio",
  },
  {
    src: "watch-anime-in-now/VIU.png",
    alt: "Viu",
  },
  {
    src: "watch-anime-in-now/WETV.png",
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
