"use client";
import { useState } from "react";
import AnimatedText from "@/components/landing/AnimatedText";
import clsx from "clsx";
import { motion } from "@/lib/motion";
import SwirlArrowBottomLeft from "@/public/svg/swirlArrowBottomLeft";
import SwirlArrowBottomRight from "@/public/svg/swirlArrowBottomRight";
import SwirlArrowBottom from "@/public/svg/swirlArrowBottom";
import { homeHowItWorks, mentorsHowItWorks, usersHowItWorks } from "@/constants";
import { usePathname } from "next/navigation";

function HowItWorks() {
  const pathname = usePathname();
  // const [activeHowItWorks, setActiveHowItWorks] = useState("users"); // 'users' or 'mentors'
  // const howItWorks = activeHowItWorks === "users" ? usersHowItWorks : mentorsHowItWorks;
  let howItWorks;
  if (pathname === "/users") {
    howItWorks = usersHowItWorks;
  } else if (pathname === "/mentors") {
    howItWorks = mentorsHowItWorks;
  } else {
    howItWorks = homeHowItWorks;
  }

  return (
    <section id={howItWorks.id} className="overflow-hidden max-w-screen-lg mx-auto px-4 pb-20 md:pb-12 pt-12">
      <div className="my-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-3 font-roboto">
          <AnimatedText text={howItWorks.title} />
        </h1>
        <motion.div
          className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden [--w:200px] md:[--w:350px] mb-4"
          whileInView={{ width: "300px" }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -100px 0px" }}
        />
        {howItWorks.subtitle && (
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-md max-w-lg"
          >
            {howItWorks.subtitle}
          </motion.p>
        )}
      </div>

      {/* <div className="flex justify-center mb-8">
        <div className="relative bg-gray-100 rounded-full p-1 shadow-inner">
          <div className="flex">
            <button
              onClick={() => setActiveHowItWorks("users")}
              className={clsx(
                "relative px-12 py-3 rounded-full text-lg font-medium transition-all duration-300 ease-in-out",
                activeHowItWorks === "users"
                  ? "text-white shadow-md bg-gradient-to-r from-primary to-secondary"
                  : "text-gray-600 hover:text-gray-800"
              )}
            >
              Users
            </button>
            <button
              onClick={() => setActiveHowItWorks("mentors")}
              className={clsx(
                "relative px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 ease-in-out",
                activeHowItWorks === "mentors"
                  ? "text-white shadow-md bg-gradient-to-r from-primary to-secondary"
                  : "text-gray-600 hover:text-gray-800"
              )}
            >
              Mentors
            </button>
          </div>
        </div>
      </div> */}
      <motion.div
        // key={activeHowItWorks}
        initial="hidden"
        animate="visible"
        viewport={{ once: false }}
        className="flex flex-col gap-38 md:gap-32"
      >
        {howItWorks.steps.map((step, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className={clsx("text-(--dark) relative flex flex-col rounded-md md:flex-row", {
              "md:flex-row-reverse": index % 2 === 0,
            })}
          >
            {index < howItWorks.steps.length - 1 && (
              <>
                <motion.div
                  variants={{
                    hidden: {
                      scale: 0,
                      translateX: "-50%",
                    },
                    visible: { scale: 1, translateX: "-50%" },
                  }}
                  transition={{ stiffness: 150, type: "tween" }}
                  className="hidden w-32 absolute -bottom-30 left-1/2 md:block"
                >
                  {index % 2 === 0 ? <SwirlArrowBottomLeft /> : <SwirlArrowBottomRight />}
                </motion.div>
                <motion.div
                  variants={{
                    hidden: {
                      scale: 0,
                      translateX: "-50%",
                    },
                    visible: { scale: 1, translateX: "-50%" },
                  }}
                  transition={{ stiffness: 150, type: "tween" }}
                  className="w-10 absolute -bottom-32 left-1/2 md:hidden"
                >
                  <SwirlArrowBottom />
                </motion.div>
              </>
            )}
            <motion.div
              variants={{
                hidden: { x: index % 2 === 0 ? "100%" : "-100%", opacity: 0 },
                visible: { x: "0%", opacity: 1 },
              }}
              className="mb-8 flex flex-col text-center justify-center prose flex-1"
            >
              <div className="pb-0 font-amiri text-6xl md:text-8xl text-primary">
                {index < 10 && 0}
                {index + 1}
              </div>
              <h4 className="mt-0 text-2xl font-bold">{step.title}</h4>
              <p className="mx-auto max-w-sm opacity-[.7]">{step.subtitle}</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { x: index % 2 === 1 ? "100%" : "-100%", opacity: 0 },
                visible: { x: "0%", opacity: 1 },
              }}
              className="flex-1 flex justify-center"
            >
              <img className="rounded-3xl w-[70%] h-[240px] object-cover" src={step.image} alt={`step ${index}`} />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default HowItWorks;
