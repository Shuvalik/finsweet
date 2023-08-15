import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import '../assets/scss/pages/career.scss';
import OurWorkCulture from '../components/sectionOurWorkCulture';
import SubScribe from '../components/subScribe';
import content from '../data/CareerPage.json';
function Career(){
    const textButton = {__html:content.textScrollBtn};
    const sectionToScroll = useRef(null);
    useEffect(() => {window.document.title = content.windowTitle},[]);
    function clickHandler() {
        sectionToScroll.current.scrollIntoView({behavior: "smooth"});
    }
    return (<>
        <section>
                <div className="container careerFirstSection stylishCornerTreeColor rightCorner bigger">
                    <div className="oneColumn">
                        <div className="titleSectionHolder subSection">
                            <p className="sectionTitle">{content.namePage}</p>
                            <h2 className="h2">{content.subTitle}</h2>
                            <p>{content.text}</p>
                        </div>
                    </div>
                    <h1>{content.titlePage}</h1>
                </div>
                <div className="linkScrollHolder">
                    <button onClick={clickHandler} dangerouslySetInnerHTML={textButton} />
                </div>

                <div className="container bg-turquoise listGreedBox" ref={sectionToScroll}>
                    {content.positionList.map((item, index) => {
                        return (<div className="simpleBox" key={index}>
                                    <p className="simpleBox-title">{item.title}</p>
                                    <div className="simpleBox-text">
                                        <span>{item.requare1}</span>
                                        <span>{item.requare2}</span>
                                    </div>
                                    <div className="simpleBox-link">
                                         <Link to={`/career/${(item.title).replace(/ /g,'_')}`}  className="arrowLink"><span className="hoverEfectLinks">{content.textApplyLink}</span></Link>
                                    </div>
                                </div>)
                    })}
                </div>
        </section>
        <OurWorkCulture />
        <section>
            <SubScribe />
        </section>
    </>)
}
export default Career;