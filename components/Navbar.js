"use client";

import AnimatedList from "@/components/AnimatedList";
import MenuToggle from "@/components/MenuToggle";
// import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ConfigContext } from "@/utils/configContext";
import { motion } from "@/lib/motion";
import { useContext, useState } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

function Navbar() {
  const { name, showThemeSwitch, topNavbar, theme } = useContext(ConfigContext);

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold font-roboto text-(--dark)/80 hover:text-primary transition"
          >
            <img src="./favicon/favicon.svg" width={48} height={48} alt="farahgpt-logo" className="inline mr-2" />
            {name}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          {topNavbar.links.map(({ title, href }, index) => (
            <Link key={index} href={href} className="transition text-(--dark) hover:text-primary">
              {title}
            </Link>
          ))}
          {topNavbar.cta && (
            <HoverCard>
              <HoverCardTrigger className="group ml-4 px-4 py-2 rounded-full text-sm font-semibold border border-primary hover:text-muted text-primary hover:bg-primary transition flex items-center gap-2">
                {topNavbar.cta}
                <ChevronDownIcon className="size-5 transition-transform duration-200 group-hover:rotate-180" />
              </HoverCardTrigger>
              <HoverCardContent className="flex flex-col space-y-2 bg-white/75 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                <Link
                  href="/users"
                  className="block px-4 py-2 rounded-md text-sm font-medium border border-primary text-primary hover:text-muted hover:bg-primary transition"
                >
                  Become User
                </Link>
                <Link
                  href="/mentors"
                  className="block px-4 py-2 rounded-md text-sm font-medium border border-primary text-primary hover:text-muted hover:bg-primary transition"
                >
                  Become Mentor
                </Link>
              </HoverCardContent>
            </HoverCard>
          )}

          {/* {showThemeSwitch && <ThemeSwitcher />} */}
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-2">
          {/* {showThemeSwitch && <ThemeSwitcher />} */}
          <MenuToggle toggle={() => setIsMobileNavVisible((current) => !current)} isOpen={isMobileNavVisible} />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatedList
        listKey="mobile-navbar"
        isVisible={isMobileNavVisible}
        listClassName="absolute top-full left-0 w-full bg-[#1d232a] shadow-lg flex flex-col px-4 py-6 space-y-3 md:hidden"
      >
        {topNavbar.links.map(({ title, href }, index) => (
          <motion.a
            key={index}
            href={href}
            className="text-lg font-medium text-white hover:text-(--dark) transition"
            variants={{
              show: { x: 120, opacity: 1 },
              hidden: { x: "-100%", opacity: 0 },
            }}
            onClick={() => setIsMobileNavVisible(false)}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            {title}
          </motion.a>
        ))}
        {topNavbar.cta && (
          <>
            <Link
              href="/users"
              className="mt-4 text-center px-4 py-2 rounded-full text-sm font-semibold border border-white text-white hover:bg-primary hover:text-white transition"
              onClick={() => setIsMobileNavVisible(false)}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              Become User
            </Link>
            <Link
              href="/mentors"
              className="mt-2 text-center px-4 py-2 rounded-full text-sm font-semibold border border-white text-white hover:bg-primary hover:text-white transition"
              onClick={() => setIsMobileNavVisible(false)}
              transition={{
                delay: 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              Become Mentor
            </Link>
          </>
        )}
      </AnimatedList>
    </nav>
  );
}

export default Navbar;
