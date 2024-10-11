"use client";

import React, { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import Header from "./_components/Header";
import NavigationBar from "./_components/NavigationBar";
import ContentTable from "./_components/ContentTable";

const SmoothNavigation: React.FC = () => {
  const { scrollY } = useScroll();
  const [selected, setSelected] = useState<string>("Project");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navX: MotionValue<number> = useTransform(scrollY, [0, 50], [0, 42]);
  const headerLogoScale: MotionValue<number> = useTransform(
    scrollY,
    [0, 50],
    [1, 0.8]
  );
  const navLogoOpacity: MotionValue<number> = useTransform(
    scrollY,
    [0, 50],
    [0, 1]
  );
  const navLogoWidth: MotionValue<number> = useTransform(
    scrollY,
    [0, 50],
    [0, 24]
  );
  const navLogoMargin: MotionValue<number> = useTransform(
    scrollY,
    [0, 50],
    [0, 0]
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-0">
        <Header headerLogoScale={headerLogoScale} />
      </div>

      <NavigationBar
        navRef={navRef}
        isMobile={isMobile}
        navX={navX}
        navLogoOpacity={navLogoOpacity}
        navLogoWidth={navLogoWidth}
        navLogoMargin={navLogoMargin}
        selected={selected}
        setSelected={setSelected}
      />

      <main className="mx-auto my-12 w-full max-w-7xl px-4 md:px-0">
        <ContentTable />
      </main>
    </div>
  );
};

export default SmoothNavigation;
