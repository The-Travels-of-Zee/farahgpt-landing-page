"use client";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { motion } from "@/lib/motion";
import Link from "next/link";
import { footer } from "@/constants";

function Footer() {
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full">
          {/* Left - Navigation Links */}
          <div className="flex flex-col gap-4">
            {footer.links.map(({ title, href }, index) => (
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

          {/* Right - Socials + Powered By (Desktop only) */}
          <div className="hidden md:flex flex-col mx-auto md:mx-0 items-end gap-2 mt-8 md:mt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex gap-4"
            >
              {footer.socials?.map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: index * 0.15, duration: 0.3, ease: "easeOut" }}
                  className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center ease-in-out duration-200"
                  target="_blank"
                  href={link}
                >
                  <Icon className="size-5 text-white" />
                </motion.a>
              ))}
            </motion.div>
            {footer.poweredBy && (
              <Link href={footer.poweredBy.link} target="_blank" rel="noopener noreferrer">
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
                    className="w-48 invert hover:invert-0 inline ml-1 hover:bg-accent ease-in-out duration-200"
                  />
                </motion.div>
              </Link>
            )}
          </div>
        </div>

        {/* Bottom Section: Mobile Socials + Powered + Legal */}
        <div className="flex flex-col md:flex-row justify-between w-full text-white gap-6">
          {/* Mobile Social Icons and Powered By */}
          <div className="flex flex-col gap-4 items-start md:hidden w-full">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="flex gap-4"
            >
              {footer.socials?.map(({ icon: Icon, link }, index) => (
                <motion.a
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ delay: index * 0.15, duration: 0.3, ease: "easeOut" }}
                  className="w-10 h-10 bg-accent/20 hover:bg-accent rounded-full flex items-center justify-center ease-in-out duration-200"
                  target="_blank"
                  href={link}
                >
                  <Icon className="size-5 text-white" />
                </motion.a>
              ))}
            </motion.div>

            {footer.poweredBy && (
              <Link href={footer.poweredBy.link} target="_blank" rel="noopener noreferrer">
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
                    className="w-48 invert hover:invert-0 inline ml-1 hover:bg-accent ease-in-out duration-200"
                  />
                </motion.div>
              </Link>
            )}
          </div>

          {/* Legal Links */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center text-sm text-white w-full md:justify-end">
            {footer.legalLinks.privacyPolicy && (
              <motion.a
                variants={{
                  hidden: { opacity: 0, scale: 0.4 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: 0.25 }}
                className="font-bold hover:text-accent ease-in-out duration-200"
                href="/privacy-policy"
              >
                Privacy policy
              </motion.a>
            )}
            {footer.legalLinks.termsAndConditions && (
              <motion.a
                variants={{
                  hidden: { opacity: 0, scale: 0.4 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ delay: 0.25 }}
                className="font-bold hover:text-accent ease-in-out duration-200"
                href="/terms-and-conditions"
              >
                Terms And Conditions
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
