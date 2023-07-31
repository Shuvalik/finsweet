import img1 from './../assets/images/cont-img-service1.jpg';
import img2 from './../assets/images/cont-img-service2.jpg';
import img3 from './../assets/images/cont-img-service3.jpg';
import img4 from './../assets/images/cont-img-service4.jpg';
import img5 from './../assets/images/cont-img-service5.jpg';

function Service() {
    return (
        <>
        
          <section className="servicesPageCampaign bg-orange">
            <div className="container twoColumns">
                <div>
                  <p className="sectionTitle">Our Services</p>
                  <h1 className="h2">
                    We Build Software Solutionthat Solve Clients Business Challenges
                  </h1>
                  <p>
                    We can deliver good alternatives to rigid IT solutions because we firmly believe each client deserves an individual approach. 
                  </p>
                  <div className="stylishCornerTreeColor">
                    <button className="btn arrowLink">Request A Quote</button>
                  </div>
                </div>
                <nav className="navOnPage">
                    <ul>
                        <li>
                            <a href="#support" className="arrowLink">Technical support</a>
                        </li>
                        <li>
                            <a href="#development" className="arrowLink">Development</a>
                        </li>
                        <li>
                            <a href="#design" className="arrowLink">User Experience Design</a>
                        </li>
                        <li>
                            <a href="#digital" className="arrowLink">Digital Marketing & Strategy</a>
                        </li>
                        <li>
                            <a href="#analytics" className="arrowLink">Web Analytics & User Insights</a>
                        </li>
                    </ul>
                </nav>
            </div>
          </section>

          <section className="bg-violet servicesPage">
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

          <div className="servicePageContent">
            <section className="imageAndText"  id="support">
                <div className="twoColumns revert container">
                    <div className="imageHolder">
                        <img src={img1} alt="" />
                    </div>
                    <div className="textHolder">
                        <h4 className="h4">
                            Technical Support
                        </h4>
                        <h3 className="h3">
                            Best in class tech support for your company. We become your tech backbone.
                        </h3>
                        <p>
                            We take time to review site traffic with an emphasis on visitor trends, traffic sources, content review, goals, search, and campaign tracking. Performance is crucial for any mobile app’s success. Our development team employs robust optimization techniques to enhance your app’s speed and responsiveness.
                        </p>
                    </div>
                </div>
            </section>
            <section className="imageAndText bg-turquoise" id="development">
                <div className="twoColumns container">
                    <div className="imageHolder">
                        <img src={img2} alt="" />
                    </div>
                    
                    <div className="textHolder">
                        <h4 className="h4">
                            Development
                        </h4>
                        <h3 className="h3">
                            Bring your ideas to reality with certified team of developers, working with latest technologies.
                        </h3>
                        <p>
                            Web development encompasses creating and maintaining websites involving various technologies and programming languages. Skilled developers use HTML, CSS, and JavaScript to build visually appealing and functional sites. We  provede development services in today’s digital landscape.
                        </p>
                    </div>
                </div>
            </section>
            <section className="imageAndText" id="design">
                <div className="twoColumns container revert">
                    <div className="imageHolder">
                        <img src={img3} alt="" />
                    </div>
                    <div className="textHolder">
                        <h4 className="h4">
                            User Experience Design
                        </h4>
                        <h3 className="h3">
                            Perfecting design to drive user engagement, conversion rates and customer loyalty.  
                        </h3>
                        <p>
                           A well-designed interface is the key to a successful website or application, as it enhances user experience and promotes user interaction. Our expert designers combine creativity and functionality to create interfaces that leave a lasting impression.
                        </p>
                    </div>
                </div>
            </section>
            <section className="imageAndText bg-violet" id="digital">
                <div className="twoColumns container">
                    <div className="imageHolder">
                        <img src={img4} alt="" />
                    </div>
                    <div className="textHolder">
                        <h4 className="h4">
                            Digital Marketing & Strategy
                        </h4>
                        <h3 className="h3">
                             Our team will help you develop a strategy that meets your goals.   
                        </h3>
                        <p>
                           A robust digital strategy, complemented by solid market intelligence, is integral to successful web development in the digital era. One key aspect of this strategy often involves website re-design, ensuring that your online presence remains dynamic, relevant, and engaging.
                        </p>
                    </div>
                </div>
            </section>
            <section className="imageAndText" id="analytics">
                <div className="twoColumns container revert">
                    <div className="imageHolder">
                        <img src={img5} alt="" />
                    </div>
                    <div className="textHolder">
                        <h4 className="h4">
                            Web Analytics & User Insights
                        </h4>
                        <h3 className="h3">
                            Used web analytics for strategic insights and informed decision-making in today's competitive digital landscape.
                        </h3>
                        <p>
                           Based on market intelligence & competitor insights, our team will help you identify high-impact ideas – enabling us to design and develop an experience that will make a difference for your users.
                        </p>
                    </div>
                </div>
            </section>
            
                
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
          </div>

          
        </>
    )
}
export default Service;