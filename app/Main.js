"use client";
import Faq from "@/components/Faq";
import Header from "@/components/Header";
import { ConfigContext } from "@/utils/configContext";
import templateConfig from "@/utils/config";
import React from "react";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import AppBanner from "@/components/AppBanner";
import Pricing from "@/components/Pricing";
import VideoMockup from "@/components/VideoMockup";

const Main = () => {
  return (
    <ConfigContext.Provider value={templateConfig}>
      <div>
        <Header />
        <Features />
        <VideoMockup videoSrc="/videos/test-video.mp4" />
        <HowItWorks />
        <Pricing />
        <Faq />
        <AppBanner />
      </div>
    </ConfigContext.Provider>
  );
};

export default Main;
