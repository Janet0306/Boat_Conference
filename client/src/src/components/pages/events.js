import React from 'react';
import Navbar from '../layout/Navbar';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/events.css';
import placeholder from '../assets/img_placeholder.jpg';

function App() {
    return (
      <div>
        <header className="App-header">

        </header>

        <div class="container">
          <div class="row mt-5">
            <div class="rounded title-bg card-color col-sm-6 mx-auto" align="center">
              <div class="container">
                <h1 class="text-dark title">Previous Events</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row mt-5">
            <div class="col-12 mx-auto">
              <div class="card card-hover card-font mb-3 card-color rounded border border-dark">
                <div class="row g-0">
                  <div class="col-md-3 col-sm-2 col-1">
                    <img class="event_img" src={placeholder} alt="..."/>
                  </div>
                  <div class="col-md-7 col-sm-8 col-9">
                    <div class="card-body">
                      <h5 class="card-title">Boats 2020</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
                      <p class="card-text"><small class="text-muted">Last updated ... mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="row mt-3">
            <div class="col-12 mx-auto">
            <div class="card card-hover card-font mb-3 nav-link-bg-50 rounded border border-dark">
                <div class="row g-0">
                  <div class="col-md-3 col-sm-2 col-1">
                    <img class="event_img" src={placeholder} alt="..."/>
                  </div>
                  <div class="col-md-7 col-sm-8 col-9">
                    <div class="card-body">
                      <h5 class="card-title">Boats 2019</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
                      <p class="card-text"><small class="text-dark">Last updated ... mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-12 mx-auto">
              <div class="card card-hover card-font mb-3 nav-link-bg-50 rounded border border-dark">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img class="event_img" src={placeholder} alt="..."/>
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                      <h5 class="card-title">Boats 2018</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
                      <p class="card-text"><small class="text-muted">Last updated ... mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-sm-12 mx-auto">
              <div class="card card-hover card-font mb-3 nav-link-bg-50 rounded border border-dark">
                <div class="row g-0">
                  <div class="col-md-3">
                    <img class="event_img" src={placeholder} alt="..."/>
                  </div>
                  <div class="col-md-7">
                    <div class="card-body">
                      <h5 class="card-title">Boats 2017</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
                      <p class="card-text"><small class="text-muted">Last updated ... mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default App;