import AppBanner from "@/components/landing/AppBanner";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/landing/Faq";
import Features from "@/components/landing/Features";
import Header from "@/components/landing/Header";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import VideoMockup from "@/components/landing/VideoMockup";

const Users = () => {
  return (
    <div>
      <Header />
      <Features />
      <VideoMockup videoSrc="/videos/test-video.webm" />
      <HowItWorks />
      <Pricing />
      <Faq />
      <ContactForm />
      <AppBanner />
    </div>
  );
};

export default Users;
