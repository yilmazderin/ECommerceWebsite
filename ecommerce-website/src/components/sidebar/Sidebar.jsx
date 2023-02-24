import React from 'react';
import "./sidebar.css";

const Sidebar = () => {
    return (
        <nav className="nav">
            <div className="nav__menu">
                <ul className="navlist">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                            <i className="icon-home"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
} 
export default Sidebar