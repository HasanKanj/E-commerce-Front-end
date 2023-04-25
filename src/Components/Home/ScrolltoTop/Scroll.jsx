import React, { useState } from "react";
import "./Scroll.css";
import ScrollIcon from '/home/alihomsi/Documents/projects/everything real client/frontend updated/E-commerce-Front-end/src/assets/scroll.png'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <img className='scroll-button' src={ScrollIcon} alt="icon 4" />
    </button>
  );
};

export default ScrollToTopButton;
