import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ApplyNow from "../components/FormApplyNow";
import SubScribe from "../components/subScribe";
import TabContainer from "../components/tabContainer";
import content from "../data/CareerSubPage.json";
function CareerPosition() {

    const {hash} = useParams();
    const [data, setData] = useState({
        title: '',
        text: '',
        descr: [],
        details: [],
        requirements: [],
        responsibilities: []
    })
    function fetchPosition() {
        const url = `data/position/${hash}.json`;
        fetch(url)
        .then(resp => resp.json())
        .then(resp => setData(resp))
    }
    useEffect(()=> {
        fetchPosition();
        window.document.title = content.windowTitle
    }, [])
    return (
        <>
        <section>
            <div className="container positionFirstSection">
                <div className="titleSectionHolder subSection ">
                    <p className="sectionTitle">{content.pageTitle}</p>
                    <h1 className="h2">{data.title}</h1>
                    <p>{data.text}</p>
                    <div className="stylishCornerTreeColor btnHolder">
                        <Link to="#applyNow" type="button" className="btn arrowLink"><span className="hoverEfectBtn"></span><span className="text">Apply Now</span></Link>
                    </div>
                </div>
                <div className="colorTeaser stylishCornerTreeColor rightCorner bigger">
                    <h4 className="h4">{content.titleBox}</h4>
                    <ul>
                        {data.descr.map((item, index) => <li key={index}>{item.point}</li>)}
                    </ul>
                </div>
            </div>
            <TabContainer data={data} />
            <div id="applyNow" className="container applyNow">
                <h3 className="h3">{content.titleForm}</h3>
                <ApplyNow />
            </div>
            <section>
                <SubScribe />
            </section>
        </section>
        </>
    );
}
export default CareerPosition;
