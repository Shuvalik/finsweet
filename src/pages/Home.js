import '../assets/scss/pages/home.scss';
import content from '../data/HomePage.json';
import { useEffect, useState } from 'react';
import FormContactUs from '../components/FormContactUs';
import ClientList from '../components/clientList';
import SectionAboutUs from '../components/sectionAboutUs';
import SectionApproach from '../components/sectionApproach';
import SectionServices from '../components/sectionServices';
import SectionProcess from '../components/sectionProcess';
import SectionReviews from '../components/sectionReviews';
import SubScribe from '../components/subScribe';
import SectionLatestNews from '../components/sectionLatestNews';

function Home() {
    useEffect(() => {window.document.title = content.windowTitle},[]);
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
          <SectionLatestNews />
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