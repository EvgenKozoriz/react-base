import React from "react";
import briefcase_path from './assets/images/briefcase.svg'
import profile_icon_path from './assets/images/user.svg'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <header className="header">
            <div className="header__inner">
              <Link to="/homepage" className="header__logo">Travel App</Link>
              <nav className="header__nav">
                <ul className="nav-header__list">
                  <li className="nav-header__item" title="Bookings">
                    <Link to="/booking" className="nav-header__inner">
                      <span className="visually-hidden">Bookings</span>
                      <img src={briefcase_path} alt=" icon" />
                    </Link>
                  </li>
                  <li className="nav-header__item" title="Profile">
                    <div className="nav-header__inner profile-nav" tabIndex="0">
                      <span className="visually-hidden">Profile</span>
                      <img src={profile_icon_path} alt="profile icon" />
                      <ul className="profile-nav__list">
                        <li className="profile-nav__item profile-nav__username">John Doe</li>
                        <li className="profile-nav__item">
                          <button className="profile-nav__sign-out button">Sign Out</button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
        </header>
    )
}

export default Header