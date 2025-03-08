import { Fade } from "react-awesome-reveal";

export default function Channels() {
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

  return (
    <>
      <aside className="aside top-left">
        <Fade triggerOnce delay={250} duration={1000}>
          <div className="channels stream">
            {channelsNow.map((channel, index) => (
              <Fade
                triggerOnce
                delay={250 + index * 50}
                duration={500}
                fraction={0}
                key={channel.alt}
              >
                <div className="frame" title={channel.alt}>
                  <img src={channel.src} alt={channel.alt} />
                </div>
              </Fade>
            ))}
          </div>
        </Fade>
      </aside>
      <aside className="aside top-right">
        <Fade triggerOnce delay={250} duration={1000}>
          <div className="channels tv">
            {channelsThen.map((channel, index) => (
              <Fade
                triggerOnce
                delay={250 + index * 50}
                duration={500}
                fraction={0}
                key={channel.alt}
              >
                <div className="frame" title={channel.alt}>
                  <img
                    src={channel.src}
                    alt={channel.alt}
                    style={
                      channel.size === "L"
                        ? { width: "73.5%" }
                        : channel.size === "XL"
                        ? { width: "65%" }
                        : {}
                    }
                  />
                </div>
              </Fade>
            ))}
          </div>
        </Fade>
      </aside>
    </>
  );
}
