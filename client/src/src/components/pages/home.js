import React, {Fragment} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../../App.css';
import '../css/home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ isAuthenticated }) => {
  if(isAuthenticated) {
    return <Redirect to='/home' />
  }

  return (
    <div>
      <div class="row mt-5">
        <div class="card title-bg card-color col-sm-6 mx-auto" align="center">
          <div class="container">
            <h1 class="text-dark title mb-3">December 2020 Boats Conference</h1>
            <div className="row">
              <div className="col dash">
                <h4>Date and time</h4>
                <div className="row">
                  <div className="col">14/02/2021</div>
                  <div className="w-100"></div>
                  <div className="col">From: 09:00 To: 17:00</div>
                </div>
              </div>
              <div className="col dash">
              <h4>Speakers</h4>
                <div className="row">
                  <div className="col">Dawid Hajdecki</div>
                  <div className="w-100"></div>
                  <div className="col">Tom Dalgleish</div>
                  <div className="w-100"></div>
                  <div className="col">Janet Webster</div>
                </div>
                
              </div>
              <div className="w-100"></div>
              <div className="col my-1">Click to register for this conference</div>
              <div className="col my-1">Click for more information</div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="card title-bg card-color col-sm-6 mx-auto" align="center">
          <div class="container">
            <div className="row">
              <div className="col ">
                <form className="form">
                  <div className="row">
                    <input id="input" type="text" className="form-control border-bottom"></input>
                    <button id="button" type="submit" className="btn btn-primary ml-3">Submit</button>
                  </div>
                </form>
              </div>
              <div className="w-100"></div>
              <div className="col">
                Enter email and submit to receive latest notifications
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <div class="card title-bg card-color col-sm-6 mx-auto" align="center">
          <div class="container">
            <div className="row">
              <div className="col">
                <h4>Sponsors:</h4>
              </div>
              <div className="col">
                <h4>Other Topics:</h4>
              </div>
              <div className="w-100">
              </div>
              <div className="col">
                Tom Dalgleish, Google, Unsplash
              </div>
              <div className="col">
                Future Events, Previous Event, Changes to Events
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Home);