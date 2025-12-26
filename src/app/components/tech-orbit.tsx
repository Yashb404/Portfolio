"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

// --- Data ---
const techStack = [
  "Rust",
  "Solana",
  "Anchor",
  "Next.js",
  "TypeScript",
  "React",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Java",
  "Postman",
  "Docker",
  "Git",
  "Linux",
];

// --- Helper: Fibonacci Sphere Algorithm ---
const calculateSpherePosition = (
  index: number,
  total: number,
  radius: number
) => {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  return {
    x: radius * Math.cos(theta) * Math.sin(phi),
    y: radius * Math.sin(phi),
    z: radius * Math.cos(phi),
  };
};

export const TechOrbit = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [tags, setTags] = useState<
    {
      id: number;
      text: string;
      x: number;
      y: number;
      z: number;
      scale: number;
      opacity: number;
    }[]
  >([]);

  const velocity = useRef({ x: 0, y: -0.0001 });
  const isDragging = useRef(false);
  const lastMouse = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  const radius = 200;

  useEffect(() => {
    const initialTags = techStack.map((text, i) => {
      const pos = calculateSpherePosition(i, techStack.length, radius);
      return {
        id: i,
        text,
        ...pos,
        scale: 1,
        opacity: 1,
      };
    });
    setTags(initialTags);
  }, []);

  useEffect(() => {
    const animate = () => {
      if (!isDragging.current) {
        // Stronger friction to slow down faster
        velocity.current.x *= 0.98;
        velocity.current.y *= 0.98;

        // Much slower base rotation
        const baseRotation = -0.00005;
        velocity.current.y += (baseRotation - velocity.current.y) * 0.01;
      }

      setRotation((prev) => ({
        x: prev.x + velocity.current.x,
        y: prev.y + velocity.current.y,
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Calculate connections between nearby tags
  type TagType = {
    id: number;
    text: string;
    x: number;
    y: number;
    z: number;
    scale: number;
    opacity: number;
  };

  const [connections, setConnections] = useState<
    Array<{ from: number; to: number; distance: number }>
  >([]);

  // Calculate connections between nearby tags
  const calculateConnections = (tags: TagType[], connectionRadius: number) => {
    const connections: Array<{ from: number; to: number; distance: number }> = [];
    const maxConnectionDistance = connectionRadius * 1.5; // Connect tags within this distance

    for (let i = 0; i < tags.length; i++) {
      for (let j = i + 1; j < tags.length; j++) {
        const dx = tags[i].x - tags[j].x;
        const dy = tags[i].y - tags[j].y;
        const dz = tags[i].z - tags[j].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < maxConnectionDistance) {
          connections.push({ from: i, to: j, distance });
        }
      }
    }

    return connections;
  };

  useEffect(() => {
    const initialTags = techStack.map((text, i) => {
      const pos = calculateSpherePosition(i, techStack.length, radius);
      return {
        id: i,
        text,
        ...pos,
        scale: 1,
        opacity: 1,
      };
    });
    setTags(initialTags);
    setConnections(calculateConnections(initialTags, radius));
  }, [radius]);

  useEffect(() => {
    const cx = Math.cos(rotation.x);
    const sx = Math.sin(rotation.x);
    const cy = Math.cos(rotation.y);
    const sy = Math.sin(rotation.y);

    setTags((prevTags) => {
      const rotatedTags = prevTags.map((tag) => {
        let x = tag.x * cy - tag.z * sy;
        let z = tag.z * cy + tag.x * sy;
        let y = tag.y * cx - z * sx;
        z = z * cx + tag.y * sx;

        const scale = (z + radius * 2) / (radius * 3);
        const opacity = (z + radius) / (radius * 2);

        return {
          ...tag,
          x,
          y,
          z,
          scale: Math.max(0.5, scale),
          opacity: Math.max(0.1, opacity),
        };
      });

      // Update connections based on rotated positions
      setConnections(calculateConnections(rotatedTags, radius));
      return rotatedTags;
    });
  }, [rotation, radius]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true;
    lastMouse.current = { x: e.clientX, y: e.clientY };
    velocity.current = { x: 0, y: 0 };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = e.clientX - lastMouse.current.x;
      const deltaY = e.clientY - lastMouse.current.y;
      // Reduced sensitivity for smoother, slower dragging
      const sensitivity = 0.00005;

      velocity.current.x = deltaY * sensitivity;
      velocity.current.y = deltaX * sensitivity;

      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center w-full h-[500px] relative select-none touch-none"
      onMouseDown={handleMouseDown}
    >
      <div className="absolute z-20 text-[10px] md:text-xs font-mono text-gray-600 tracking-widest uppercase opacity-50 pointer-events-none">
        System Core
      </div>

      <div
        className={`absolute top-0 left-0 w-full h-full ${
          isDragging.current ? "cursor-grabbing" : "cursor-grab"
        }`}
      >
        {/* SVG for curved connection lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{ zIndex: 1 }}
        >
          {connections.map((conn, idx) => {
            const fromTag = tags[conn.from];
            const toTag = tags[conn.to];

            if (!fromTag || !toTag) return null;

            // Calculate center point for the curve
            const centerX = (fromTag.x + toTag.x) / 2;
            const centerY = (fromTag.y + toTag.y) / 2;
            const centerZ = (fromTag.z + toTag.z) / 2;

            // Calculate opacity based on average depth
            const avgOpacity = (fromTag.opacity + toTag.opacity) / 2;
            const lineOpacity = Math.max(0.05, avgOpacity * 0.3);

            // Calculate distance for line thickness
            const normalizedDistance = 1 - conn.distance / (radius * 1.5);
            const lineWidth = Math.max(0.5, normalizedDistance * 1.5);

            // Get screen coordinates (center of container)
            const centerXScreen = 0; // Already centered
            const centerYScreen = 0; // Already centered

            const x1 = centerXScreen + fromTag.x;
            const y1 = centerYScreen + fromTag.y;
            const x2 = centerXScreen + toTag.x;
            const y2 = centerYScreen + toTag.y;

            // Control point for quadratic curve (offset perpendicular to line)
            const dx = x2 - x1;
            const dy = y2 - y1;
            const perpX = -dy;
            const perpY = dx;
            const perpLength = Math.sqrt(perpX * perpX + perpY * perpY);
            const normalizedPerpX = perpLength > 0 ? (perpX / perpLength) * 30 : 0;
            const normalizedPerpY = perpLength > 0 ? (perpY / perpLength) * 30 : 0;

            const controlX = (x1 + x2) / 2 + normalizedPerpX;
            const controlY = (y1 + y2) / 2 + normalizedPerpY;

            return (
              <motion.path
                key={`${conn.from}-${conn.to}-${idx}`}
                d={`M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`}
                fill="none"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth={lineWidth}
                opacity={lineOpacity}
                style={{
                  zIndex: Math.round(Math.min(fromTag.z, toTag.z) + radius),
                }}
                transition={{ duration: 0.1 }}
              />
            );
          })}
        </svg>

        {tags.map((tag) => (
          <motion.div
            key={tag.id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              x: tag.x,
              y: tag.y,
              scale: tag.scale,
              opacity: tag.opacity,
              zIndex: Math.round(tag.z + radius),
            }}
            whileHover={{
              backgroundColor: "white",
              color: "black",
              scale: tag.scale * 1.2,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            <div
              className={`
                px-3 py-1 md:px-4 md:py-2 border border-white/30 rounded-full 
                font-mono text-xs md:text-sm font-bold tracking-tighter
                bg-black/50 backdrop-blur-sm whitespace-nowrap
                hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]
              `}
              style={{
                color: tag.opacity > 0.6 ? "white" : "#555",
                borderColor:
                  tag.opacity > 0.6
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(255,255,255,0.1)",
              }}
            >
              {tag.text}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};


