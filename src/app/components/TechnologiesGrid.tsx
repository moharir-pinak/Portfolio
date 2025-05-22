// components/TechnologiesGrid.tsx
import React from "react";
import GradientCard from "./GradientCard";
import technologiesrev from "../data/technologiesrev.json";

const TechnologiesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {technologiesrev.map((technology) => (
        <GradientCard key={technology.name} logoUrl={technology.icon} />
      ))}
    </div>
  );
};

export default TechnologiesGrid;
