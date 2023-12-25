// import { Container, TabsLi, TabsUl } from "./styles";
import Tab from "./Tab";
import { TabProps } from "./Tab/types";
import type { TabsProps } from "./types";

export default function Tabs({ tabs, className }: TabsProps): JSX.Element {
  return (
    <Container className={className}>
      <TabsUl>
        {tabs.map(
          (tab: TabProps, index) =>
            !tab.hideTab && (
              <TabsLi key={index}>
                <Tab
                  label={tab.label}
                  onClick={tab.onClick}
                  active={tab.active}
                  notifications={tab.notifications}
                  dataTour={tab.dataTour}
                />
              </TabsLi>
            )
        )}
      </TabsUl>
    </Container>
  );
}
