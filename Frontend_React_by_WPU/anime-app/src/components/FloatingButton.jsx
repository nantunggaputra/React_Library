/* eslint-disable react/prop-types */
export default function FloatingButton({
  itemKey,
  state,
  titleOn,
  titleOff,
  url,
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
          <a href={url} onClick={toggleStateLink} title={titleLink}>
            {iconLink}
          </a>
        ) : state ? (
          iconOn
        ) : (
          iconOff
        )}
      </button>
    </div>
  );
}
