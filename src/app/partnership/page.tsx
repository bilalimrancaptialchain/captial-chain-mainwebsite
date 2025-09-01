import React from "react";
import PropTrading from "./components/prop-trading";
import CommissionModel from "./components/commission-model";
import Ranks from "./components/ranks";
import HowDoesItWork from "./components/how-does-it-work";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Header />
      <div className="w-full flex items-start justify-start flex-col">
        <PropTrading />
        <CommissionModel />
        <Ranks />
        <HowDoesItWork />
      </div>
      <Footer />
    </>
  );
}
