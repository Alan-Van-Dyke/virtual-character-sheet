import "../style/SheetTabs.css";
import { useState } from "react";

interface SheetTabsProps {
  tabs: {
    label: string;
    icon: JSX.Element;
    key: number;
    content: JSX.Element;
  }[];
  activeTab: {
    label: string;
    icon: JSX.Element;
    key: number;
    content: JSX.Element;
  };
  setActiveTab: (tab: {
    label: string;
    icon: JSX.Element;
    key: number;
    content: JSX.Element;
  }) => void;
}

const SheetTabs = ({ tabs, activeTab, setActiveTab }: SheetTabsProps) => {
  function updateActiveTab(key: number) {
    setActiveTab(tabs.filter((tab) => tab.key === key)[0]);
  }

  return (
    <div className="tabs-container">
      {tabs.map((item, index) => (
        <button
          key={index}
          className={
            "sheet-tab" +
            (activeTab.key === item.key ? "" : " sheet-tab-selected")
          }
          onClick={() => updateActiveTab(item.key)}
        >
          <h1>{item.icon}</h1>
          <h4>{item.label}</h4>
        </button>
      ))}
    </div>
  );
};

export default SheetTabs;
