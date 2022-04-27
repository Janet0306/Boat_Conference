import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileActions from './ProfileActions'
import { getCurrentProfile, deleteAccount } from '../../actions/profile';



const Profile = ({ getCurrentProfile, deleteAccount, auth: { user }, profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile === null ? (
        <Spinner /> 
         ) : ( 
        <Fragment>
        <h1 className="large text-primary">Profile</h1>
        <p className="lead">
            <i className="fas fa-user"></i>Welcome { user && user.name }
        </p>
        {profile !== null ? (
        <Fragment>
            <ProfileActions />
            <div className="my-2">
            <button className="btn btn-danger" onClick={() => deleteAccount()}>
                <i className="fas fa-user-minus"></i> Delete My Account
            </button>
            </div>
        </Fragment> 
        ) : ( 
        <Fragment>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to='/create-profile' className="btn btn-primary my-1">
                Create Profile
            </Link>
        </Fragment>
    )}
    </Fragment>
    );


};



Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});


export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Profile);