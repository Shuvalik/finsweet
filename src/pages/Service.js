import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/scss/pages/service.scss';
import FormContactUs from '../components/FormContactUs';
import SectionProcess from '../components/sectionProcess';
import SubScribe from '../components/subScribe';
import content from '../data/ServicePage.json';

function Service() {
    const [showModalBox, setShowModalBox] = useState(false);
    function clickHandler() {
      setShowModalBox(true);
    }
    return (
        <>
          <section className="servicesPageCampaign bg-orange">
            <div className="container twoColumns">
                <div>
                  <p className="sectionTitle">{content.label}</p>
                  <h1 className="h2">{content.pageTitle}</h1>
                  <p>{content.text}</p>
                  <div className="stylishCornerTreeColor btnHolder">
                    <button className="btn arrowLink" onClick={clickHandler}><span className="hoverEfectBtn"></span><span className="text">{content.textButton}</span></button>
                  </div>
                </div>
                <nav className="navOnPage">
                    <ul>
                      {content.partsPage.map((item, index) => {
                      return (<li key={index}>
                                <NavLink to={'#' + item.hash} className="arrowLink">{item.title}</NavLink>
                              </li>)
                      })}
                    </ul>
                </nav>
            </div>
          </section>
          <SectionProcess className={"bg-violet servicesPage"} />  

          <div className="servicePageContent">
              {content.partsPage.map((item, index) => {
                return (<section key={index} className={(index % 2 !== 0)  ? ((index === 1) ? "imageAndText bg-turquoise" : "imageAndText bg-violet") : "imageAndText"} id={item.hash}>
                          <div className={(index % 2 === 0) ? "twoColumns container revert" : "twoColumns container"}>
                              <div className="imageHolder">
                                  <img src={item.image} alt={item.title} />
                              </div>
                              <div className="textHolder">
                                  <h4 className="h4">{item.title}</h4>
                                  <h3 className="h3">{item.subTitle}</h3>
                                  <p>{item.text}</p>
                              </div>
                          </div>
                      </section>)
              })}
            <SubScribe />
          </div>
          
          <div className={(showModalBox) ? 'overLightModal open': 'overLightModal'}>
            <FormContactUs  modal={true} close={()=>setShowModalBox(false)} /> 
          </div>               
          
        </>
    )
}
export default Service;