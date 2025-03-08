/* eslint-disable react/prop-types */
export default function FloatingButton({
  itemKey,
  state,
  titleOn,
  titleOff,
  url,
  target,
  toggleState,
  toggleStateLink,
  styleOn,
  styleOff,
  className,
  titleLink,
  iconLink,
  iconOn,
  iconOff,
}) {
  return (
    <div className="container" key={itemKey}>
      <button
        title={state ? titleOn : titleOff}
        onClick={toggleState}
        style={state ? styleOn : styleOff}
        className={className}
      >
        {url ? (
          <a
            href={url}
            target={target}
            onClick={toggleStateLink}
            title={titleLink}
          >
            <span className="icon-floating-button">{iconLink}</span>
            <span className="description-floating-button">{titleLink}</span>
          </a>
        ) : state ? (
          <>
            <span className="icon-floating-button">{iconOn}</span>
            <span className="description-floating-button">{titleOn}</span>
          </>
        ) : (
          <>
            <span className="icon-floating-button">{iconOff}</span>
            <span className="description-floating-button">{titleOff}</span>
          </>
        )}
      </button>
    </div>
  );
}
