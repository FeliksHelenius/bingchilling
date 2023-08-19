import React from 'react';
import { Fragment } from 'react';
import awards from '../../assets/awards.svg';
import microsoft from '../../assets/microsoft.svg';
import dottedMenu from '../../assets/dottedmenu.svg';
import straightMenu from '../../assets/straightmenu.svg';
import profile from '../../assets/profile.svg';
import './header.css';

export default function Header() {
    return (
        <Fragment>
            <header>
                <div className="logo">
                    <span>123</span>
                    <img src={microsoft}></img>
                    <span>Microsoft</span>
                    <span>Bing</span>
                </div>
                <div className="buttons1">
                    <span>Chat</span>
                    <span>Bilder</span>
                    <span>Videoklipp</span>
                    <span>Kartor</span>
                    <span>Nyheter</span>
                    <img src={dottedMenu}></img>
                </div>
                <div className="buttons2">
                    <span>English</span>
                    <span>Logga in</span>
                    <img src={profile}></img>
                    <span>Belöningar</span>
                    <img src={awards}></img>
                    <img src={straightMenu}></img>
                </div>
            </header>
        </Fragment>
    );
};