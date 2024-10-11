import React from "react";
import Tab from "./Tab";

const navigationTabs: string[] = [
  "Project",
  "Deployments",
  "Analytics",
  "Speed Insights",
  "Logs",
  "Storage",
  "Settings",
];

interface NavigationTabsProps {
  selected: string;
  setSelected: (value: string) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  selected,
  setSelected,
}) => (
  <>
    {navigationTabs.map((tab) => (
      <Tab
        key={tab}
        text={tab}
        selected={selected === tab}
        setSelected={setSelected}
        customID="nav"
      />
    ))}
  </>
);

export default NavigationTabs;
