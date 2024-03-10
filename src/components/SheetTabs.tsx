import "../style/SheetTabs.css";
import { useState } from "react";

interface SheetTabsProps {
  tabs: { label: string; icon: JSX.Element; id: number, content: JSX.Element }[];
  activeTab: { label: string; icon: JSX.Element; id: number, content: JSX.Element };
  setActiveTab: (tab: { label: string; icon: JSX.Element; id: number, content: JSX.Element }) => void;
}

const SheetTabs = ({ tabs, activeTab, setActiveTab }: SheetTabsProps) => {
  function updateActiveTab(id: number) {
    setActiveTab(tabs.filter(tab => tab.id === id)[0]);
  }

  return (
    <div className="tabs-container">
      {tabs.map((item, index) => (
        <button
          key={index}
          className={
            "sheet-tab" + (activeTab.id === item.id ? "" : " sheet-tab-selected")
          }
          onClick={() => updateActiveTab(item.id)}
        >
          <h1>{item.icon}</h1>
          <h4>{item.label}</h4>
        </button>
      ))}
    </div>
  );
};

export default SheetTabs;
