import { Box, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import './Tabs.scss'
import { ITabsParam } from './Tabs.model';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const TabsCustom = ({defaultTab = 0, tabs}:ITabsParam) => {
    const [value, setValue] = useState(defaultTab)
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    }
  
    return (
      <Box sx={{ width: '100%' }}>
        <Tabs
          onChange={handleChange}
          value={value}
          aria-label="Tabs where each tab needs to be selected manually"
        >
          {
            tabs.map(tab => {
              return (
                <Tab key={uuid()} label={tab.label} value={tab.value}/>
              )
            })
          }
        </Tabs>
        {
          tabs.map(tab => {
            return (
              <TabPanel key={uuid()} value={value} index={tab.value}>
                {tab.element}
              </TabPanel>
            )
          })
        }
      </Box>
    );
}

export default TabsCustom