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
    imageSrc: "/images/team/mojtaba.webp",
    imageAlt: "Mojtaba - CEO",
  },
  {
    id: 2,
    name: "Thajudeen",
    positionKey: "team.positions.cmo",
    imageSrc: "/images/team/thajudeen.webp",
    imageAlt: "Thajudeen - CMO",
  },
  {
    id: 3,
    name: "Irfan",
    positionKey: "team.positions.socialMediaManager",
    imageSrc: "/images/team/irfan.webp",
    imageAlt: "Irfan - Social Media Manager",
  },
  {
    id: 4,
    name: "Ramin",
    positionKey: "team.positions.riskManager",
    imageSrc: "/images/team/ramin.webp",
    imageAlt: "Ramin - Risk Manager",
  },
  {
    id: 5,
    name: "Malak",
    positionKey: "team.positions.businessDevelopmentManager",
    imageSrc: "/images/team/malak.webp",
    imageAlt: "Malak - Business Development Manager",
  },
  {
    id: 6,
    name: "Sina",
    positionKey: "team.positions.headOfDesign",
    imageSrc: "/images/team/sina.webp",
    imageAlt: "Sina - Head Of Design",
  },
  {
    id: 7,
    name: "Rauf",
    positionKey: "team.positions.headOfFinance",
    imageSrc: "/images/team/rauf.webp",
    imageAlt: "Rauf - Head Of Finance",
  },
  {
    id: 8,
    name: "Mehraj",
    positionKey: "team.positions.humanResourceManager",
    imageSrc: "/images/team/mehraj.webp",
    imageAlt: "mehraj - Human Resource Manager",
  },
  {
    id: 9,
    name: "Ariel",
    positionKey: "team.positions.headOfCustomerSupport",
    imageSrc: "/images/team/ariel.webp",
    imageAlt: "Ariel - Head Of Customer Support",
  },
  {
    id: 10,
    name: "Mariam",
    positionKey: "team.positions.reputationManager",
    imageSrc: "/images/team/mariam.webp",
    imageAlt: "Mariam - Reputation Manager",
  },
  {
    id: 11,
    name: "Bilal",
    positionKey: "team.positions.headOfEngineering",
    imageSrc: "/images/team/bilal.webp",
    imageAlt: "Bilal - Head of Engineering",
  },
];

export interface TeamSectionData {
  title: string;
}

export const teamSectionData: TeamSectionData = {
  title: "Capital Chain Administrations",
};