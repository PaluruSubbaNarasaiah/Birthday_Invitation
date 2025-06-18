import React from 'react';

function MapComponent() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>📍 Venue Location</h2>
      <iframe
       title="Venue Location Map" 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.692410426021!2d81.86500529999999!3d16.491065599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37ddf5aedbab85%3A0xf5fa32bbeb5b2959!2sMRK%20INN-MINI%20FUNCTION%20HALL-RK%20INFRA!5e1!3m2!1sen!2sin!4v1750254403890!5m2!1sen!2sin"
        height="450"
        allowFullScreen=""
        loading="lazy"
        style={{ border: 0 }}
      ></iframe>
    </div>
  );
}

export default MapComponent;
