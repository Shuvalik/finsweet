import {NavLink, useLocation} from "react-router-dom";
import { MainNav } from "../data/navigation";
import logo from "../data/logo.json";
import Hamburger from 'hamburger-react';
import { useState } from "react";

function SiteHeader() {
    const [isOpen, setOpen] = useState(false);
    const current = useLocation().pathname;
    
    function clickHandler() {
      if (isOpen) {
          setOpen(false);
      }
    }
    
    return (
        <header className="header">
            <div className="container">
              <NavLink to="/" className='logo' title='Finsweet'>
                <img src={logo.logoWhite} alt="logo" />
              </NavLink>
              <nav id="mainMenu" className={(isOpen) ? 'open': 'close'}>
                <ul>
                  {MainNav.map((item, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={item.to} className={((current.includes(item.to)) && (item.to !== '/')) ? 'active' : ''} onClick={clickHandler}>{item.title}</NavLink>
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