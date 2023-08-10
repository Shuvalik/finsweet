import '../assets/scss/pages/company.scss';
import content from '../data/CompanyPage.json';
import teamImg from './../assets/images/team/img-1.jpg';
import visionImg from './../assets/images/company-cont-img.jpg';
import svgSprite from './../assets/images/icons-sprite.svg';
import StoryCompany from '../components/sectionStoryCompany';
import ClientList from '../components/clientList';
function Company() {

    const settings = svgSprite + '#settings';
    const design = svgSprite + '#design';
    const support = svgSprite + '#support';

    return (
        <>
        <section>
            <div className="container stylishCornerTreeColor rightCorner bigger">
              <div className="titleSectionHolder pixelOrange">
                  <p className="sectionTitle">{content.namePage}</p>
                  <h1 className="h2">{content.titlePage}</h1>
                  <p>{content.textPage}</p>
              </div>
              <div className="threeImgBoxes topRightColorLine">
                {content.images.map((item, index) => {
                    return (<div className="imageHolder" key={index}>
                              <img src={item.imgPath} alt="our team" />
                            </div>)
                })}
              </div>
              <StoryCompany content={content.sectionStory} counter={content.counterList} />
              <div className="sectionwithLogoList bg-grey">
                  <ClientList />
              </div>
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