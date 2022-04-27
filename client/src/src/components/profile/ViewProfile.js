import React, { Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import auth from '../../reducers/auth';
import ProfileTop from './ProfileTop';


const Profile = ({ getCurrentProfile, auth: { user },  profile: { profile, loading } }) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);


    return (
        <Fragment>
            {profile === null || loading ? <Spinner />  : <Fragment>
                <Link to='/profile' className='btn btn-light'>
                    Back 
                </Link>
                <Link to='/edit-profile' className='btn btn-dark'>Edit Profile</Link> 
                <div>
                    <ProfileTop profile={profile} />
                </div>
        </Fragment>}
        </Fragment>

    );
};

Profile.propTypes = {
    getProfileById: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});

export default connect(mapStateToProps, { getCurrentProfile })(Profile);