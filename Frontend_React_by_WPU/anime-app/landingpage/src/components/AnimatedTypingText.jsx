import { useState, useRef, useEffect } from "react";

function AnimatedTypingText({ text, className = "", delay = 250 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, delay);

    return () => clearInterval(typingEffect);
  }, [text, delay, isVisible]);

  return (
    <span ref={elementRef} className={className}>
      {displayedText}
    </span>
  );
}

export default AnimatedTypingText;
