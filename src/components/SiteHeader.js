import {NavLink} from "react-router-dom";
import { MainNav } from "../data/navigation";
import logo from './../assets/images/logo.svg';
import Hamburger from 'hamburger-react';
import { useState } from "react";

function SiteHeader() {
    const [isOpen, setOpen] = useState(false);

    function clickHandler() {
      if (isOpen) {
          setOpen(false);
      }
    }
    return (
        <header className="header">
            <div className="container">
              <a href="/" className='logo' title='Finsweet'>
                <img src={logo} alt="logo" />
              </a>
              <nav id="mainMenu" className={(isOpen) ? 'open': 'close'}>
                <ul>
                  {MainNav.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.to} onClick={clickHandler}>{item.title}</NavLink>
                            </li>
                        )
                     })}
                </ul>
              </nav>
              <div className="overlight"></div>
              <Hamburger color="#fff" toggled={isOpen} toggle={setOpen} />
            </div>
        </header>
    )
}
export default SiteHeader;