import AnimeByGenre from "./AnimeGenre";
import AnimeNews from "./AnimeNews";
import Tabloid from "./Tabloid";
import Channels from "./Channels";

export default function Aside() {
  return (
    <>
      <AnimeByGenre />
      <AnimeNews />
      <Tabloid />
      <Channels />
    </>
  );
}
