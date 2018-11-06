import React, { Component } from 'react';
import Logo from '../../../public/SoleraAudatex_logoReverse.png'

class MainNav extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">
                <img src={Logo} width="150" height="35" className="d-inline-block align-top" alt=""></img>
                {"  "}SMS - Synergy
            </a>
            <div className="expand navbar-expand" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Login <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Help & Support</a>
                    </li>
                </ul>
            </div>
          </nav>
        </div>
      )
    }
}

export default MainNav;