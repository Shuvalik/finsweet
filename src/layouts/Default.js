import {Outlet} from "react-router-dom";
import {NavLink} from "react-router-dom"
import logo from './../assets/images/logo.svg';
import logoFooter from './../assets/images/logo-black.svg';
import { MainNav } from "../data/navigation";
function Default() {
    return (
        <>
            
        <header className="header">
            <div className="container">
              <a href="/" className='logo' title='Finsweet'>
                <img src={logo} alt="logo" />
              </a>
              <nav id="mainMenu">
                <ul>
                  {MainNav.map((item, index) => {
                        return (

                            <li key={index}>
                                <NavLink to={item.to}>{item.title}</NavLink>
                            </li>
                        )
                     })}
                </ul>
              </nav>
              <div class="overlight"></div>
              <button id="hamburger" class="hamburger hamburger--squeeze" type="button">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </header>
            <main>
            <Outlet />
            </main>
            
        <footer className="footer">
          <div className="container topSide stylishCornerTreeColor">
            <div className="topTextHolder">
              <h2 className='h2'>Let's make something special</h2>
              <div className="adressHolder">
                <p className="subTitle">Let's talk! <span className="smodzi">🤙</span> </p>
                <address>
                  <p><a href="tel:020 7993 2905">020 7993 2905</a></p>
                  <p><a href="mailto:hi@finsweet.com">hi@finsweet.com</a></p>
                  <p className='separate'>
                    DLF Cybercity, Bhubaneswar, 
                    India, &52050
                  </p>   
                </address>
              </div>
            </div>
              <div className="navSection">
                <div className="threeColumns">
                  <nav className="main-nav">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/">Service</a>
                      </li>
                      <li>
                        <a href="/">Company</a>
                      </li>
                      <li>
                        <a href="/">Career</a>
                      </li>
                      <li>
                        <a href="/">News</a>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <p className="titleMenu">
                      Service
                    </p>
                    <ul>
                      <li>
                        <a href="http://">Technical support</a>
                      </li>
                      <li>
                        <a href="http://">Testing</a>
                      </li>
                      <li>
                        <a href="http://">Development</a>
                      </li>
                      <li>
                        <a href="http://">AWS/Azure </a>
                      </li>
                      <li>
                        <a href="http://">Consulting</a>
                      </li>
                      <li>
                        <a href="http://">Information Technology</a>
                      </li>
                    </ul>
                  </nav>
                  <nav>
                    <p className="titleMenu">
                      Resourses
                    </p>
                    <ul>
                      <li>
                        <a href="http://">About Us</a>
                      </li>
                      <li>
                        <a href="http://">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="http://">Terms of use</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="colorLineLink">
                <a href='/' className="arrowLink">Contact Us</a>
              </div>
          </div>
          <div className="bottomSide">
            <div className="container">
              <a href="/" className='logo' title='Finsweet'>
                <img src={logoFooter} alt="logo" />
              </a>
              <p className='copyRight'>©2021 Finsweet</p>
              <ul className="sotial-links">
                <li>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer nofolow" title="facebook">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_1760)">
                            <path d="M16 8.52246C16 4.10418 12.4183 0.522461 8 0.522461C3.58172 0.522461 0 4.10418 0 8.52246C0 12.5154 2.92547 15.8251 6.75 16.4253V10.835H4.71875V8.52246H6.75V6.75996C6.75 4.75496 7.94438 3.64746 9.77172 3.64746C10.6467 3.64746 11.5625 3.80371 11.5625 3.80371V5.77246H10.5538C9.56 5.77246 9.25 6.38918 9.25 7.02246V8.52246H11.4688L11.1141 10.835H9.25V16.4253C13.0745 15.8251 16 12.5154 16 8.52246Z" fill="#232536"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1_1760">
                          <rect width="16" height="16" fill="white" transform="translate(0 0.522461)"/>
                          </clipPath>
                          </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/" target="_blank" rel="noreferrer nofolow" title="twitter">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_1762)">
                          <path d="M5.69994 15.0225C11.7362 15.0225 15.0387 10.0203 15.0387 5.6837C15.0387 5.54308 15.0356 5.39933 15.0293 5.2587C15.6718 4.7941 16.2262 4.21863 16.6665 3.55933C16.0682 3.82553 15.4329 3.99938 14.7824 4.07495C15.4674 3.6644 15.9802 3.01944 16.2259 2.25964C15.5815 2.6415 14.8769 2.91087 14.1421 3.0562C13.6471 2.53017 12.9925 2.18187 12.2796 2.06516C11.5668 1.94845 10.8353 2.06983 10.1983 2.41053C9.56137 2.75122 9.05437 3.29226 8.75574 3.95C8.4571 4.60774 8.38346 5.34554 8.54619 6.04933C7.2415 5.98385 5.96513 5.64493 4.79983 5.05453C3.63452 4.46412 2.6063 3.63542 1.78182 2.62214C1.36277 3.34462 1.23454 4.19956 1.42319 5.01319C1.61184 5.82682 2.10321 6.53809 2.79744 7.00245C2.27626 6.9859 1.76649 6.84558 1.31025 6.59308V6.6337C1.30979 7.39189 1.5719 8.12685 2.05204 8.71364C2.53219 9.30043 3.20072 9.70284 3.944 9.85245C3.46121 9.98455 2.95449 10.0038 2.46307 9.9087C2.67281 10.5608 3.08089 11.1311 3.63035 11.54C4.17982 11.949 4.84325 12.1762 5.52807 12.19C4.36545 13.1032 2.92929 13.5985 1.45088 13.5962C1.1887 13.5958 0.92677 13.5797 0.666504 13.5481C2.16841 14.5116 3.91552 15.0234 5.69994 15.0225Z" fill="#232536"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1_1762">
                          <rect width="16" height="16" fill="white" transform="translate(0.666504 0.522461)"/>
                          </clipPath>
                          </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer nofolow" title="instagram">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_1764)">
                          <path d="M8.3335 1.96309C10.471 1.96309 10.7241 1.97246 11.5647 2.00996C12.346 2.04434 12.7679 2.17559 13.0491 2.28496C13.421 2.42871 13.6897 2.60371 13.9679 2.88184C14.2491 3.16309 14.421 3.42871 14.5647 3.80059C14.6741 4.08184 14.8054 4.50684 14.8397 5.28496C14.8772 6.12871 14.8866 6.38184 14.8866 8.51621C14.8866 10.6537 14.8772 10.9068 14.8397 11.7475C14.8054 12.5287 14.6741 12.9506 14.5647 13.2318C14.421 13.6037 14.246 13.8725 13.9679 14.1506C13.6866 14.4318 13.421 14.6037 13.0491 14.7475C12.7679 14.8568 12.3429 14.9881 11.5647 15.0225C10.721 15.06 10.4679 15.0693 8.3335 15.0693C6.196 15.0693 5.94287 15.06 5.10225 15.0225C4.321 14.9881 3.89912 14.8568 3.61787 14.7475C3.246 14.6037 2.97725 14.4287 2.69912 14.1506C2.41787 13.8693 2.246 13.6037 2.10225 13.2318C1.99287 12.9506 1.86162 12.5256 1.82725 11.7475C1.78975 10.9037 1.78037 10.6506 1.78037 8.51621C1.78037 6.37871 1.78975 6.12559 1.82725 5.28496C1.86162 4.50371 1.99287 4.08184 2.10225 3.80059C2.246 3.42871 2.421 3.15996 2.69912 2.88184C2.98037 2.60059 3.246 2.42871 3.61787 2.28496C3.89912 2.17559 4.32412 2.04434 5.10225 2.00996C5.94287 1.97246 6.196 1.96309 8.3335 1.96309ZM8.3335 0.522461C6.16162 0.522461 5.88975 0.531836 5.03662 0.569336C4.18662 0.606836 3.60225 0.744336 3.096 0.941211C2.56787 1.14746 2.121 1.41934 1.67725 1.86621C1.23037 2.30996 0.958496 2.75684 0.752246 3.28184C0.555371 3.79121 0.417871 4.37246 0.380371 5.22246C0.342871 6.07871 0.333496 6.35059 0.333496 8.52246C0.333496 10.6943 0.342871 10.9662 0.380371 11.8193C0.417871 12.6693 0.555371 13.2537 0.752246 13.76C0.958496 14.2881 1.23037 14.735 1.67725 15.1787C2.121 15.6225 2.56787 15.8975 3.09287 16.1006C3.60225 16.2975 4.1835 16.435 5.0335 16.4725C5.88662 16.51 6.1585 16.5193 8.33037 16.5193C10.5022 16.5193 10.7741 16.51 11.6272 16.4725C12.4772 16.435 13.0616 16.2975 13.5679 16.1006C14.0929 15.8975 14.5397 15.6225 14.9835 15.1787C15.4272 14.735 15.7022 14.2881 15.9054 13.7631C16.1022 13.2537 16.2397 12.6725 16.2772 11.8225C16.3147 10.9693 16.3241 10.6975 16.3241 8.52559C16.3241 6.35371 16.3147 6.08184 16.2772 5.22871C16.2397 4.37871 16.1022 3.79434 15.9054 3.28809C15.7085 2.75684 15.4366 2.30996 14.9897 1.86621C14.546 1.42246 14.0991 1.14746 13.5741 0.944336C13.0647 0.747461 12.4835 0.609961 11.6335 0.572461C10.7772 0.531836 10.5054 0.522461 8.3335 0.522461Z" fill="#232536"/>
                          <path d="M8.3335 4.41309C6.06475 4.41309 4.22412 6.25371 4.22412 8.52246C4.22412 10.7912 6.06475 12.6318 8.3335 12.6318C10.6022 12.6318 12.4429 10.7912 12.4429 8.52246C12.4429 6.25371 10.6022 4.41309 8.3335 4.41309ZM8.3335 11.1881C6.86162 11.1881 5.66787 9.99434 5.66787 8.52246C5.66787 7.05059 6.86162 5.85684 8.3335 5.85684C9.80537 5.85684 10.9991 7.05059 10.9991 8.52246C10.9991 9.99434 9.80537 11.1881 8.3335 11.1881Z" fill="#232536"/>
                          <path d="M13.5647 4.25064C13.5647 4.78189 13.1335 5.21001 12.6054 5.21001C12.0741 5.21001 11.646 4.77876 11.646 4.25064C11.646 3.71939 12.0772 3.29126 12.6054 3.29126C13.1335 3.29126 13.5647 3.72251 13.5647 4.25064Z" fill="#232536"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1_1764">
                          <rect width="16" height="16" fill="white" transform="translate(0.333496 0.522461)"/>
                          </clipPath>
                          </defs>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer nofolow" title="linkedIn">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1_1769)">
                          <path d="M14.8156 0.522461H1.18125C0.528125 0.522461 0 1.03809 0 1.67559V15.3662C0 16.0037 0.528125 16.5225 1.18125 16.5225H14.8156C15.4688 16.5225 16 16.0037 16 15.3693V1.67559C16 1.03809 15.4688 0.522461 14.8156 0.522461ZM4.74687 14.1568H2.37188V6.51934H4.74687V14.1568ZM3.55938 5.47871C2.79688 5.47871 2.18125 4.86309 2.18125 4.10371C2.18125 3.34434 2.79688 2.72871 3.55938 2.72871C4.31875 2.72871 4.93437 3.34434 4.93437 4.10371C4.93437 4.85996 4.31875 5.47871 3.55938 5.47871ZM13.6344 14.1568H11.2625V10.4443C11.2625 9.55996 11.2469 8.41934 10.0281 8.41934C8.79375 8.41934 8.60625 9.38496 8.60625 10.3818V14.1568H6.2375V6.51934H8.5125V7.56309H8.54375C8.85938 6.96309 9.63438 6.32871 10.7875 6.32871C13.1906 6.32871 13.6344 7.90996 13.6344 9.96621V14.1568Z" fill="#232536"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_1_1769">
                          <rect width="16" height="16" fill="white" transform="translate(0 0.522461)"/>
                          </clipPath>
                          </defs>
                        </svg>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        </>
    );
}

export default Default;