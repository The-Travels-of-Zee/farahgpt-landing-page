"use client";
import { motion, useScroll } from "@/lib/motion";
import { useRef } from "react";
import SingleScreenshot from "@/components/SingleScreenshot";
// import SVGWave from "@/public/svg/wave";
import SVGBlob from "@/public/svg/blob";
import InputEmail from "./InputEmail";
import { usePathname } from "next/navigation";

function Header({ header, partners }) {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  if (!header) return null;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Determine container height and parent height based on screenshot count
  const containerHeight = header.screenshots.length === 1 ? "min-h-screen" : "min-h-[300vh]";
  const leftColumnHeight = header.screenshots.length === 1 ? "h-auto" : "md:h-[300vh]";

  return (
    <section id={header.id} className="relative pb-8 md:pb-4">
      <div className="max-w-screen-lg mx-auto pb-12 px-4 md:py-16">
        <div className="flex flex-col md:flex-row">
          <div className={`flex flex-1 items-center md:items-start ${leftColumnHeight}`}>
            <div className="static top-40 flex flex-col prose justify-center py-8 md:sticky md:h-[548px]">
              <div className="flex flex-col gap-2 my-4 3xs:flex-row">
                {header.rewards?.map((reward, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center h-8 md:h-12"
                  >
                    <img src="/misc/wreath-left.webp" className="h-full" />
                    <p className="text-2xl font-black text-gray-500 whitespace-pre">{reward}</p>
                    <img src="/misc/wreath-right.webp" className="h-full" />
                  </motion.div>
                ))}
              </div>
              <motion.h2
                initial={{ opacity: 0, rotateZ: -10 }}
                animate={{ opacity: 1, rotateZ: 0 }}
                className="mt-0 mb-4 text-4xl text-gray-800 md:text-6xl font-bold font-roboto"
              >
                {header.headlineMark ? (
                  <>
                    {header.headline.split(" ").slice(0, header.headlineMark[0]).join(" ")}{" "}
                    <span className="inline-block relative">
                      <span>
                        {header.headline
                          .split(" ")
                          .slice(...header.headlineMark)
                          .join(" ")}
                      </span>
                      <motion.span
                        initial={{ width: 0, opacity: 1 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                        className="absolute top-0 left-0 bottom-0 z-[-1] bg-primary rounded-lg"
                        style={{ height: "100%" }}
                      />
                    </span>{" "}
                    {header.headline.split(" ").slice(header.headlineMark[1]).join(" ")}
                  </>
                ) : (
                  header.headline
                )}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.7, x: 0 }}
                transition={{ delay: 0.5, ease: "easeInOut" }}
                className="whitespace-pre-wrap text-left m-0 my-1 font-notosans max-w-md md:text-lg md:max-w-lg"
              >
                {header.subtitle}
              </motion.p>
              <motion.ul
                initial={{ opacity: 0, y: "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="list-none flex gap-4 m-0 p-0 text-black"
              >
                {!header.input && (
                  <li className="flex flex-row gap-5 my-4">
                    <a
                      href="/users"
                      className="block px-4 py-2 rounded-md text-sm font-medium border border-secondary text-secondary hover:text-muted hover:bg-secondary transition"
                    >
                      Become User
                    </a>
                    <a
                      href="/mentors"
                      className="block px-4 py-2 rounded-md text-sm font-medium border border-primary text-primary hover:text-muted hover:bg-primary transition"
                    >
                      Become Mentor
                    </a>
                  </li>
                )}
                {header.input && (
                  <li className=" w-full max-w-md">
                    <div className="my-8">
                      <InputEmail title="Notify Me" apiUrl="/api/newsletter" type={header.type} />
                      <a
                        href={pathname === "/mentors" ? "/users" : "/mentors"}
                        className={`block px-4 py-2 mt-4 rounded-md text-sm font-medium border hover:text-muted ${
                          pathname === "/mentors"
                            ? "border-primary text-primary hover:bg-primary"
                            : "border-secondary text-secondary hover:bg-secondary"
                        } transition max-w-max`}
                      >
                        Become {pathname === "/mentors" ? "User" : "Mentor"}
                      </a>
                    </div>
                  </li>
                )}
              </motion.ul>
              {header.usersDescription && (
                <div className="not-prose flex items-center gap-3 my-1">
                  <ul className="flex -space-x-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <motion.li
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="w-8 h-8 rounded-full border-2 overflow-hidden"
                      >
                        <img
                          src={`/avatars/${index + 1}.webp`}
                          alt={`User ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.li>
                    ))}
                  </ul>
                  <motion.p
                    className="text-sm"
                    initial={{ scale: 0, opacity: 0, y: "100%" }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    {header.usersDescription}
                  </motion.p>
                </div>
              )}
            </div>
          </div>
          <div
            className={`${containerHeight} z-[-1] mx-auto ${
              header.screenshots.length === 1 ? "flex items-center" : ""
            }`}
            ref={ref}
          >
            <div className={`${header.screenshots.length === 1 ? "" : "sticky"} top-28 md:top-40 flex justify-center`}>
              <SVGBlob
                scrollYProgress={scrollYProgress}
                className="-z-10 absolute hidden w-[800px] -top-20 -right-60 md:hidden xl:block"
              />
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
                className="relative h-[548px] 2xs:h-[720px] sm:h-[648px] md:h-[548px] rounded-[3rem]"
              >
                <div className="absolute top-2.5 left-3 w-[calc(100%-24px)] h-[calc(100%-16px)] rounded-[1rem] 2xs:rounded-[2rem] overflow-hidden">
                  {header.screenshots.map((src, index) => (
                    <SingleScreenshot
                      key={src}
                      src={src}
                      scrollYProgress={scrollYProgress}
                      index={index}
                      totalCount={header.screenshots.length}
                    />
                  ))}
                </div>
                <img src="/misc/iphone-frame.webp" alt="iphone-frame" className="relative z-10 h-full" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
