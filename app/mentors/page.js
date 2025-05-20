"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import VideoMockup from "@/components/VideoMockup";
import { ConfigContext } from "@/utils/configContext";
import { useContext } from "react";

const mentors = () => {
  const {
    mentors: { header, features, howItWorks },
  } = useContext(ConfigContext);
  return (
    <div>
      <Header header={header} />
      <VideoMockup videoSrc="/videos/test-video.mp4" />
      <Features features={features} />
      <HowItWorks howItWorks={howItWorks} />
    </div>
  );
};

export default mentors;
