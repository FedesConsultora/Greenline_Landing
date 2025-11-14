// src/components/common/ScrollStrip.jsx
import { useRef } from "react";
import { useMarquee } from "../../hooks/useMarquee";

export default function ScrollStrip({
  text,
  speed = 60,
  direction = "left", // 'left' o 'right'
  as = "p",            // 'p', 'h2', etc
  className = "",
}) {
  const trackRef = useRef(null);
  useMarquee(trackRef, { speed, direction });

  const Tag = as;

  return (
    <div className={`scroll ${className}`} ref={trackRef}>
      <Tag className="scroll__item">{text}</Tag>
    </div>
  );
}
