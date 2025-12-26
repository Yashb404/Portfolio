"use client";

import React, { useEffect, useRef, useState, useMemo } from "react";

type Vec3 = [number, number, number];
type Matrix3x3 = [Vec3, Vec3, Vec3];

const MATH = {
  cos: Math.cos,
  sin: Math.sin,
  sqrt: Math.sqrt,
  pow: Math.pow,
  PI: Math.PI,

  multVectorWithMatrix: (m: Matrix3x3) => (v: Vec3): Vec3 => {
    const [x, y, z] = v;
    const [
      [M11, M12, M13],
      [M21, M22, M23],
      [M31, M32, M33],
    ] = m;
    return [
      M11 * x + M21 * y + M31 * z,
      M12 * x + M22 * y + M32 * z,
      M13 * x + M23 * y + M33 * z,
    ];
  },

  rotateXM: (a: number): Matrix3x3 => [
    [1, 0, 0],
    [0, MATH.cos(a), -MATH.sin(a)],
    [0, MATH.sin(a), MATH.cos(a)],
  ],

  rotateYM: (a: number): Matrix3x3 => [
    [MATH.cos(a), 0, MATH.sin(a)],
    [0, 1, 0],
    [-MATH.sin(a), 0, MATH.cos(a)],
  ],

  rotateZM: (a: number): Matrix3x3 => [
    [MATH.cos(a), -MATH.sin(a), 0],
    [MATH.sin(a), MATH.cos(a), 0],
    [0, 0, 1],
  ],

  normV: (v: Vec3): Vec3 => {
    const l = MATH.sqrt(v.reduce((a, c) => MATH.pow(c, 2) + a, 0));
    if (l === 0) return v.map(() => 0) as Vec3;
    return v.map((c) => c / l) as Vec3;
  },

  subV: (v1: Vec3) => (v2: Vec3): Vec3 => {
    return v1.map((c1, i) => c1 - v2[i]) as Vec3;
  },

  rotateVM: (theta: number) => ([ux, uy, uz]: Vec3): Matrix3x3 => {
    const c = MATH.cos(theta);
    const s = MATH.sin(theta);
    return [
      [
        c + ux * ux * (1 - c),
        ux * uy * (1 - c) - uz * s,
        ux * uz * (1 - c) + uy * s,
      ],
      [
        uy * ux * (1 - c) + uz * s,
        c + uy * uy * (1 - c),
        uy * uz * (1 - c) - ux * s,
      ],
      [
        uz * ux * (1 - c) - uy * s,
        uz * uy * (1 - c) + ux * s,
        c + uz * uz * (1 - c),
      ],
    ];
  },

  multM: (a: Matrix3x3, b: Matrix3x3): Matrix3x3 => {
    const [
      [a11, a12, a13],
      [a21, a22, a23],
      [a31, a32, a33],
    ] = a;
    const [
      [b11, b12, b13],
      [b21, b22, b23],
      [b31, b32, b33],
    ] = b;
    return [
      [
        a11 * b11 + a12 * b21 + a13 * b31,
        a11 * b12 + a12 * b22 + a13 * b32,
        a11 * b13 + a12 * b23 + a13 * b33,
      ],
      [
        a21 * b11 + a22 * b21 + a23 * b31,
        a21 * b12 + a22 * b22 + a23 * b32,
        a21 * b13 + a22 * b23 + a23 * b33,
      ],
      [
        a31 * b11 + a32 * b21 + a33 * b31,
        a31 * b12 + a32 * b22 + a33 * b32,
        a31 * b13 + a32 * b23 + a33 * b33,
      ],
    ];
  },
};

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

const getTechIcon = (name: string) => {
  const icons: Record<string, string> = {
    Rust: "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
    Solana:
      "https://github.com/user-attachments/assets/57b129b9-4790-4075-bf1f-ebb514885f43",
    Anchor:
      "https://camo.githubusercontent.com/590ccfb4e70a27673047ee879ed409981c05b2da403e60b4aaa7961ccdb46001/68747470733a2f2f7062732e7477696d672e636f6d2f6d656469612f46565556614f3958454141756c764b3f666f726d61743d706e67266e616d653d736d616c6c",
    "Next.js":
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    TypeScript:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    React:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    PostgreSQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    MongoDB:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    MySQL:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Java:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    Postman:
      "https://www.svgrepo.com/show/354202/postman-icon.svg",
    Docker:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Linux:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  };

  const src = icons[name];
  if (!src) return null;
  const isRust = name === "Rust";

  return (
    <img
      src={src}
      alt={name}
      className="w-full h-full object-contain"
      style={{ filter: isRust ? "invert(1)" : "none" }}
    />
  );
};

export const TechOrbit = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  const [matrix, setMatrix] = useState<Matrix3x3>([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ]);

  const spinAxis = useRef<Vec3>([1, 0, 0]);
  const spinSpeed = useRef(0.0005);
  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(0);

  const points = useMemo(() => {
    const count = techStack.length;
    const radius = 180;
    return techStack.map((tech, i) => {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      return { id: i, tech, x, y, z };
    });
  }, []);

  useEffect(() => {
    const animate = (time: number) => {
      const delta = time - lastTime.current;
      lastTime.current = time;

      let rotationMatrix: Matrix3x3 = [
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ];

      if (isDragging.current) {
      } else {
        if (spinSpeed.current !== 0) {
          rotationMatrix = MATH.rotateVM(spinSpeed.current * (delta || 16))(spinAxis.current);
          spinSpeed.current *= 0.98;
          if (Math.abs(spinSpeed.current) < 0.0005) {
            spinSpeed.current = spinSpeed.current > 0 ? 0.0005 : -0.0005;
          }
        }
      }

      setMatrix((prev) => MATH.multM(rotationMatrix, prev));

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    spinSpeed.current = 0;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const deltaX = e.clientX - lastPos.current.x;
      const deltaY = e.clientY - lastPos.current.y;

      const theta = Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.005;

      if (theta < 0.001) return;
      const axis = MATH.normV([-deltaY, deltaX, 0] as Vec3);

      const dragMatrix = MATH.rotateVM(theta)(axis);
      setMatrix((prev) => MATH.multM(dragMatrix, prev));
      spinAxis.current = axis;
      spinSpeed.current = theta * 2;

      lastPos.current = { x: e.clientX, y: e.clientY };
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

  const renderedPoints = useMemo(() => {
    const result = points.map((p) => {
      const rotated = MATH.multVectorWithMatrix(matrix)([p.x, p.y, p.z]);
      const zNorm = rotated[2] / 180;
      const scale = 1.2 - zNorm * 0.5;

      const opacity = rotated[2] < 0 ? 1 : (1.2 - zNorm) / 2;

      return {
        ...p,
        rx: rotated[0],
        ry: rotated[1],
        rz: rotated[2],
        scale: Math.max(0.3, scale),
        opacity: Math.max(0.1, Math.min(1, opacity)),
      };
    });

    return result.sort((a, b) => a.rz - b.rz);
  }, [points, matrix]);

  return (
    <div
      ref={containerRef}
      className="w-full h-125 relative z-0 flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
    >
      <div className="relative w-full h-full">
        {renderedPoints.map((p) => (
          <div
            key={p.id}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center transition-all duration-75 ease-linear will-change-transform"
            style={{
              transform: `translate3d(${p.rx}px, ${p.ry}px, 0) scale(${p.scale})`,
              opacity: p.opacity,
              zIndex: Math.round(p.rz + 200),
              width: "60px",
              height: "60px",
            }}
          >
            <div className="w-10 h-10 md:w-12 md:h-12 drop-shadow-2xl">
              {getTechIcon(p.tech)}
            </div>
            {p.opacity > 0.6 && (
              <span className="text-[10px] text-white font-mono mt-1 bg-black/50 px-1 rounded backdrop-blur-sm">
                {p.tech}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
