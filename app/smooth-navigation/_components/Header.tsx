import React from "react";
import { motion, MotionValue } from "framer-motion";
import { LampDesk } from "lucide-react";

interface HeaderProps {
  headerLogoScale: MotionValue<number>;
}

const Header: React.FC<HeaderProps> = ({ headerLogoScale }) => (
  <header className="flex h-20 items-center justify-between">
    <motion.div
      className="flex items-center"
      style={{ scale: headerLogoScale }}
    >
      <LampDesk className="size-8" />
    </motion.div>
    <div className="size-12 animate-pulse rounded-full bg-gray-200" />
  </header>
);

export default Header;
