import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Login = ({ setUser }) => {
  const handleSuccess = (response) => {
    console.log("Login Success:", response.credential);
    setUser(response.credential);
  };

  const handleFailure = (error) => {
    console.log("Login Failed:", error);
  };

  // Use import.meta.env for accessing environment variables in Vite
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  return (
    <div>
      <h2>Login</h2>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default Login;