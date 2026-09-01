"use client";

import { useCallback, useRef, useState } from "react";
import "./BorderGlow.css";

const GRADIENT_POSITIONS = [
  "80% 55%",
  "69% 34%",
  "8% 6%",
  "41% 38%",
  "86% 85%",
  "82% 18%",
  "51% 4%",
];
const COLOR_MAP = [0, 1, 2, 0, 1, 2, 1];

const buildMeshGradients = (colors) => {
  const gradients = GRADIENT_POSITIONS.map((position, index) => {
    const color = colors[Math.min(COLOR_MAP[index], colors.length - 1)];
    return `radial-gradient(at ${position}, ${color} 0px, transparent 50%)`;
  });
  gradients.push(`linear-gradient(${colors[0]} 0 100%)`);
  return gradients;
};

const parseHSL = (value) => {
  const match = value.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  return match
    ? { h: Number(match[1]), s: Number(match[2]), l: Number(match[3]) }
    : { h: 40, s: 80, l: 80 };
};

const buildBoxShadow = (glowColor, intensity) => {
  const { h, s, l } = parseHSL(glowColor);
  const layers = [
    [0, 1, 100, true],
    [1, 0, 60, true],
    [3, 0, 50, true],
    [6, 0, 40, true],
    [15, 0, 30, true],
    [25, 2, 20, true],
    [50, 2, 10, true],
    [1, 0, 60, false],
    [3, 0, 50, false],
    [6, 0, 40, false],
    [15, 0, 30, false],
    [25, 2, 20, false],
    [50, 2, 10, false],
  ];

  return layers
    .map(([blur, spread, alpha, inset]) => {
      const opacity = Math.min(alpha * intensity, 100);
      return `${inset ? "inset " : ""}0 0 ${blur}px ${spread}px hsl(${h}deg ${s}% ${l}% / ${opacity}%)`;
    })
    .join(", ");
};

const BorderGlow = ({
  children,
  className = "",
  edgeSensitivity = 30,
  glowColor = "40 80 80",
  backgroundColor = "#120F17",
  borderRadius = 28,
  glowRadius = 40,
  glowIntensity = 1,
  coneSpread = 25,
  animated = false,
  colors = ["#c084fc", "#f472b6", "#38bdf8"],
  fillOpacity = 0.5,
  ...rest
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorAngle, setCursorAngle] = useState(45);
  const [edgeProximity, setEdgeProximity] = useState(animated ? 1 : 0);

  const handlePointerMove = useCallback((event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const kx = dx === 0 ? Infinity : cx / Math.abs(dx);
    const ky = dy === 0 ? Infinity : cy / Math.abs(dy);
    setEdgeProximity(Math.min(Math.max(1 / Math.min(kx, ky), 0), 1));
    let degrees = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (degrees < 0) degrees += 360;
    setCursorAngle(degrees);
  }, []);

  const isVisible = isHovered || animated;
  const colorSensitivity = edgeSensitivity + 20;
  const borderOpacity = isVisible
    ? Math.max(0, (edgeProximity * 100 - colorSensitivity) / (100 - colorSensitivity))
    : 0;
  const glowOpacity = isVisible
    ? Math.max(0, (edgeProximity * 100 - edgeSensitivity) / (100 - edgeSensitivity))
    : 0;
  const meshGradients = buildMeshGradients(colors);
  const angle = `${cursorAngle.toFixed(3)}deg`;

  return (
    <div
      {...rest}
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      className={`border-glow ${className}`}
      style={{
        background: backgroundColor,
        borderRadius: `${borderRadius}px`,
      }}
    >
      <div
        className="border-glow__border"
        style={{
          background: [
            `linear-gradient(${backgroundColor} 0 100%) padding-box`,
            "linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box",
            ...meshGradients.map((gradient) => `${gradient} border-box`),
          ].join(", "),
          opacity: borderOpacity,
          maskImage: `conic-gradient(from ${angle} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
          WebkitMaskImage: `conic-gradient(from ${angle} at center, black ${coneSpread}%, transparent ${coneSpread + 15}%, transparent ${100 - coneSpread - 15}%, black ${100 - coneSpread}%)`,
        }}
      />
      <div
        className="border-glow__fill"
        style={{
          background: meshGradients.map((gradient) => `${gradient} padding-box`).join(", "),
          opacity: borderOpacity * fillOpacity,
          maskImage: `conic-gradient(from ${angle} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
          WebkitMaskImage: `conic-gradient(from ${angle} at center, transparent 5%, black 15%, black 85%, transparent 95%)`,
        }}
      />
      <span
        className="border-glow__outer"
        style={{
          inset: `${-glowRadius}px`,
          opacity: glowOpacity,
          maskImage: `conic-gradient(from ${angle} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          WebkitMaskImage: `conic-gradient(from ${angle} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
        }}
      >
        <span
          style={{ inset: `${glowRadius}px`, boxShadow: buildBoxShadow(glowColor, glowIntensity) }}
        />
      </span>
      <div className="border-glow__content">{children}</div>
    </div>
  );
};

export default BorderGlow;
