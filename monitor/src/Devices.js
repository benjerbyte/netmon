// import React, { useEffect, useState } from 'react';

// function Devices() {
//   const [devices, setDevices] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/devices')
//       .then(response => response.json())
//       .then(data => setDevices(data.devices));
//   }, []);

//   return (
//     <div>
//       <h1>Devices</h1>
//       {devices.map(device => (
//         <div key={device.id}>
//           <h2>{device.name}</h2>
//           <p>OS: {device.os}</p>
//           <p>Vendor: {device.vendor}</p>
//           <p>IP: {device.ip_address}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Devices;

import React, { useEffect, useState } from 'react';

function Devices() {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/devices')
      .then(response => response.json())
      .then(data => setDevices(data.devices));
  }, []);

  return (
    <div>
      <h1>Devices</h1>
      {devices.map(device => (
        <div key={device.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px 0' }}>
          <div>
            <h2>Name</h2>
            <p>{device.name}</p>
          </div>
          <div>
          <h2>IP</h2>
            <p>{device.ip_address}</p>
          </div>
          <div>
            <h2>Vendor</h2>
            <p>{device.vendor}</p>
          </div>
          <div>
          <h2>OS</h2>
            <p>{device.os}</p> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default Devices;