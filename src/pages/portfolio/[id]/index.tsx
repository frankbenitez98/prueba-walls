import NavBarPortfolio from "@src/components/NavBarPortfolio";
import React, { useState } from "react";
import { useRouter } from "next/router";
import ProjectsList from "@src/containers/ProjectsList";

export interface MenuItem {
  title: string;
  path: string;
  bannerTitle: string;
  description: string;
  svg?: string;
  number?: number;
}

const menuItems: MenuItem[] = [
  {
    title: "all productions",
    path: "/all-productions",
    bannerTitle: "Our portoflio",
    description:
      "We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc.",
  },
  {
    title: "video",
    path: "/video",
    bannerTitle: "Video productions",
    description:
      "We do not promise big things. We do great things, because we know that in the world of promises you can die of hunger. We focus on TV advertising, Music videos, Corporate films and Documentaries.",
    svg: "player-play",
    number: 112,
  },
  {
    title: "digital",
    path: "/digital",
    bannerTitle: "Digital productions",
    description:
      "We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc.",
    svg: "settings",
    number: 92,
  },
  {
    title: "creative",
    path: "/creative",
    bannerTitle: "Creative productions",
    description:
      "We provide full service for the needs of TV commercials, 3D and 2D animation projects, music videos, corporate films, documentary films, PR events, etc.",
    svg: "pencil",
    number: 30,
  },
  {
    title: "audio",
    path: "/audio",
    bannerTitle: "Audio productions",
    description:
      "The secret of the sounds is that they find an inexhaustible source of expression where the vision is silent. Sound recording; Production of radio commercials; Adaptations of TV Ads; Sound Effects; Doubling; Original music",
    svg: "volume",
    number: 44,
  },
];

const Portfolio = () => {
  const [NumCards, setNumCards] = useState<number>(9);
  const {
    query: { id },
  } = useRouter();

  const currentItem: MenuItem = menuItems.filter(
    (item) => item.path === "/" + id
  )[0];
  //console.log(currentItem);
  let maxCards = 0;
  if (currentItem !== menuItems[0]) {
    maxCards = currentItem?.number as number;
  } else {
    menuItems.forEach((item) => {
      if (item.number != undefined) {
        maxCards += item.number;
      }
    });
  }
  return (
    <div className="bg-gray-200">
      <NavBarPortfolio
        currentItem={currentItem}
        menuItems={menuItems}
        setNumCards={setNumCards}
      />
      <ProjectsList
        NumCards={NumCards}
        setNumCards={setNumCards}
        maxCards={maxCards}
      />
    </div>
  );
};

export default Portfolio;
