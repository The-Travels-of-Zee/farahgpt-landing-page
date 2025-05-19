"use client";

import AnimatedList from "@/components/AnimatedList";
import MenuToggle from "@/components/MenuToggle";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { ConfigContext } from "@/utils/configContext";
import { motion } from "@/lib/motion";
import { useContext, useState } from "react";

function Navbar() {
  const { name, showThemeSwitch, topNavbar, theme } = useContext(ConfigContext);

  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Logo / Title */}
        <div className="flex items-center space-x-2">
          <a href="/" className="text-2xl md:text-3xl font-bold font-amiri text-(--dark) hover:text-primary transition">
            {name}
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-lg">
          {topNavbar.links.map(({ title, href }, index) => (
            <a key={index} href={href} className="transition text-(--dark) hover:text-primary">
              {title}
            </a>
          ))}
          {topNavbar.cta && (
            <a
              href="#waitlist"
              className="ml-4 px-4 py-2 rounded-full text-sm font-semibold border border-primary hover:text-muted text-primary hover:bg-primary transition"
            >
              {topNavbar.cta}
            </a>
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
          >
            {title}
          </motion.a>
        ))}
        {topNavbar.cta && (
          <a
            href="#waitlist"
            className="mt-4 text-center px-4 py-2 rounded-full text-sm font-semibold border border-white text-white hover:bg-primary hover:text-white transition"
          >
            {topNavbar.cta}
          </a>
        )}
      </AnimatedList>
    </nav>
  );
}

export default Navbar;
