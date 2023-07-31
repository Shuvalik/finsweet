
import aboutSectionImg1 from './../assets/images/content-about-section1.jpg';
import aboutSectionImg2 from './../assets/images/content-about-section2.jpg';
import aboutSectionImg3 from './../assets/images/content-about-section3.jpg';
import teamImg from './../assets/images/team/img-1.jpg';
import visionImg from './../assets/images/company-cont-img.jpg';
import svgSprite from './../assets/images/icons-sprite.svg';
function Company() {

    const settings = svgSprite + '#settings';
    const design = svgSprite + '#design';
    const support = svgSprite + '#support';

    return (
        <>
        <section>
            <div className="container stylishCornerTreeColor rightCorner bigger">
              <div className="titleSectionHolder pixelOrange">
                  <p className="sectionTitle">Company</p>
                  <h1 className="h2">
                    Award-winning Company seen and used by millions around the world.
                  </h1>
                  <p>
                    We have over 15 years of expertise delivering bespoke consulting, design, architecture and build services using world-leading technology and thinking.
                  </p>
              </div>
              <div className="threeImgBoxes topRightColorLine">
                <div className="imageHolder">
                  <img src={aboutSectionImg1} alt="img" />
                </div>
                <div className="imageHolder">
                  <img src={aboutSectionImg2} alt="img" />
                </div>
                <div className="imageHolder">
                  <img src={aboutSectionImg3} alt="img" />
                </div>
              </div>
              
                <div className="twoColumns subColorSection">
                    <div className="pixelBlue">
                        <p><strong>Our Story 👇</strong></p>
                        <h3 className="h3">From Startups to Titans of Industry
                        </h3>
                        <p>
                            With a laser focus on flexible, composable technology stacks, we empower customer-first retailers, manufacturers and brands to deliver remarkable products and services at scale. Finsweet work as your partner and team member to create solutions that give your brand complete control of your online presence, be first to market and generate measurable results.
                        </p>
                    </div>
                    <div className="bg-orange">
                        <div className="counterList">
                        <div>
                            <span className="number">1560+</span>
                            Project Delivered
                        </div>
                        <div>
                            <span className="number">100+</span>
                            Professional
                        </div>
                        <div>
                            <span className="number">950+</span>
                            Happy Client
                        </div>
                        <div>
                            <span className="number">10 yrs</span>
                            Experience
                        </div>
                        </div>
                    </div>
                </div>

                <div className="sectionwithLogoList"></div>
            </div>
          </section>

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

          <section>
            <div className="container">
              <div className="titleSectionHolder">
                  <p className="sectionTitle">Our VISION</p>
                  <h3 className="h3">
                    To be a major force in digital commerce strategy and engineering in the UK, Europe and the Middle East.
                  </h3>
                  <p>
                    Our company culture is something we feel is at the core of creating a great business for all stakeholders involved. We strongly believe that if we create a place where we love to work, then we can all settle in and revel in being great at what we do.
                  </p>
              </div>
              <div className="imageHolderFullWidth">
                <img src={visionImg} alt="" />
              </div>
              
              <div className="titleSectionHolder subSection">
                  <p className="sectionTitle">MEET OUR TEAM</p>
                  <h2 className="h2">
                    Teamwork is the only way we work 
                  </h2>
                  <p>
                    Our commitment to composable digital experiences gives brands the creativity and control to do more cool stuff, that their customers love. Join us on this exciting journey to the future of digital interaction.
                  </p>
              </div>
              <div className="listImages">
                <div className="card">
                    <div className="imgHolder">
                        <img src={teamImg} alt="" />
                    </div>
                    <div className="textHolder">
                        <p className="name">Javena Melo</p>
                        <p className="position">Support Assist</p>
                        <ul className="contactList">
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="imgHolder">
                        <img src={teamImg} alt="" />
                    </div>
                    <div className="textHolder">
                        <p className="name">Javena Melo</p>
                        <p className="position">Support Assist</p>
                        <ul className="contactList">
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="imgHolder">
                        <img src={teamImg} alt="" />
                    </div>
                    <div className="textHolder">
                        <p className="name">Javena Melo</p>
                        <p className="position">Support Assist</p>
                        <ul className="contactList">
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="imgHolder">
                        <img src={teamImg} alt="" />
                    </div>
                    <div className="textHolder">
                        <p className="name">Javena Melo</p>
                        <p className="position">Support Assist</p>
                        <ul className="contactList">
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="imgHolder">
                        <img src={teamImg} alt="" />
                    </div>
                    <div className="textHolder">
                        <p className="name">Javena Melo</p>
                        <p className="position">Support Assist</p>
                        <ul className="contactList">
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="imgHolder">
                        <img src={teamImg} alt="" />
                    </div>
                    <div className="textHolder">
                        <p className="name">Javena Melo</p>
                        <p className="position">Support Assist</p>
                        <ul className="contactList">
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="imgHolder">
                        <img src={teamImg} alt="" />
                    </div>
                    <div className="textHolder">
                        <p className="name">Javena Melo</p>
                        <p className="position">Support Assist</p>
                        <ul className="contactList">
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="card">
                    <div className="imgHolder">
                        <img src={teamImg} alt="" />
                    </div>
                    <div className="textHolder">
                        <p className="name">Javena Melo</p>
                        <p className="position">Support Assist</p>
                        <ul className="contactList">
                            <li></li>
                        </ul>
                    </div>
                </div>
              </div>
            </div>

            
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

        </>
    )
}
export default Company;