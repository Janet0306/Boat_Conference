import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({ profile: { profile, loading }, createProfile, getCurrentProfile,  history }) => {
    const [formData, setFormData] = useState({
        location: '',
        company: ''
    });

    const {
        location, 
        company
    } = formData;

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            location: loading || !profile.location ? '' : profile.location,
            company: loading || !profile.company ? '' : profile.company,
        });
    }, [loading]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history, true);
    }

    return (

    <Fragment>
    <h1 className='large text-primary'>Update Your Profile</h1>
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

EditProfile.propTypes = {
    EditProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile

});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(EditProfile));

