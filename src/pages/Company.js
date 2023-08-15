import '../assets/scss/pages/company.scss';
import content from '../data/CompanyPage.json';
import StoryCompany from '../components/sectionStoryCompany';
import ClientList from '../components/clientList';
import SectionApproach from '../components/sectionApproach';
import OurTeam from '../components/sectionOurTeam';
import OurVision from '../components/sectionOurVision';
import SubScribe from '../components/subScribe';
import { useEffect } from 'react';
function Company() {
    useEffect(() => {window.document.title = content.windowTitle},[]);
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
        <SectionApproach />
        <section>
          <OurVision />
          <OurTeam />
          <SubScribe />
        </section>
      </>
    )
}
export default Company;