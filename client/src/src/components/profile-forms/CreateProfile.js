import React, { Fragment, useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
    const [formData, setFormData] = useState({
        location: '',
        company: '',
    });

    const {
        location, 
        company
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history);
    }

    return (

    <Fragment>
    <h1 className='large text-primary'>Create Your Profile</h1>
    <p className='lead text-primary'>
    <i className='fas fa-user p-1'></i>Lets get some information to make your
    profile stand out
    </p>
    <small>* = required fields</small>
    <form className='form' onSubmit={e => onSubmit(e)}>
    <div className='form-group'>
    <input type='text' placeholder='Location' name='location' value={location} onChange={e => onChange(e)} />
    <small className='form-text'>City (e.g London)</small>
    </div>
    <div className='form-group'>
    <input type='text' placeholder='Company' name='company' value={company} onChange={e => onChange(e)} />
</div>
<input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/profile'>Go Back</Link>
      </form>
      </Fragment>
    )

};

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};

export default connect(null, { createProfile })(withRouter(CreateProfile));

