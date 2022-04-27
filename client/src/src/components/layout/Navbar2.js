import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';
import '../css/navbar.css';

import { Link } from 'react-router-dom';

function navbar(props){
    var urlCheck = window.location.href.split("/")[3];
    return(
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-header">
                <button className="navbar-toggler nav-link-bg-50" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav form-inline">
                    <li className="nav-item mr-4">
                        <Link className={"btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold " + ((urlCheck.substring(0,4) === "") ? "disabled" : "")}  to="/home">Home</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className={"btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold " + ((urlCheck.substring(0,14) === "events") ? "disabled" : "")} to="/events">Previous Events</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className={"btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold " + ((urlCheck.substring(0,18) === "conferenceSchedule") ? "disabled" : "")} to="">Conference Schedule</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className={"btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold " + ((urlCheck.substring(0,18) === "conferenceSpeakers") ? "disabled" : "")} to="">Conference Speakers</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className={"btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold " + ((urlCheck.substring(0,4) === "info") ? "disabled" : "")} to="">Info</Link>
                    </li>
                    <li className="nav-item mr-4">
                        <Link className={"btn nav-link nav-link-bg-50 px-3 text-dark font-weight-bold " + ((urlCheck.substring(0,6) === "travel") ? "disabled" : "")} to="">Travel</Link>
                    </li>
                    
                </ul>
                <span className="nav-item ">
                    <Link className={"btn nav-link nav-link-bg-50 font-weight-bold " + ((urlCheck.substring(0,5) === "login" || urlCheck.substring(0,8) === "register" || urlCheck.substring(0,15) === "restorePassword") ? "hide" : "")}  to="/login">Login</Link>
                </span>
            </div>
        </nav>
    );
}

export default navbar;