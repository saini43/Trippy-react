import React from 'react'
import { MenuItems } from './MenuItems';
import "./NavbarStyles.css";

const Navigation = () => {
   
    return (
        <nav className="navbaritems">
            <h1 className="navbar-logo">Trippy</h1>


            


            <ul className="nav-menu">
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className=
                                {item.cName} href="/">
                                <i className={item.icon}></i>{item.title}
                            </a>
                        </li>

                    );
                }
                )}
                <button>Sign Up</button>

            </ul>








        </nav>
    )
}

export default Navigation
