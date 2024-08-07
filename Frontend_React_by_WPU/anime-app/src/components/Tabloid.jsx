import { Fade } from "react-awesome-reveal";

export default function Tabloid() {
  return (
    <aside className="aside bottom-right">
      <Fade triggerOnce delay={250} duration={1000}>
        <div className="tabloid-all">
          <div className="poster" title="WeeBoo"></div>
        </div>
      </Fade>
    </aside>
  );
}
