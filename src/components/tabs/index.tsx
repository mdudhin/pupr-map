import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./based";

enum Orientation {
  vertical = 'vertical',
  horizontal = 'horizontal',
}


interface TabItem {
    trigger: React.ReactNode;
    value: string;
    content: React.ReactNode;
  }
  
  interface CustomTabsProps {
    tabs: TabItem[];
    onValueChange?: ()=> void
    orientation?: Orientation;
    asChild?: boolean;
  }
  
  const CustomTabs: React.FC<CustomTabsProps> = ({ onValueChange, tabs, orientation, asChild }) => {
    return (
      <Tabs asChild={asChild} orientation={orientation} onValueChange={onValueChange} defaultValue={tabs[0].value}>
        <TabsList>
          {tabs.map((tab, index) => (
            <TabsTrigger key={index} value={tab.value}>
              {tab.trigger}
            </TabsTrigger>
          ))}
        </TabsList>
        {tabs.map((tab, index) => (
          <TabsContent key={index} value={tab.value}>
            {tab.content}
          </TabsContent>
        ))}
      </Tabs>
    );
  };
  
export {CustomTabs}
