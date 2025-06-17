import AppBanner from "@/components/landing/AppBanner";
import ContactForm from "@/components/ContactForm";
import Faq from "@/components/landing/Faq";
import Features from "@/components/landing/Features";
import Header from "@/components/landing/Header";
import HowItWorks from "@/components/landing/HowItWorks";
import MentorDashboard from "@/components/landing/MentorDashboard";
import VideoMockup from "@/components/landing/VideoMockup";

const mentors = () => {
  return (
    <div>
      <Header />
      <Features />
      <VideoMockup videoSrc="/videos/test-video.webm" />
      <MentorDashboard />
      <HowItWorks />
      <Faq />
      <ContactForm />
      <AppBanner />
    </div>
  );
};

export default mentors;
