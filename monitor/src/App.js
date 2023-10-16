// import React from 'react';
// import Devices from './Devices';
// import DownDevices from './DownDevices';

// function App() {
//   return (
//     <div className="App">
//       <Devices />
//       <DownDevices />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Devices from './Devices';
import DownDevices from './DownDevices';

function App() {
  return (
    <div className="App">
      <Tabs>
        <TabList>
          <Tab>Devices</Tab>
          <Tab>DownDevices</Tab>
        </TabList>

        <TabPanel>
          <Devices />
        </TabPanel>
        <TabPanel>
          <DownDevices />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;
