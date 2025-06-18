import React from 'react';
import RSVPForm from './components/RSVPForm';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="container">
      <h1>🎉 Birthday Invitation 🎉</h1>
      <video width="90%" controls autoPlay loop>
        <source src="/birthday.mp4" type="video/mp4" />
      </video>
      <RSVPForm />
      <MapComponent />
    </div>
  );
}

export default App;
