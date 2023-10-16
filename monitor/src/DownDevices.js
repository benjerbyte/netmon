import React, { useEffect, useState } from 'react';

function DownDevices() {
  const [downDevices, setDownDevices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/monitor')
      .then(response => response.json())
      .then(data => {
        const downDeviceNames = Object.keys(data).filter(name => data[name] === 'down');
        setDownDevices(downDeviceNames);
      });
  }, []);

  return (
    <div>
      <h1>Down Devices</h1>
      {downDevices.map(name => (
        <div key={name}>
          <h2>{name}</h2>
        </div>
      ))}
    </div>
  );
}

export default DownDevices;


// import React, { useEffect, useState } from 'react';

// function DownDevices() {
//   const [downDevices, setDownDevices] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:5000/monitor')
//       .then(response => response.json())
//       .then(data => {
//         const downDevicesData = Object.keys(data)
//           .filter(name => data[name].status === 'down')
//           .map(name => ({ name, downTime: data[name].downTime }));
//         setDownDevices(downDevicesData);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Down Devices</h1>
//       {downDevices.map(device => (
//         <div key={device.name}>
//           <h2>{device.name}</h2>
//           <p>Went down at: {new Date(device.downTime).toLocaleString()}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DownDevices;
