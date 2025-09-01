export interface RoadmapItem {
  id: number;
  year: string;
  quarterInfo: string;
  title: string;
  description: string[];
  position: "left" | "right";
}

// Fallback static data for components that cannot use hooks
export const roadmapData: RoadmapItem[] = [
  {
    id: 1,
    year: "2025",
    quarterInfo: "Quarter-1",
    title: "Ordinary Prop",
    description: ["+ Research", "+ Development trader side"],
    position: "left",
  },
  {
    id: 2,
    year: "2025",
    quarterInfo: "Quarter-2",
    title: "Ordinary Prop",
    description: [
      "+ Traders side Prop Firm launch",
      "+ Token smart contract Audit",
    ],
    position: "right",
  },
  {
    id: 3,
    year: "2025",
    quarterInfo: "Quarter-3",
    title: "Investors Side",
    description: [
      "+ Decentralized Smart Contracts development",
      "+ Decentralization",
    ],
    position: "left",
  },
  {
    id: 4,
    year: "2025",
    quarterInfo: "Quarter-4",
    title: "Ordinary Prop",
    description: [
      "+ Oracle Development Investors",
      "+ Traders side Prop Firm launch",
      "+ ICO",
    ],
    position: "right",
  },
  {
    id: 5,
    year: "2026",
    quarterInfo: "Quarter-1",
    title: "Implementation",
    description: [
      "+ Token smart contract Audit",
      "+ Decentralized Side Beta Launch",
    ],
    position: "left",
  },
  {
    id: 6,
    year: "2026",
    quarterInfo: "Quarter-2",
    title: "Implementation",
    description: [
      "+ Investors Decentralized Side Implement",
      "+ Token release and Airdrop",
    ],
    position: "right",
  },
];
