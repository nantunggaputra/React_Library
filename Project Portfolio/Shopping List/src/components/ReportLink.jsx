import { useState, useEffect } from "react";

function ReportLink() {
  const [clickCount, setClickCount] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const handleClick = () => {
    if (clickCount < 3) {
      setClickCount(clickCount + 1);
    }
  };
  useEffect(() => {
    const savedClickCount = parseInt(localStorage.getItem("clickCount")) || 0;
    const lastClickedTime =
      parseInt(localStorage.getItem("lastClickedTime")) || 0;
    if (savedClickCount && lastClickedTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - lastClickedTime;
      if (elapsedTime < 24 * 60 * 60 * 1000) {
        setClickCount(savedClickCount);
        setDisabled(true);
      } else {
        setClickCount(0);
        setDisabled(false);
        localStorage.removeItem("clickCount");
        localStorage.removeItem("lastClickedTime");
      }
    }
  }, []);
  useEffect(() => {
    if (clickCount >= 3) {
      localStorage.setItem("clickCount", clickCount.toString());
      localStorage.setItem("lastClickedTime", new Date().getTime().toString());
      setDisabled(true);
      console.log("You have exceeded the bug report limit.");
      const timer = setTimeout(() => {
        setClickCount(0);
        setDisabled(false);
        localStorage.removeItem("clickCount");
        localStorage.removeItem("lastClickedTime");
      }, 24 * 60 * 60 * 1000);
      return () => clearTimeout(timer);
    } else {
      localStorage.setItem("clickCount", clickCount.toString());
    }
  }, [clickCount]);
  return (
    <p className="report">
      <a
        href={
          disabled
            ? "#"
            : "mailto:anggunnantunggaputra@gmail.com?&subject=Bug%20report&body=Hi%20Nantungga%20Putra,%20I%20have%20found..."
        }
        onClick={handleClick}
        disabled={disabled}
      >
        Bug report
      </a>
    </p>
  );
}

export default ReportLink;
