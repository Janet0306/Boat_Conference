import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import{ setAlert } from '../../actions/alert';
import{ register } from '../../actions/auth';
import PropTypes from 'prop-types';
import '../css/forms.css';

const Register = ({ setAlert, register, isAuthenticated }) => {

    const [formData, setFormData] = useState({ 
        name: '',
        email: '',
        password: '',
        password2: '' 
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            setAlert('Passwords do not match', 'danger');   
        } else {
         register({ name, email, password });
        }
    };

    //Redirect if logged in

    if(isAuthenticated) {
        return <Redirect to="/home" />
    }

    return( 
    <div>
        <div className="div-centered">
            <div className="card card-hover mt-4">
                <div className="card-header">
                    <strong>Register</strong>
                </div>
                <div className="card-body mx-5">
                    <form className="form  list-group list-group-flush" onSubmit={e => onSubmit(e)}>
                        <input type="text" placeholder="Name" name='name' className="form-control" value={name} onChange={e => onChange(e) }  />
                        <input type="email" placeholder="Email Address" name='email' className="form-control" value={email} onChange={e => onChange(e) }  />
                        <input type="password" placeholder="Password" name='password' className="form-control" value={password} onChange={e => onChange(e) } />
                        <input type="password" placeholder="Confirm Password" name='password2' className="form-control" value={password2} onChange={e => onChange(e) }  />
                        <input type="submit" value="Register" className="btn btn-outline-primary mt-3" />
                    </form>
                </div>
                <div className="card-footer">
                    Already have an account? <Link className="text-decoration-none ml-1" to='/login'>Sign In</Link>
                </div>
            </div>
        </div>
      </div>
    )
};

Register.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
