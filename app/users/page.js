"use client";
import Features from "@/components/Features";
import Header from "@/components/Header";
import VideoMockup from "@/components/VideoMockup";
import { ConfigContext } from "@/utils/configContext";
import { useContext } from "react";

const Users = () => {
  const {
    users: { header, features },
  } = useContext(ConfigContext);
  return (
    <div>
      <Header header={header} />
      <VideoMockup videoSrc="/videos/test-video.mp4" />
      <Features features={features} />
    </div>
  );
};

export default Users;
