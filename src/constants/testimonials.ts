export interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  content: string;
  date: string;
}

// Fallback static data for components that cannot use hooks
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mohammad Badawi",
    position: "Senior Trader",
    avatar: "/images/testimonial-1.jpg",
    content:
      "Gosh, the 12% drawdown gave me breathing space. I could trade properly without pressure.",
    date: "11/08/2025",
  },
  {
    id: 2,
    name: "Mohammad Badawi",
    position: "Investment Manager",
    avatar: "/images/testimonial-2.jpg",
    content:
      "Gosh, the 12% drawdown gave me breathing space. I could trade properly without pressure.",
    date: "22/07/2025",
  },
  {
    id: 3,
    name: "Mohammad Badawi",
    position: "Day Trader",
    avatar: "/images/testimonial-3.jpg",
    content:
      "Gosh, the 12% drawdown gave me breathing space. I could trade properly without pressure.",
    date: "03/06/2025",
  },
  {
    id: 4,
    name: "Mohammad Badawi",
    position: "Portfolio Manager",
    avatar: "/images/testimonial-4.jpg",
    content:
      "Gosh, the 12% drawdown gave me breathing space. I could trade properly without pressure.",
    date: "19/05/2025",
  },
  {
    id: 5,
    name: "Mohammad Badawi",
    position: "Crypto Trader",
    avatar: "/images/testimonial-5.jpg",
    content:
      "Gosh, the 12% drawdown gave me breathing space. I could trade properly without pressure.",
    date: "27/04/2025",
  },
];