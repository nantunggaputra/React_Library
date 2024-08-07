import { Fade } from "react-awesome-reveal";
import AnimeByGenre from "./AnimeGenre";
import AnimeTrailer from "./AnimeTrailer";
import AnimeNews from "./AnimeNews";
import Tabloid from "./Tabloid";
import Channels from "./Channels";

export default function Aside() {
  return (
    <>
      <AnimeByGenre />
      <AnimeTrailer />
      <AnimeNews />
      <Tabloid />
      <Channels />
      <figure className="closing">
        <Fade triggerOnce duration={1500} direction="down" easing="ease-out">
          <figcaption>
            <h6>い</h6>
            <h6>ら</h6>
            <h6>っ</h6>
            <h6>し</h6>
            <h6>ゃ</h6>
            <h6>い</h6>
            <h6>ま</h6>
            <h6>せ</h6>
          </figcaption>
          <figcaption>
            <h6>み</h6>
            <h6>な</h6>
            <h6>さ</h6>
            <h6>ん</h6>
          </figcaption>
        </Fade>
      </figure>
    </>
  );
}
