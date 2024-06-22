import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './UserAvatar.css';

const UserAvatar = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="user-avatar-container">
      <img src={user.avatar} alt="User Avatar" className="user-avatar" onClick={toggleModal} />
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Link to="/profile" className="more-info" onClick={toggleModal}>More INFO!</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;
