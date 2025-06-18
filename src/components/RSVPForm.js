// import React, { useState } from 'react';
// import axios from 'axios';
// import './RSVPForm.css'; // Ensure to import your CSS

// function RSVPForm() {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', attending: false });
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/guests/rsvp', form);
//       alert('Submitted Successfully!');
//       setForm({ name: '', email: '', phone: '', attending: false }); // reset form
//     } catch (err) {
//       alert('Failed to submit');
//     }
//   };

//   return (
//     <div className="rsvp-container">
//       <h2>Heartly Welcome</h2>
//       <form className="rsvp-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Full Name"
//           value={form.name}
//           required
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//         />
//         <input
//           type="email"
//           placeholder="Email Address"
//           value={form.email}
//           required
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           value={form.phone}
//           required
//           onChange={(e) => setForm({ ...form, phone: e.target.value })}
//         />
//         <label className="checkbox">
//           <input
//             type="checkbox"
//             checked={form.attending}
//             onChange={(e) => setForm({ ...form, attending: e.target.checked })}
//           />
//           Ready To Attend
//         </label>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default RSVPForm;


import React, { useState } from 'react';
import './RSVPForm.css'; // Make sure this CSS file exists or remove the line if not used

function RSVPForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    attending: false,
  });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const scriptURL = 'https://script.google.com/macros/s/AKfycbypw45PfG3K0rALIVpa2g9nrkaTKVPMXjK3b2tQvFYLCceNmAjSzH_Al350dNWt_oc/exec'

    try {
      const formData = new FormData();
      formData.append('name', form.name);
      formData.append('email', form.email);
      formData.append('phone', form.phone);
      formData.append('attending', form.attending ? 'Yes' : 'No');

      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Submitted Successfully!');
        setForm({ name: '', email: '', phone: '', attending: false });
        setStatus('success');
      } else {
        throw new Error('Network response not ok');
      }
    } catch (error) {
      console.error('Error!', error.message);
      alert('Failed to submit');
      setStatus('error');
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
        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default RSVPForm;
