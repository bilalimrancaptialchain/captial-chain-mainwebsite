export interface TeamMember {
  id: number;
  name: string;
  positionKey: string;
  imageSrc: string;
  imageAlt: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Mojtaba",
    positionKey: "team.positions.ceo",
    imageSrc: "/images/mojtaba.webp",
    imageAlt: "Mojtaba - CEO",
  },
  {
    id: 2,
    name: "Thajudeen",
    positionKey: "team.positions.cmo",
    imageSrc: "/images/thajudeen.webp",
    imageAlt: "Thajudeen - CMO",
  },
  {
    id: 3,
    name: "Irfan",
    positionKey: "team.positions.headOfEngineering",
    imageSrc: "/images/irfan.webp",
    imageAlt: "Irfan - Head of engineering",
  },
  {
    id: 4,
    name: "Ramin",
    positionKey: "team.positions.riskManager",
    imageSrc: "/images/ramin.webp",
    imageAlt: "Ramin - Risk Manager",
  },
  {
    id: 5,
    name: "Malak",
    positionKey: "team.positions.businessDevelopmentManager",
    imageSrc: "/images/malak.webp",
    imageAlt: "Malak - Business Development Manager",
  },
  {
    id: 6,
    name: "Sina",
    positionKey: "team.positions.headOfDesign",
    imageSrc: "/images/sina.webp",
    imageAlt: "Sina - Head of design",
  },
  {
    id: 7,
    name: "Rauf",
    positionKey: "team.positions.headOfFinance",
    imageSrc: "/images/rauf.webp",
    imageAlt: "Rauf - Head of Finance",
  },
  {
    id: 8,
    name: "Mehraj",
    positionKey: "team.positions.humanResourceManager",
    imageSrc: "/images/mehraj.webp",
    imageAlt: "mehraj - Human resource manager",
  },
];

export interface TeamSectionData {
  title: string;
}

export const teamSectionData: TeamSectionData = {
  title: "Capital Chain Administrations",
};
