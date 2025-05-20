import { motion } from "@/lib/motion";
import AnimatedText from "./AnimatedText";

export default function VideoMockup({ videoSrc }) {
  if (!videoSrc) return null;

  return (
    <section className="overflow-hidden max-w-screen-lg mx-auto px-4 py-12">
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
        className="relative mx-auto w-full h-[548px] 2xs:h-[720px] sm:h-[648px] md:h-[548px] rounded-[3rem]"
      >
        <div className="absolute top-2.5 left-3 w-[calc(100%-24px)] h-[calc(100%-16px)] rounded-[1rem] 2xs:rounded-[2rem] overflow-hidden z-0">
          <video src={videoSrc} autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </div>
        <img
          src="/misc/iphone-frame.webp"
          alt="iphone-frame"
          className="relative z-10 h-full mx-auto pointer-events-none"
        />
      </motion.div>
    </section>
  );
}
