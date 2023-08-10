import content from '../data/CompanyPage.json';
import { NavLink } from 'react-router-dom';
import CountUp from './CountUp';
function SectionAboutUs(){
    return (
        <section className="aboutUs">
            <div className="container">
              <div className="twoColumns">
                <div>
                  <p className="sectionTitle">{content.sectionAboutUs.label}</p>
                  <h2 className="h2">{content.sectionAboutUs.title}</h2>
                </div>
                <div className="textSide">
                  <h3 className="h3">{content.sectionAboutUs.subTitle}</h3>
                  <p>{content.sectionAboutUs.text}</p>
                </div>
              </div>
              <div className="threeImgBoxes rightColorFullLine">
                  {content.images.map((item, index) => {
                    return (<div className="imageHolder" key={index}>
                              <img src={item.imgPath} alt="our team" />
                            </div>)
                  })}
              </div>
              <div className="twoColumns">
                <div className="counterList">
                  {content.counterList.map((item, index) => <CountUp key={index} label={item.label} value={+item.number} suffix={item.suffix} />)}
                </div>
                <NavLink to={content.sectionAboutUs.linkPath} className="arrowLink"><span className="hoverEfectLinks">{content.sectionAboutUs.linkText}</span></NavLink>
              </div>
            </div>
          </section>
    )
}
export default SectionAboutUs;