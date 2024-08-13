/* eslint-disable react/prop-types */
function AboutInfo({ className, url, textLink }) {
  return (
    <div className={className}>
      <hr style={{ opacity: "0.2" }} />
      <p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {textLink}
        </a>
      </p>
      <hr style={{ opacity: "0.2" }} />
    </div>
  );
}

export default function AboutPage({ toggleOverlay }) {
  const appVersion = "v0.1.7";
  const appRelease = "Public Beta";

  return (
    <div className="about">
      <div className="about-container">
        <button onClick={toggleOverlay}>×</button>
        <img className="logo" src="WeeBoo.png" alt="" />
        <div className="anime-app-version">
          <h1>WeeBoo</h1>
          <h5>
            {appVersion} ({appRelease})
          </h5>
          <h4>WeeBoo from Anime-App</h4>
          <p>
            WeeBoo | My Anime List is a Front-End SPA (Single Page Application)
            Web project built using React to display a list of anime. This
            project uses Vite for bundling and Visual Studio Code as the code
            editor. Mostly anime data is fetched from the Jikan - Unofficial
            MyAnimeList API.
          </p>
          <p>
            WeeBoo is designed and developed by Nantungga Putra, also later
            dedicated development team under Open Source Contribution.
          </p>
          <p>
            For Developers,{" "}
            <b>
              <a
                href="https://github.com/nantunggaputra/React_Library/issues/5"
                target="_blank"
                rel="noopener noreferrer"
              >
                get involved
              </a>
            </b>
            !
          </p>
        </div>
        <AboutInfo
          className="title"
          url="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/README.md"
          textLink="Anime-App"
        />
        <AboutInfo
          className="license"
          url="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/LICENSE"
          textLink="Licensing Information"
        />
        <AboutInfo
          className="rights"
          url="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/RIGHTS.md"
          textLink="End-User Rights"
        />
        <AboutInfo
          className="privacy-policy"
          url="https://github.com/nantunggaputra/React_Library/blob/main/Frontend_React_by_WPU/anime-app/PRIVACY_POLICY.md"
          textLink="Privacy Policy"
        />
        <div className="trademarks">
          <small>
            <b>
              WeeBoo and the WeeBoo logos are trademarks of the Anime-App on
              Nantungga Putra&apos;s GitHub Project
            </b>
          </small>
        </div>
      </div>
    </div>
  );
}
