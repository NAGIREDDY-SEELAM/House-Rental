
import React from 'react';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <>
        <p className="not-logged-in">You are not logged in.</p>
        <style>{styles}</style>
      </>
    );
  }

  return (
    <>
      <div className="profile-container">
        <h2 className="profile-heading">User Profile</h2>

        <div className="profile-detail">
          <span className="label">Name:</span>
          <span className="value">{user.displayName || 'N/A'}</span>
        </div>

        <div className="profile-detail">
          <span className="label">Email:</span>
          <span className="value">{user.email}</span>
        </div>

        <div className="profile-detail">
          <span className="label">Phone:</span>
          <span className="value">{user?.phone || 'N/A'}</span>
        </div>

        <div className="profile-detail">
          <span className="label">Address:</span>
          <span className="value">{user?.address || 'N/A'}</span>
        </div>

      
      </div>

      <style>{styles}</style>
    </>
  );
};

const styles = `
  .profile-container {
    max-width: 400px;
    
    margin: 60px auto;
    padding: 30px 20px;
    background:rgb(246, 248, 247);
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    font-family: 'Segoe UI', sans-serif;
    color: #333;
    align-items: center;
  }

  .profile-heading {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 24px;
    color: #1a202c;
  }

  .profile-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid #e2e8f0;
    font-size: 16px;
    flex-wrap: nowrap;
  }

  .label {
    font-weight: 600;
    color: #4a5568;
    width: 30%;
    min-width: 100px;
  }

  .value {
    text-align: left;
    color: #2d3748;
    word-break: break-word;
    width: 70%;
  }

  .profile-image {
    display: block;
    margin: 30px auto 0;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 3px solid #cbd5e0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .not-logged-in {
    text-align: center;
    margin-top: 80px;
    font-size: 18px;
    color: #555;
  }
`;

export default Profile;
