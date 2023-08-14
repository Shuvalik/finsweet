import { NavLink } from 'react-router-dom';
import { MainNavFooter, SubNavFooter, contactLink } from '../data/navigation';
import { footerContent } from '../data/footer';
import content from '../data/ServicePage.json';
import address from '../data/address.json';
import logo from "../data/logo.json";
import SotialLinks from './sotialLinks';
function SiteFooter(){
    const titleAdressBox = {__html:footerContent.titleAdressBox};
    return (
        <footer className="footer">
          <div className="container topSide stylishCornerTreeColor">
            <div className="topTextHolder">
              <h2 className='h2'>{footerContent.titleFooter}</h2>
              <div className="adressHolder">
                <p className="subTitle" dangerouslySetInnerHTML={titleAdressBox} />
                <address>
                  <p><a href={'tel:' + (address["Contact Us"].tel).replaceAll(' ', '')}>{address["Contact Us"].tel}</a></p>
                  <p><a href={'mailto:' + (address["Contact Us"].email).replaceAll(' ', '')}>{address["Contact Us"].email}</a></p>
                  <p className='separate'>{address["Location"].address}</p>   
                </address>
              </div>
            </div>
              <div className="navSection">
                <div className="threeColumns">
                  <nav className="main-nav">
                    <ul>
                        {MainNavFooter.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.to}>{item.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                  </nav>
                  <nav>
                    <p className="titleMenu">{content.navTitle}</p>
                    <ul>
                        {content.partsPage.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                  </nav>
                  <nav>
                    <p className="titleMenu">{SubNavFooter.titleNav}</p>
                    <ul>
                        {SubNavFooter.nav.map((item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink to={item.path}>{item.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="colorLineLink">
                <NavLink className="arrowLink" to={contactLink.pathLink}><span className="hoverEfectLinks">{contactLink.textLink}</span></NavLink>
              </div>
          </div>
          <div className="bottomSide">
            <div className="container">
              <NavLink to="/"  className='logo' title='Finsweet'>
                <img src={logo.logoBlack} alt="logo" />
              </NavLink>
              <p className='copyRight'>{footerContent.copyRightText}</p>
              <SotialLinks />
            </div>
          </div>
        </footer>
    );
}
export default SiteFooter;