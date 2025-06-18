// import React from 'react';
// import RSVPForm from './components/RSVPForm';
// import MapComponent from './components/MapComponent';

// function App() {
//   return (
//     <div className="container">
//       <h1>🎉 Birthday Invitation 🎉</h1>
//       <video width="90%" controls autoPlay loop>
//         <source src="/birthday.mp4" type="video/mp4" />
//       </video>
//       <RSVPForm />
//       <MapComponent />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import RSVPForm from './components/RSVPForm';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="container text-center p-4">
      <h1>🎉 Birthday Invitation 🎉</h1>

      {/* Display the image instead of video */}
      <img
        src="/birthday report.jpg"
        alt="Birthday Invitation"
        style={{ width: '90%', borderRadius: '10px', margin: '20px 0' }}
      />

      {/* RSVP Form */}
      <RSVPForm />

      {/* Map */}
      <MapComponent />
    </div>
  );
}

export default App;
