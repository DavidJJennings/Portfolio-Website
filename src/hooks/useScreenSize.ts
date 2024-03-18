import { useState, useEffect } from "react";

// Custom hook to detect screen size
export function useScreenSize() {
  const [screenSize, setScreenSize] = useState("xs");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setScreenSize("2xl");
      } else if (window.innerWidth >= 1280) {
        setScreenSize("xl");
      } else if (window.innerWidth >= 1024) {
        setScreenSize("lg");
      } else if (window.innerWidth >= 768) {
        setScreenSize("md");
      } else if (window.innerWidth >= 640) {
        setScreenSize("sm");
      } else {
        setScreenSize("xs");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call the function initially to set the screen size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenSize;
}

export default useScreenSize;
