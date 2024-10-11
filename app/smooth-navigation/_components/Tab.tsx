import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TabProps {
  text: string;
  selected: boolean;
  setSelected: (value: string) => void;
  customID: string;
}

const Tab: React.FC<TabProps> = ({ text, selected, setSelected, customID }) => (
  <button
    type="button"
    onClick={() => setSelected(text)}
    className={cn(
      "relative rounded-md font-normal text-sm transition-colors duration-300 whitespace-nowrap",
      selected ? "text-black font-medium" : "text-gray-500 hover:text-black"
    )}
  >
    <span className="relative z-10">{text}</span>
    {selected && (
      <motion.div
        className="absolute inset-x-0 bottom-[-15px] flex items-end justify-center"
        layoutId={`${customID}linetab`}
        transition={{ type: "spring", duration: 0.4, bounce: 0, delay: 0.1 }}
      >
        <span className="z-0 h-[2px] w-full rounded-e-full rounded-s-full bg-black" />
      </motion.div>
    )}
  </button>
);

export default Tab;
