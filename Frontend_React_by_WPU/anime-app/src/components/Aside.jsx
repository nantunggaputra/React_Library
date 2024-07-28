import AnimeByGenre from "./AnimeGenre";
import AnimeNews from "./AnimeNews";
import Channels from "./Channels";

export default function Aside() {
  return (
    <>
      <AnimeNews />
      <AnimeByGenre />
      <Channels />
    </>
  );
}
