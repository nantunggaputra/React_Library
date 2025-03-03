import { ChevronRight } from "react-feather";

function AnimatedCtaButton({ text, className = "animated-cta-button" }) {
  return (
    <button className={className}>
      {text}
      <ChevronRight />
    </button>
  );
}

export default AnimatedCtaButton;
