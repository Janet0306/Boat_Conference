import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Navbar from '../layout/Navbar';
import '../../App.css';
import '../css/speakers.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../assets/img_placeholder.jpg';
import { getSpeakers } from '../../actions/speakers';


/*const Speakers = ({ getSpeakers, speakers: { speaker, loading }}) => {
  useEffect(() => {
      getSpeakers();
  }, []);*/
const Speakers = ({ getSpeakers, speakers: { speakers, loading }  }) => {

  useEffect(() => {
    getSpeakers();
  }, []);
  
    return (

      <div>
        <header className="App-header">
        </header>
        <div class="container">
          <div class="row mt-5">
            <div class="rounded title-bg card-color col-sm-6 mx-auto" align="center">
              <div class="container">
                <h1 class="text-dark">Speakers</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="container"> 
          <div class="row mt-5 flex "> 
            <div class="col-11 mx-auto pt-5 pb-5"> {/* container for speakers */}

            
              <div class="card-group">
                <div class="row mb-3"> {/* row containing all speaker cards*/}
                  <div class="col-lg-3 col-md-4 col-sm-6 col-7 mx-auto mb-5">
                    <div class="card card-hover card-font p-0">
                      <img src={image} class="card-img-top" alt='speaker' height="175px"/>
                      <div class="card-body">
                        <p class="card-text"></p>
                        <strong></strong><br></br><small class="text-faded">Data Engineer</small>
                      </div>
                    </div>
                  </div> {/*end speaker col*/}
                </div> {/*end speaker row*/}
              </div> {/*end card-group*/}
            

            </div> {/*end main column*/}
          </div> {/*end main row*/}
        </div> {/*end main container*/}
      </div>
  );
}

Speakers.propTypes = {
  getSpeakers: PropTypes.func.isRequired,
  speakers: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  speakers: state.speakers
});

export default connect(mapStateToProps, { getSpeakers })(Speakers);