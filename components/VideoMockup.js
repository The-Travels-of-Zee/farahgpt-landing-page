import { motion } from "@/lib/motion";
import AnimatedText from "./AnimatedText";
import IPhoneVideoFrame from "./IPhoneVideoFrame";

export default function VideoMockup({ videoSrc }) {
  if (!videoSrc) return null;

  return (
    <section className="overflow-hidden max-w-screen-lg mx-auto px-4 pb-12 pt-4 md:pt-12">
      <div className="mb-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-0">
          <AnimatedText text="Watch the demo" />
        </h1>
        <motion.p
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{ y: "0%", opacity: 0.7 }}
          viewport={{ once: true }}
          className="text-xl max-w-lg"
        >
          How this app works and what it can do for you
        </motion.p>
      </div>
      <motion.div
        initial={{ scale: 0.4, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "tween",
          stiffness: 200,
          mass: 0.4,
          duration: 0.5,
          delay: 0.3,
        }}
        className="relative mx-auto w-[300px] sm:w-[360px] md:w-[400px] h-auto"
      >
        {/* Video should sit behind the phone frame */}
        <IPhoneVideoFrame
          src={<video src={videoSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />}
        />
      </motion.div>
    </section>
  );
}
