import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../actions/contactActions';

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName || !trimmedEmail) {
      setError('Both name and email are required.');
    } else {
      dispatch(
        addContact({ id: Date.now(), name: trimmedName, email: trimmedEmail })
      );
      setName('');
      setEmail('');
      setError('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="username"
      />
      <br />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <br />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

// function ContactForm() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name && email) {
//       dispatch(addContact({ id: Date.now(), name, email }));
//       setName('');
//       setEmail('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="submit">Add Contact</button>
//     </form>
//   );
// }

// export default ContactForm;
