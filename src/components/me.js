import React from 'react';
import me from '../images/me.jpg';
import name from '../images/name.svg';

const Me = () => (
    <div id="me">
        <svg id="one" height="270" width="360">
            <circle cx="10%" cy="65%" r="50%" fill="#5C69E5" />
        </svg>
        <div className="box">
            <img id="meimage" src={me} alt="me"/>
            <div className="medetail">
                <img id="name" src={name} alt="name"/>
                <p>Developer, Designer, Engineer.<br/><br/>
                Computer Science junior @MACE</p>
            </div>
        </div>
        <svg height="360" width="360">
            <circle cx="250" cy="80" r="58%" fill="#5C69E5" />
        </svg>
    </div>
);

export default Me;