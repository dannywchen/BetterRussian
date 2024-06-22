import React from 'react';
import { auth, googleProvider } from '../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import './LoginPage.css';

const LoginPage = () => {
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error logging in with Google", error);
    }
  };

  return (
    <div className="login-container">
      <button onClick={handleGoogleLogin} className="login-button">
        Login with Google
      </button>
    </div>
  );
};

export default LoginPage;
