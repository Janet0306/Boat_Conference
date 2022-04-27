import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import '../css/navbar.css';


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
    <div>
        <div className="navbar-header">
            <button className="navbar-toggler nav-link-bg-50" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold"  to="/">Home</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/events">Previous Events</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/schedule">Conference Schedule</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/speakers">Conference Speakers</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/info">Info</Link>
                </li> 
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/profile">Profile</Link>
                </li> 
            </ul>
            <span className="nav-item">
                <a className="btn nav-link nav-link-bg-50 font-weight-bold "onClick={logout} href='#!'>Logout</a>
            </span>
        </div>
    </div>
  );

const guestLinks = (
    <div>
        <div className="navbar-header">
            <button className="navbar-toggler nav-link-bg-50" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold"  to="/">Home</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/events">Previous Events</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/schedule">Conference Schedule</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/speakers">Conference Speakers</Link>
                </li>
                <li className="nav-item mr-4">
                    <Link className="btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold" to="/info">Info</Link>
                </li>
            </ul>
            <span className="nav-item">
                <Link className="btn nav-link nav-link-bg-50 font-weight-bold" to='/login'>Login</Link>
            </span>
        </div>
    </div>
);

return (
    <nav className="navbar navbar-expand-lg navbar-light">
        { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </nav>
    );
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar)