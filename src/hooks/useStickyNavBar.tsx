import { useState, useLayoutEffect } from "react";

const useStickyNavBar = (ref: any) => {
  const [isSticky, setSticky] = useState<boolean>(false);

  // Set lower navbar sticky
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  return isSticky;
};

export default useStickyNavBar;
