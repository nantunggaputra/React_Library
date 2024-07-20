import { useState } from "react";

const studioMasterpiece = [
  {
    studio: "WIT",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
      title: "Shingeki no Kyojin",
    },
  },
  {
    studio: "A-1 Pictures",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1295/106551l.jpg",
      title: "Kaguya-sama: Love Is War",
    },
  },
  {
    studio: "Production I.G.",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/11/50857l.jpg",
      title: "Ghost in the Shell: Stand Alone Complex",
    },
  },
  {
    studio: "P.A. Works",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1244/111115l.jpg",
      title: "Angel Beats!",
    },
  },
  {
    studio: "J.C. Staff",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/13/22128l.jpg",
      title: "Toradora!",
    },
  },
  {
    studio: "MAPPA",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
      title: "Jujutsu Kaisen",
    },
  },
  {
    studio: "Studio Bones",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/10/78745l.jpg",
      title: "Boku no Hero Academia",
    },
  },
  {
    studio: "Studio Ghibli",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1764/138714l.jpg",
      title: "Whisper of the Heart",
    },
  },
  {
    studio: "Toei Animation",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1277/142022l.jpg",
      title: "Dragon Ball Z",
    },
  },
  {
    studio: "Clover Works",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
      title: "Spy X Family",
    },
  },
  {
    studio: "Studio Pierrot",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1141/142503l.jpg",
      title: "Naruto",
    },
  },
  {
    studio: "Ufotable",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
      title: "Kimetsu no Yaiba",
    },
  },
  {
    studio: "Trigger",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/2/42989l.jpg",
      title: "Little Witch Academia",
    },
  },
  {
    studio: "Kyoto Animation",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1795/95088l.jpg",
      title: "Violet Evergarden",
    },
  },
  {
    studio: "Madhouse",
    image: {
      src: "https://cdn.myanimelist.net/images/anime/1337/99013l.jpg",
      title: "Hunter x Hunter",
    },
  },
];

export default function AnimeByStudio() {
  const [selectedStudio, setSelectedStudio] = useState("Studio Ghibli");

  const handleStudioClick = (studio) => {
    setSelectedStudio(studio);
  };

  const selectedStudioImage = studioMasterpiece.find(
    (studio) => studio.studio === selectedStudio
  ).image;

  return (
    <>
      <div className="masterpiece">
        <h2>
          <span style={{ color: "#d372b8" }}>{selectedStudio}</span> Masterpiece
        </h2>
      </div>
      <div className="studio">
        <div className="studio-all">
          {studioMasterpiece.map((studio) => (
            <button
              key={studio.studio}
              onClick={() => handleStudioClick(studio.studio)}
              className={studio.studio === selectedStudio ? "selected" : ""}
            >
              {studio.studio}
            </button>
          ))}
        </div>
        <div className="studio-overview">
          <div className="studio-image">
            <small>💿</small>
            <img
              src={selectedStudioImage.src}
              alt={selectedStudioImage.title}
            />
          </div>
          <p>
            <span>{selectedStudioImage.title}</span>
          </p>
        </div>
      </div>
    </>
  );
}
