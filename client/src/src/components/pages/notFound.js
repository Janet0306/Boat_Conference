import React from 'react';

import '../../App.css';
import '../css/notFound.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="div-centered">
        <div className="card mt-5">
          <div className="card-header">
            <strong>Error 404: Page not found</strong>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              {/*<li className="list-group-item">
                <h2>Page not found</h2>
              </li>*/}
              <li className="list-group-item pt-4">
                <Link to="/home" className="text-center text-decoration-none text-secondary"> <h4>Go Back</h4> </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;