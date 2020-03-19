import React from 'react';



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDharmachakra} from '@fortawesome/free-solid-svg-icons';
import helm from '../../assets/Images/helm-logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <FontAwesomeIcon icon={faDharmachakra} size="3x" color ="white"/>
    </div>
);

export default logo;


/* <img src={helm} alt="DemandHelm" /> */