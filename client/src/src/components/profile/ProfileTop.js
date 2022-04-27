import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({ 
    profile: {
        location,
        company,
        //event: { title, timeOfEvent, dateOfEvent, location },
        user: { name, email }
    }
}) => {



    return (
        <div>
          <h1>{name}</h1>
          <p>{location && <span>{location}</span>}</p>
          <p>{company && <span>{company}</span>}</p>
        </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired,

};

export default ProfileTop;