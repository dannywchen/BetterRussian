import React, { useContext } from 'react';
import { UserContext } from '../App';
import './Profile.css';

const Profile = () => {
  const user = useContext(UserContext);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <img src={user.avatar} alt="User Avatar" className="profile-avatar" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {/* Add later */}
    </div>
  );
};

export default Profile;
