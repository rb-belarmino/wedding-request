import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import FaithSection from "@/components/FaithSection";
import VideoSection from "@/components/VideoSection";
import Proposal from "@/components/Proposal";

export default function Home() {
  return (
    <main className="w-full relative">
      <HeroSection />
      <Timeline />
      <FaithSection />
      <VideoSection />
      <Proposal />
    </main>
  );
}
