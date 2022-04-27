import React from 'react';
import { Link } from 'react-router-dom';


const ProfileActions = () => {
    return (
        <div class="dash-buttons">
        <Link to="/view-profile" class="btn btn-primary">
          <i class="fas fa-user-circle"></i>
          View Profile
        </Link>
        <Link to="/edit-profile" class="btn btn-primary">
          <i class="fas fa-pencil-alt"></i>
          Edit Profile
        </Link>
      </div>
    )
};

export default ProfileActions;
