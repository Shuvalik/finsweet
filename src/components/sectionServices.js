import { NavLink } from 'react-router-dom';
import content from '../data/ServicePage.json';
import svgSprite from './../assets/images/icons-sprite.svg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function SectionServices({buttonClick}){
    function NextArrow({onClick}){
        return (<button type="button" className="next-btn" onClick={onClick}>
                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.5" cx="20" cy="20" r="19.5" stroke="#8389FF"/>
                        <path d="M22.6484 20.5C22.6484 20.4375 22.6172 20.3672 22.5703 20.3203L18.9297 16.6797C18.8828 16.6328 18.8125 16.6016 18.75 16.6016C18.6875 16.6016 18.6172 16.6328 18.5703 16.6797L18.1797 17.0703C18.1328 17.1172 18.1016 17.1875 18.1016 17.25C18.1016 17.3125 18.1328 17.3828 18.1797 17.4297L21.25 20.5L18.1797 23.5703C18.1328 23.6172 18.1016 23.6875 18.1016 23.75C18.1016 23.8203 18.1328 23.8828 18.1797 23.9297L18.5703 24.3203C18.6172 24.3672 18.6875 24.3984 18.75 24.3984C18.8125 24.3984 18.8828 24.3672 18.9297 24.3203L22.5703 20.6797C22.6172 20.6328 22.6484 20.5625 22.6484 20.5Z" fill="white"/>
                    </svg>
                </button>)
    }
    function PrevArrow({onClick}){
        return (<button type="button" className="prev-btn" onClick={onClick}>
                    <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.5" cx="20" cy="20" r="19.5" stroke="#8389FF"/>
                        <path d="M21.8984 17.25C21.8984 17.1797 21.8672 17.1172 21.8203 17.0703L21.4297 16.6797C21.3828 16.6328 21.3125 16.6016 21.25 16.6016C21.1875 16.6016 21.1172 16.6328 21.0703 16.6797L17.4297 20.3203C17.3828 20.3672 17.3516 20.4375 17.3516 20.5C17.3516 20.5625 17.3828 20.6328 17.4297 20.6797L21.0703 24.3203C21.1172 24.3672 21.1875 24.3984 21.25 24.3984C21.3125 24.3984 21.3828 24.3672 21.4297 24.3203L21.8203 23.9297C21.8672 23.8828 21.8984 23.8125 21.8984 23.75C21.8984 23.6875 21.8672 23.6172 21.8203 23.5703L18.75 20.5L21.8203 17.4297C21.8672 17.3828 21.8984 17.3125 21.8984 17.25Z" fill="white"/>
                    </svg>
                </button>)
    }
    const SliderSettings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
            },
            {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                arrows: false
            }
            }
        ]
    }
    function clickHandler(){
        buttonClick();
    }
    return (
        <section className="bg-orange">
            <div className="container">
              <div className="titleSectionHolder">
                  <p className="sectionTitle">{content.label}</p>
                  <h2 className="h2">{content.pageTitle}</h2>
                  <div className="stylishCornerTreeColor btnHolder">
                    <button className="btn arrowLink" onClick={clickHandler}><span className="hoverEfectBtn"></span><span className="text">{content.labelButtonFor}</span></button>
                  </div>
              </div>
              <div className="sliderItems">
                <Slider {...SliderSettings}>
                    {content.partsPage.map((item, index) => {
                        return (<div className="item" key={index}>
                                    <svg>
                                        <use xlinkHref={svgSprite + item.spotId} />
                                    </svg>
                                    <p className="titleItem">{item.title}</p>
                                    <p>{item.spotText}</p>
                                    <NavLink to={item.path} className="arrowLink"><span className="hoverEfectLinks">{content.textLinkSpot}</span></NavLink>
                                </div>)
                    })}
                </Slider>
              </div> 
            </div>
          </section>
    )
}
export default SectionServices;