import { NavLink } from 'react-router-dom';
import { MainNavFooter, SubNavFooter, contactLink } from '../data/navigation';
import { footerContent } from '../data/footer';
import content from '../data/ServicePage.json';
import address from '../data/address.json';
import {sotialLinks} from '../data/sotialLinks';
import logoFooter from './../assets/images/logo-black.svg';
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
                  <p className='separate'>{address["Location"]}</p>   
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
                <NavLink className="arrowLink" to={contactLink.pathLink}>{contactLink.textLink}</NavLink>
              </div>
          </div>
          <div className="bottomSide">
            <div className="container">
              <a href="/" className='logo' title='Finsweet'>
                <img src={logoFooter} alt="logo" />
              </a>
              <p className='copyRight'>{footerContent.copyRightText}</p>
              <ul className="sotial-links">
                {sotialLinks.map((item, index) => {
                    const image = {__html:item.img};
                    return (
                        <li key={index}>
                            <NavLink to={item.path} target="_blank" rel="noreferrer nofolow" title={item.title} dangerouslySetInnerHTML={image} />
                        </li>
                    )
                })}
              </ul>
            </div>
          </div>
        </footer>
    );
}
export default SiteFooter;