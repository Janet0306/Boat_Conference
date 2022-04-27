import React, { Fragment } from 'react';
import spinner from '../assets/spinner.png';
import '../css/spinner.css';

export default () => (
    
    <div>
        <img 
            src={spinner}
            className="spinner"
            alt='Loading...'
        />
    </div>
);