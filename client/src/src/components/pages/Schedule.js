import React, { Fragment, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import '../../App.css';
import '../css/schedule.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import placeholder from '../assets/img_placeholder.jpg';
import { getSchedules } from '../../actions/schedule';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';

const Schedule = ({ getSchedules, schedule: { schedule, loading }  }) => {

  useEffect(() => {
    getSchedules();
  }, []);

  return loading && schedule === null ? (
    <Spinner />
     ) : (
    <div id="main">
      <header className="App-header">
      </header>
      <div>{console.log(schedule)}</div>
      <div class="container">
        <div class="row mt-5">
          <div class="rounded col-sm-8 mx-auto title-bg card-color" align="center">
            <div class="container">
              <h1 class="text-dark title">Conference Schedule{schedule}</h1>
            </div>
          </div>
        </div>
    </div>

    <div class="container"> {/* container */}
      <div class="row mt-5"> {/* main row */}
        <div class="col-10 mx-auto pt-5 pb-5"> {/* main column */}
          
        <div class="card card-font card-hover rounded p-0" > {/* first card */}
        <h5 class="card-header">
            All Day
            {/*schedule.map(sch => (
              sch.map(s => (s))
            ))*/}
          </h5>
          <div class="row g-0">
            <div class="col-md-3">
              <img src={placeholder} alt="..." height="250px" width="275px"/>
            </div>
            <div class="col-md-9 col-12 pt-3">
              <div class="card-body" align="center">
                <h3 class="card-title">Dawid Hajdecki</h3><br></br>
                <h2 class="card-text">'Tom bully people'</h2><br></br><br></br>
                <p class="card-text text-muted">Tom is not nice</p>
              </div>
            </div>
          </div>
        </div>

          <div class="vl"></div>

          <div class="card card-font card-hover rounded p-0" > {/* first card */}
            <h5 class="card-header">Tue 26th - 10:55am</h5>
              <div class="row g-0">
                <div class="col-md-3">
                  <img src={placeholder} alt="..." height="250px" width="275px"/>
                </div>
                <div class="col-md-9 col-12 pt-3">
                  <div class="card-body" align="center">
                    <h3 class="card-title">Barack Obama</h3><br></br>
                    <h2 class="card-text">'How Javascript changed my life'</h2><br></br><br></br>
                    <p class="card-text text-muted">George Burnett Halls</p>
                  </div>
                </div>
              </div>
          </div>

            <div class="vl"></div>

            <div class="card card-font card-hover rounded p-0" > {/* second card */}
            <h5 class="card-header">Tue 26th - 12:55pm</h5>
              <div class="row g-0">
                <div class="col-md-3">
                  <img src={placeholder} alt="..." height="250px" width="275px"/>
                </div>
                <div class="col-md-9 col-12 pt-3">
                  <div class="card-body" align="center">
                    <h3 class="card-title">Semore Butts</h3><br></br>
                    <h2 class="card-text">'My Life is a Misery'</h2><br></br><br></br>
                    <p class="card-text text-muted">West Blackhall</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="vl"></div>

            <div class="card card-font card-hover rounded p-0" > {/* first card */}
            <h5 class="card-header">Tue 26th - 2:30pm</h5>
              <div class="row g-0">
                <div class="col-md-3">
                  <img src={placeholder} alt="..." height="250px" width="275px"/>
                </div>
                <div class="col-md-9 col-12 pt-3">
                  <div class="card-body" align="center">
                    <h3 class="card-title">Dawid Hajdecki</h3><br></br>
                    <h2 class="card-text">'You Make Me Funny'</h2><br></br><br></br>
                    <p class="card-text text-muted">Polski Community Campus</p>
                  </div>
                </div>
              </div>
            </div>  

            <div class="vl"></div>

            <div class="card card-font card-hover rounded p-0" > {/* first card */}
            <h5 class="card-header">Wed 27th - 10:40pm</h5>
              <div class="row g-0">
                <div class="col-md-3">
                  <img src={placeholder} alt="..." height="250px" width="275px"/>
                </div>
                <div class="col-md-9 col-12 pt-3">
                  <div class="card-body" align="center">
                    <h3 class="card-title">Janet Webster</h3><br></br>
                    <h2 class="card-text">'What is Sleep'</h2><br></br><br></br>
                    <p class="card-text text-muted">Im Working Tomorrow</p>
                  </div>
                </div>
              </div>
            </div>  
        </div> {/* main column */}
      </div> {/* main row */}
    </div> {/* container */}
  </div>
  );
}

Schedule.propTypes = {
    getSchedules: PropTypes.func.isRequired,
    schedule: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    schedule: state.schedule
});


export default connect(mapStateToProps, { getSchedules })(Schedule);