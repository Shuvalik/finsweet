import '../assets/scss/pages/home.scss';
import content from '../data/HomePage.json';

import campaignImg from './../assets/images/content-campaign-img.jpg';
import customerImg1 from './../assets/images/small-img-people.png';
import customerImg2 from './../assets/images/small-img-people2.png';
import customerImg3 from './../assets/images/small-img-people3.png';
import newsImg1 from './../assets/images/last-news-img1.jpg';

import newsImg2 from './../assets/images/last-news-img2.jpg';

import svgSprite from './../assets/images/icons-sprite.svg';
import FormContactUs from '../components/FormContactUs';
import { useState } from 'react';
import ClientList from '../components/clientList';
import SectionAboutUs from '../components/sectionAboutUs';
//import './App.css';
import aboutSectionImg1 from './../assets/images/content-about-section1.jpg';

function Home() {

const garniture = svgSprite + '#garniture';
const settings = svgSprite + '#settings';
const development = svgSprite + '#development';
const design = svgSprite + '#design';
const support = svgSprite + '#support';
    const [showModalBox, setShowModalBox] = useState(false);
    function clickHandler() {
      setShowModalBox(true);
    }
    return (
        <>
          <section className="campaign">
            <div className="container">
              <div className="twoColumns">
                <div>
                  <h1 className="h1">{content.pageTitle}</h1>
                  <p>{content.firstSectionText}</p>
                  <div className="stylishCornerTreeColor">
                    <button className="btn arrowLink" onClick={clickHandler}><span className="hoverEfectBtn"></span><span className="text">{content.textButton}</span></button>
                  </div>
                </div>
                <div className="imageHolder">
                  <img src={campaignImg} alt="conversation" />
                </div>
              </div>
              <div className="clientLists">
                <div>
                  <span>{content.labelOurClients}</span>
                  <p>{content.textClientBox}</p>
                </div>
                <ClientList />
              </div>
            </div>
          </section>
          <SectionAboutUs />

          <section className="bg-turquoise">
            <div className="container twoColumns approach">
              <div>
                  <p className="sectionTitle">Our Approach</p>
                  <h2 className="h2">
                    Our commitment to composable digital experiences gives brands the creativity and control.
                  </h2>
                  <p>
                    With a laser focus on flexible, composable technology stacks, we empower customer-first retailers, manufacturers and brands to deliver remarkable products and services at scale. 
                  </p> 
              </div>
              <div className="verticalListBox pixelBlue">
                <div className="item">
                  <svg>
                    <use xlinkHref={design} />
                  </svg>
                  <div>
                    <p className="titleItem">
                      Our mission
                    </p>
                    <p>
                    To deliver solutions that give measurable results through speed-to-market.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <svg>
                    <use xlinkHref={settings} />
                  </svg>
                  <div>
                    <p className="titleItem">
                      Our Culture
                    </p>
                    <p>
                    We strongly believe if we create a place where we love to work, then we can revel in being work.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <svg>
                    <use xlinkHref={support} />
                  </svg>
                  <div>
                    <p className="titleItem">
                      Our vision
                    </p>
                    <p>
                    To be a major force in digital engineering in the UK, Europe and the Middle East.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          <section className="bg-orange">
            <div className="container">
              <div className="titleSectionHolder">
                  <p className="sectionTitle">Our Services</p>
                  <h2 className="h2">
                    We build software solutions that solve client's business challenges
                  </h2>
                  <div className="stylishCornerTreeColor">
                    <button className="btn arrowLink">Start a Project</button>
                  </div>
              </div>
              <div className="sliderItems">
                <div className="item">
                  <svg>
                    <use xlinkHref={garniture} />
                  </svg>
                  <p className="titleItem">
                    Technical support
                  </p>
                  <p>
                   We take time to review site traffic with an emphasis on visitor trends, traffic sources, content review, goals, search, and campaign tracking.
                  </p>
                  <a href="http://" className="arrowLink">Read more</a>
                </div>
                <div className="item">
                  <svg>
                    <use xlinkHref={settings} />
                  </svg>
                  <p className="titleItem">
                    Digital Marketing & Strategy
                  </p>
                  <p>
                    A robust digital strategy, complemented by solid market intelligence, is integral to successful web development in the digital era. 
                  </p>
                  <a href="http://" className="arrowLink">Read more</a>
                </div>
                
                <div className="item">
                  <svg>
                    <use xlinkHref={development} />
                  </svg>
                  <p className="titleItem">
                    Development
                  </p>
                  <p>
                    Web development encompasses creating and maintaining websites involving various technologies and programming languages. 
                  </p>
                  <a href="http://" className="arrowLink">Read more</a>
                </div>
                
                {/* <div className="item">
                  <svg>
                    <use xlinkHref={design} />
                  </svg>
                  <p className="titleItem">
                    User Experience Design
                  </p>
                  <p>
                    A well-designed interface is the key to a successful website or application, as it enhances user experience and promotes user interaction. 
                  </p>
                  <a href="http://" className="arrowLink">Read more</a>
                </div>
                
                <div className="item">
                  <svg>
                    <use xlinkHref={support} />
                  </svg>
                  <p className="titleItem">
                    Web Analytics & User Insights
                  </p>
                  <p>
                    Based on market intelligence & competitor insights, our team will help you identify high-impact ideas .
                  </p>
                  <a href="http://" className="arrowLink">Read more</a>
                </div> */}
              </div> 
            </div>
          </section>

          <section>
            <div className="container stylishCornerTreeColor rightCorner smaller">
              <div className="titleSectionHolder">
                  <p className="sectionTitle">Our Process</p>
                  <h2 className="h2">
                    The process we are working With Our client Worldwide
                  </h2>
                  <p>
                    We optimize the site’s structure, speed, and responsiveness, ensuring a seamless user experience. Trustworthy web development services are crucial for establishing a strong online presence.
                  </p>
              </div>
              
                  <ul className="nubmerListBox">
                    <li>
                      <span className="number">
                        01
                      </span>
                      <div className="textHolder Discover">
                        <p className="titleBox">Discover</p>
                        <p>
                          Effective web development is requires a well-crafted digital strategy.
                        </p>
                      </div>
                    </li>
                    <li>
                      <span className="number">
                        02
                      </span>
                      <div className="textHolder Designing">
                        <p className="titleBox">Designing</p>
                        <p>
                          Our design process begins with deeply understanding your project goals. 
                        </p>
                      </div>
                    </li>
                    
                    <li>
                      <span className="number">
                        03
                      </span>
                      <div className="textHolder Development">
                        <p className="titleBox">Development</p>
                        <p>
                         Skilled developers use HTML, CSS, and JavaScript to build visually appealing and functional sites.
                        </p>
                      </div>
                    </li>
                    
                    <li>
                      <span className="number">
                        04
                      </span>
                      <div className="textHolder Testing">
                        <p className="titleBox">Testing</p>
                        <p>
                         The website QA testing is an advanced process of checking the site for bugs.
                        </p>
                      </div>
                    </li>
                    
                    <li>
                      <span className="number">
                        05
                      </span>
                      <div className="textHolder Deployment">
                        <p className="titleBox">Deployment</p>
                        <p>
                         Deployment web development means pushing updates from one environment to another.
                        </p>
                      </div>
                    </li>
                    
                    <li>
                      <span className="number">
                        06
                      </span>
                      <div className="textHolder Maintenance">
                        <p className="titleBox">Maintenance</p>
                        <p>
                         Process of keeping a website and running smoothly as well as performing optimally.
                        </p>
                      </div>
                    </li>
                  </ul>
            </div>
          </section>

          <section className="bg-violet">
              <div className="container twoColumns commentsCustomer">
                <div>
                  <h2 className="h2 pixelViolete">Our customers love what we do</h2>
                  <p className="subTitle">Transform your idea into reality with finsweet</p>
                  <p>We have over 15 years of expertise delivering design, architecture and build services using world-leading technology and thinking.</p>
                  <ul className="listSmallImage">
                    <li>
                      <img src={customerImg1} alt="" />
                    </li>
                    <li>
                      <img src={customerImg2} alt="" />
                    </li>
                    <li>
                      <img src={customerImg3} alt="" />
                    </li>
                  </ul>
                  <p className="addText"><span>30</span>+ Customer Reviews</p>
                </div>
                <div className='slideHolder50'>
                  <div className="slide">
                    <blockquote>
                      Finsweet has been a wonderful partner to work with. I have been a customer now for the past few months now and I have had nothing but positive experiences!
                    </blockquote>
                    <div className="infoClient">
                      <div className="personalInfo">
                        <img src={customerImg1} alt="" />
                        <span className="name">Johnny Andro</span>
                        <span>Director, Company</span>
                      </div>
                      <div>logo here</div>
                    </div>
                  </div>
                </div>
              </div>
          </section>
          
          <section className="bg-turquoise">
            <div className="container latersNews">
              <h2 className="h2 pixelViolete">Read our latest blogs & news</h2>
              <div className="twoColumns">
                <div className="leftImageBox">
                  <div className="imgHolder">
                    <img src={newsImg1} alt="" />
                  </div>
                  <div className="textHolder">
                    <span className="date">Jan 19, 2021</span>
                    <h4 className="h4">Today’s best design trends for digital products</h4>
                    <a href="/" className="arrowLink">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="leftImageBox">
                  <div className="imgHolder">
                    <img src={newsImg2} alt="" />
                  </div>
                  <div className="textHolder">
                    <span className="date">Jan 19, 2021</span>
                    <h4 className="h4">A practical guide to building a brand strategy</h4>
                    <a href="/" className="arrowLink">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="container stylishCornerTreeColor subScribe">
              <div className="twoColumns rightColorFullLine">
                <div>
                  <p className="sectionTitle">
                    NEWSLETTER
                  </p>
                  <h3 className="h3">Subscribe our News Letter to get Latest Updates.</h3>
                </div>

                <form action="/" id="subScribe">
                  <input type="email" name="" id="" placeholder='Paresh@Pixeto.com' />
                </form>
              </div>
            </div>
          </section>
          <div className={(showModalBox) ? 'overLightModal open': 'overLightModal'}>
            <FormContactUs  modal={true} close={()=>setShowModalBox(false)} /> 
          </div>  
        </>
    )
}
export default Home;