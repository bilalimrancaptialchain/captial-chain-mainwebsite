"use client";

import { IntercomProvider } from "react-use-intercom";

interface IntercomWrapperProps {
  children: React.ReactNode;
}

export default function IntercomWrapper({ children }: IntercomWrapperProps) {
  return (
    <IntercomProvider appId="nsq0eoof" autoBoot={false}>
      {children}
    </IntercomProvider>
  );
}
