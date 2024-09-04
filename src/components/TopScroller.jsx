import React from "react";
import "../styles/TopScroller.css";
import { FaChevronUp } from "react-icons/fa";

const TopScroller = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="top-scrollerBTN" onClick={scrollToTop}>
      <FaChevronUp />
    </div>
  );
};

export default TopScroller;
