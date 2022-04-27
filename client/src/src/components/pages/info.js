import React from 'react';
import '../../App.css';
import '../css/info.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import placeholder from '../assets/img_placeholder.jpg';
import travel from '../assets/travelImage.png';

function App() {
  return (
    <div>
      <div class="container">
          <div class="row mt-5">
            <div class="rounded title-bg card-color col-sm-6 mx-auto" align="center">
              <div class="container">
                <h1 class="text-dark title">Event Information</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row mt-5">
            <div class="col-sm-12 mx-auto">
              <div class="card card-font card-hover card-padding mb-3 card-color rounded border border-dark">
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Accommodation</h5>
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
            <div class="card card-font card-hover card-padding mb-3 nav-link-bg-50 rounded border border-dark">
                <div class="row g-0">
                  <div class="col-md-2 my-auto" id="image">
                    <img src={travel} alt="..." width="170px"/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Travel</h5>
                      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing, elit placerat ornare litora per commodo pretium, dignissim elementum porta maecenas conubia. Nunc duis non euismod suscipit cum facilisis iaculis, platea semper aliquam ultrices mollis.</p>
                      <p class="card-text"><small class="text-dark">Last updated ... mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-sm-12 mx-auto">
              <div class="card card-font card-hover card-padding mb-3 nav-link-bg-50 rounded border border-dark">
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Event Parking</h5>
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
              <div class="card card-font card-hover card-padding mb-3 nav-link-bg-50 rounded border border-dark">
                <div class="row g-0">
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Restaurants & Bars</h5>
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