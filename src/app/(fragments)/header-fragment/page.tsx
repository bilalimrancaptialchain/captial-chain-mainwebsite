"use client";

import React from "react";
import Header from "@/components/Header";

export default function HeaderFragment() {
  React.useEffect(() => {
    const send = () => {
      try {
        const h = document.body.scrollHeight;
        window.parent?.postMessage({ type: "cc-header-height", height: h }, "*");
      } catch {}
    };
    send();
    const ro = new ResizeObserver(send);
    ro.observe(document.body);
    window.addEventListener("load", send);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", send);
    };
  }, []);

  return (
    <div style={{ background: "transparent" }}>
      <Header />
    </div>
  );
}


