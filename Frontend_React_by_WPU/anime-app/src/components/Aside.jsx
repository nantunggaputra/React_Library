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
            <h6>ハ</h6>
            <h6>!</h6>
            <h6>お</h6>
            <h6>か</h6>
            <h6>え</h6>
            <h6>り</h6>
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
