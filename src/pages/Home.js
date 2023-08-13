import '../assets/scss/pages/home.scss';
import content from '../data/HomePage.json';
import FormContactUs from '../components/FormContactUs';
import { useState } from 'react';
import ClientList from '../components/clientList';
import SectionAboutUs from '../components/sectionAboutUs';
import SectionApproach from '../components/sectionApproach';
import SectionServices from '../components/sectionServices';
import SectionProcess from '../components/sectionProcess';
import SectionReviews from '../components/sectionReviews';
import SubScribe from '../components/subScribe';

function Home() {

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
                  <div className="stylishCornerTreeColor btnHolder">
                    <button className="btn arrowLink" onClick={clickHandler}><span className="hoverEfectBtn"></span><span className="text">{content.textButton}</span></button>
                  </div>
                </div>
                <div className="imageHolder">
                  <img src={content.imageFirstSection} alt="conversation" />
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
          <SectionApproach />
          <SectionServices buttonClick={clickHandler} />
          <SectionProcess />
          <SectionReviews />
          <section className="bg-turquoise">
            <div className="container latersNews">
              <h2 className="h2 pixelViolete">{content.titleSectionLatestNews}</h2>
              <div className="twoColumns">
                <div className="leftImageBox">
                  <div className="imgHolder">
                    {/* <img src={newsImg1} alt="" /> */}
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
                    {/* <img src={newsImg2} alt="" /> */}
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
            <SubScribe />
          </section>
          <div className={(showModalBox) ? 'overLightModal open': 'overLightModal'}>
            <FormContactUs  modal={true} close={()=>setShowModalBox(false)} /> 
          </div>  
        </>
    )
}
export default Home;