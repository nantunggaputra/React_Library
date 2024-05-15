/* eslint-disable react/prop-types */
function IndentedText({ children }) {
  return <span style={{ paddingLeft: "3em" }}>{children}</span>;
}

export default function AnimeDetail({ selectedAnime }) {
  return (
    <div className="details">
      <header>
        <img src={selectedAnime.image} alt={`${selectedAnime.title} cover`} />
        <div className="details-overview">
          <h2>{selectedAnime.title}</h2>
          <small>
            {selectedAnime.year} | IMDb ★ {selectedAnime.score.toFixed(1)}/10
          </small>
        </div>
      </header>
      <section>
        <p>
          <em>
            <IndentedText></IndentedText>
            {selectedAnime.synopsis}
          </em>
        </p>
      </section>
    </div>
  );
}
