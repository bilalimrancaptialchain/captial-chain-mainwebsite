import LoadingScreen from "@/components/LoadingScreen";

export default function Loading() {
  // Show only if loading takes longer than the threshold. Do not auto-hide; Next will unmount this when ready.
  return <LoadingScreen delayMs={800} autoHideMs={null} />;
}


