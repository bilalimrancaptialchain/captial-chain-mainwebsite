import React from "react";

interface BranchSVGProps {
  position: "left" | "right";
  isActive: boolean;
}

const BranchSVG: React.FC<BranchSVGProps> = ({ position, isActive }) => {
  return (
    <div
      className={`absolute top-1/2 transform -translate-y-1/2 hidden md:block ${
        position === "left" ? "right-1/2 mr-3" : "left-1/2 ml-3"
      }`}
    >
      <svg
        width="127"
        height="33"
        viewBox="0 0 127 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          position === "right" ? "scale-x-[-1]" : ""
        } transition-opacity duration-500 ${
          isActive ? "opacity-100" : "opacity-30"
        }`}
      >
        <path
          d="M126 31.4998L80.5 5.23041C78.8333 4.0693 73.9 1.74707 67.5 1.74707C61.1 1.74707 11 1.74707 0.5 1.74707"
          stroke={isActive ? "url(#paint0_linear_445_41)" : "#152E57"}
          strokeWidth="2"
        />
        <defs>
          <linearGradient
            id="paint0_linear_445_41"
            x1="7"
            y1="2"
            x2="115.581"
            y2="37.0686"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#071327" />
            <stop offset="0.308457" stopColor="#043842" />
            <stop offset="0.505869" stopColor="#00E0E0" />
            <stop offset="0.648235" stopColor="#043842" />
            <stop offset="1" stopColor="#043842" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BranchSVG;
