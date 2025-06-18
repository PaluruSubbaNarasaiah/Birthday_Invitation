import React, { useState } from 'react';
import axios from 'axios';
import './RSVPForm.css'; // Ensure to import your CSS

function RSVPForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', attending: false });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/guests/rsvp', form);
      alert('Submitted Successfully!');
      setForm({ name: '', email: '', phone: '', attending: false }); // reset form
    } catch (err) {
      alert('Failed to submit');
    }
  };

  return (
    <div className="rsvp-container">
      <h2>Heartly Welcome</h2>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          required
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          required
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <label className="checkbox">
          <input
            type="checkbox"
            checked={form.attending}
            onChange={(e) => setForm({ ...form, attending: e.target.checked })}
          />
          Ready To Attend
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RSVPForm;
