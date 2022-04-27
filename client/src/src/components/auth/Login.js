import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import '../css/forms.css';

const Login = ({ login, isAuthenticated }) => {

  const [formData, setFormData] = useState({ 
      email: '',
      password: '',
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);
  };

  //REDIRECT IF LOGGED IN

  if(isAuthenticated) {
    return <Redirect to="/home" />
  }
    

  return (
    <div>
      <div className="div-centered">
        <div className="card card-hover mt-4">
          <div className="card-header">
            <strong>Login</strong>
          </div>
          <div className="card-body mx-5">
            <form className="form list-group list-group list-group-flush" onSubmit={e => onSubmit(e)}>
              <input type="email" className="form-control" placeholder="Email Address" name='email' value={email} onChange={e => onChange(e) } required />
              <input type="password" className="form-control" placeholder="Password" name='password' value={password} onChange={e => onChange(e) } minLength='6' required />
              <input type="submit" value="Login" className="btn btn-outline-primary mt-3" />
            </form>
          </div>
          <div className="card-footer">
            Don't have an account? <Link className="text-decoration-none ml-1" to='/register'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  )
};


Login.propType = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {login})(Login);
