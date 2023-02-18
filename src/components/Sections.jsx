import React from "react";
import SectionCard from "./SectionCard";
import Button from "./ui/Button";

const Sections = () => {
  return (
    <div className=" grid w-full justify-items-center items-center py-12">
      <div className="grid grid-cols-3 gap-3 p-12 justify-items-center">
        <SectionCard
          title="video"
          description={["adapation", "own production"]}
          svg="player-play"
          color="green"
        />
        <SectionCard
          title="audio"
          description={["sound recording", "production of radio commercials"]}
          svg="volume"
          color="purple"
        />
        <SectionCard
          title="2D"
          description={["adapation", "own production"]}
          svg="triangle-square-circle"
          color="green"
        />
        <SectionCard
          title="creative"
          description={["prepress", "corporate ID", "copywriting"]}
          svg="pencil"
          color="purple"
        />
        <SectionCard
          title="digital"
          description={["media planning", "prepress", "corporate ID"]}
          svg="settings"
          color="rose"
        />
        <SectionCard
          title="3D"
          description={["creative", "adapation", "own production"]}
          svg="3d-cube-sphere"
          color="purple"
        />
      </div>
      <Button title="VIEW ALL PRODUCTIONS" />
    </div>
  );
};

export default Sections;
