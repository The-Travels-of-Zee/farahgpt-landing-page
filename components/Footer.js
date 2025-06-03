"use client";
import { useContext } from "react";
import { ConfigContext } from "@/utils/configContext";
import { FaSquareUpwork, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "@/lib/motion";
import Link from "next/link";

function Footer() {
  const {
    footer: { links, legalLinks, socials, poweredBy },
  } = useContext(ConfigContext);

  return (
    <footer className="relative bg-primary px-4 py-12 mt-12">
      <div className="absolute rounded-t-[50%] -top-12 left-0 bg-primary w-full h-12" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-screen-lg mx-auto flex flex-col gap-8"
      >
        {/* Top Section: Links Left - Socials + PoweredBy Right */}
        <div className="flex flex-col md:flex-row justify-between items-end w-full">
          {/* Left - Navigation Links */}
          <div className="flex flex-col gap-4">
            {links.map(({ title, href }, index) => (
              <motion.a
                key={index}
                variants={{
                  hidden: { opacity: 0, x: "-100%" },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: index * 0.25, type: "tween" }}
                className="text-xl font-bold block uppercase text-white hover:underline md:text-4xl"
                href={href}
              >
                {title}
              </motion.a>
            ))}
          </div>

          {/* Right - Socials + Powered By */}
          <div className="flex flex-col items-end gap-2 mt-8 md:mt-0">
            {socials.linkedin && (
              <motion.a
                variants={{
                  hidden: { opacity: 0, x: "-100%" },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={{ delay: 0.75 }}
                className="w-10 h-10 mb-3 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center"
                target="_blank"
                href={socials.linkedin}
              >
                <FaLinkedinIn className="size-5 text-white" />
              </motion.a>
            )}
            {poweredBy && (
              <Link href={poweredBy.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.4 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ delay: 1 }}
                  className="text-sm text-white"
                >
                  Powered by{" "}
                  <img
                    src="./favicon/the-travels-of-zee-logo.png"
                    alt="the-travels-of-zee-logo"
                    className="w-48 invert hover:invert-0 inline ml-1 hover:bg-accent"
                  />
                </motion.div>
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Section: Right-aligned Legal */}
        <div className="flex justify-end w-full">
          <div className="flex flex-col md:flex-row gap-4 items-end md:items-center text-sm text-white">
            {legalLinks.privacyPolicy && (
              <motion.a
                variants={{
                  hidden: { opacity: 0, scale: 0.4 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: 0.25 }}
                className="font-bold hover:text-accent"
                href="/privacy-policy"
              >
                Privacy policy
              </motion.a>
            )}

            <motion.p
              variants={{
                hidden: { opacity: 0, scale: 0.4 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: 0.5 }}
              className="text-blue-100"
            >
              All rights reserved © {new Date().getFullYear()}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
