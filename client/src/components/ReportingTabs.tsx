import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReportEditor from "./ReportEditor";
type TtabsCount = {
  tabsCount: string[];
};
const ReportingTabs = ({ tabsCount }: TtabsCount) => {
  console.log(tabsCount);
  return (
    <div>
      <Tabs>
        <TabList>
          {tabsCount?.map((item) => (
            <Tab>{item}</Tab>
          ))}
        </TabList>
        {tabsCount?.map((item) => (
          <TabPanel>
            <ReportEditor item={item} />
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ReportingTabs;
