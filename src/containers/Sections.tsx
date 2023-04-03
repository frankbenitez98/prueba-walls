import Link from "next/link";
import React from "react";
import SectionCard from "../components/SectionCard";
import Button from "../components/ui/Button";

const Sections = () => {
  return (
    <div className=" grid w-full justify-items-center items-center py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-5 lg:p-12 justify-items-center">
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
          color="green"
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
          color="green"
        />
        <SectionCard
          title="digital"
          description={["media planning", "prepress", "corporate ID"]}
          svg="settings"
          color="green"
        />
        <SectionCard
          title="3D"
          description={["creative", "adapation", "own production"]}
          svg="3d-cube-sphere"
          color="green"
        />
      </div>
      <Link href="/contact">
        <Button title="VIEW ALL PRODUCTIONS" />
      </Link>
    </div>
  );
};

export default Sections;
