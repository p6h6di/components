import React from "react";
import { motion, useDragControls, MotionValue } from "framer-motion";
import { LampDesk } from "lucide-react";
import NavigationTabs from "./NavigationTabs";

interface NavigationBarProps {
  navRef: React.RefObject<HTMLDivElement>;
  isMobile: boolean;
  navX: MotionValue<number>;
  navLogoOpacity: MotionValue<number>;
  navLogoWidth: MotionValue<number>;
  navLogoMargin: MotionValue<number>;
  selected: string;
  setSelected: (value: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({
  navRef,
  isMobile,
  navX,
  navLogoOpacity,
  navLogoWidth,
  navLogoMargin,
  selected,
  setSelected,
}) => {
  const dragControls = useDragControls();

  return (
    <div className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto w-full max-w-7xl">
        <nav className="flex h-12 items-center overflow-hidden">
          <motion.div
            ref={navRef}
            className="inline-flex w-full items-center py-1"
            drag={isMobile ? "x" : false}
            dragControls={dragControls}
            dragConstraints={navRef}
          >
            {!isMobile && (
              <motion.div
                className="flex items-center overflow-hidden"
                style={{
                  width: navLogoWidth,
                  marginRight: navLogoMargin,
                  opacity: navLogoOpacity,
                }}
              >
                <LampDesk className="size-6 text-black" />
              </motion.div>
            )}
            <motion.div
              style={isMobile ? {} : { x: navX }}
              className="flex space-x-6 px-4 md:px-0"
            >
              <NavigationTabs selected={selected} setSelected={setSelected} />
            </motion.div>
          </motion.div>
        </nav>
      </div>
    </div>
  );
};

export default NavigationBar;
