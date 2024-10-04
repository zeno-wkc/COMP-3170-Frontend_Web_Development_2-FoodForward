import React from 'react';

const Logout = ({ setUser }) => {
  const handleLogout = () => {
    setUser(null); // Clears the user state
    console.log('User logged out');
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
