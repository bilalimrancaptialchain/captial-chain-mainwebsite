export interface MissionBoxData {
  id: number;
  imageSrc: string;
  imageAlt: string;
  textKey: string;
  greenParts: string[];
}

export const missionBoxes: MissionBoxData[] = [
  {
    id: 1,
    imageSrc: "/images/about_box_1.webp",
    imageAlt: "Mission Box 1",
    textKey: "about.missionBoxes.trustTransparency",
    greenParts: ["trust and transparency"],
  },
  {
    id: 2,
    imageSrc: "/images/about_box_2.webp",
    imageAlt: "Mission Box 2",
    textKey: "about.missionBoxes.decentralizedControl",
    greenParts: ["Decentralized"],
  },
  {
    id: 3,
    imageSrc: "/images/about_box_3.webp",
    imageAlt: "Mission Box 3",
    textKey: "about.missionBoxes.protectTraders",
    greenParts: ["Protect traders"],
  },
  {
    id: 4,
    imageSrc: "/images/about_box_4.webp",
    imageAlt: "Mission Box 4",
    textKey: "about.missionBoxes.healthyEnvironment",
    greenParts: ["healthy environment"],
  },
];

export interface MissionSectionData {
  topTitle: string;
  bottomText: string;
  backgroundImage: string;
}

export const missionSectionData: MissionSectionData = {
  topTitle: "What is our mission?",
  bottomText:
    "We're not just building a firm — we're building a movement for the next generation of trading.",
  backgroundImage: "/images/about_mission_bg.webp",
};