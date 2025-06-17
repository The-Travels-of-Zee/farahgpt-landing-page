import Faq from "@/components/landing/Faq";
import Header from "@/components/landing/Header";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import AppBanner from "@/components/landing/AppBanner";
import Pricing from "@/components/landing/Pricing";
import VideoMockup from "@/components/landing/VideoMockup";
import ContactForm from "@/components/ContactForm";
import MentorDashboard from "@/components/landing/MentorDashboard";

const Main = () => {
  return (
    <main>
      <Header />
      <Features />
      <VideoMockup videoSrc="/videos/test-video.webm" />
      <HowItWorks />
      {/* <MentorDashboard /> */}
      <Pricing />
      <Faq />
      <ContactForm />
      <AppBanner />
    </main>
  );
};

export default Main;
