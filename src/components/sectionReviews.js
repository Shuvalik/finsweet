import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import content from '../data/reviewSection.json';
import { clientList } from '../data/clientList';
function FindLogoCompany({logoName}){
    const companyInfo = clientList.find((item) => { if (item.name === logoName) return true});
    let svgLogoIcon = '';
    if (Object.keys(companyInfo).length) svgLogoIcon = {__html:companyInfo.logo};
    return (
        <div dangerouslySetInnerHTML={svgLogoIcon} />
    )
}
function SectionReviews() {
    const label = {__html:content.labelCount};

    const SliderSettings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        arrows: false
    }
    return (
          <section className="bg-violet">
              <div className="container twoColumns commentsCustomer">
                <div>
                  <h2 className="h2 pixelViolete">{content.title}</h2>
                  <p className="subTitle">{content.subTitle}</p>
                  <p>{content.text}</p>
                  <ul className="listSmallImage">
                    {content.listCustomers.map((item, index) => {
                        return (<li key={index}>
                                    <img src={item.img} alt={item.name} />
                                </li>)
                    })}
                  </ul>
                  <p className="addText" dangerouslySetInnerHTML={label} />
                </div>
                <div className='slideHolder50'>
                    <Slider {...SliderSettings}>
                        {content.listCustomers.map((item, index) => {
                            return (<div className="slide" key={index}>
                                        <div>
                                            <blockquote>{item.text}</blockquote>
                                            <div className="infoClient">
                                                <div className="personalInfo">
                                                    <img src={item.img} alt={item.name} />
                                                    <span className="name">{item.name}</span>
                                                    <span>{item.position}</span>
                                                </div>
                                                <FindLogoCompany logoName={item.logoName} />
                                            </div>
                                        </div>
                                    </div>)
                        })}
                    </Slider>
                </div>
              </div>
          </section>
    )
}
export default SectionReviews;