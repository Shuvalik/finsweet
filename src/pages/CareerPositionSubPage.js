import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import TabContainer from "../components/tabContainer";
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
        const url = `/data/position/${hash}.json`;
        fetch(url)
        .then(resp => resp.json())
        .then(resp => setData(resp))
    }
    useEffect(()=> {
        fetchPosition();
    }, [])
    return (
        <>
        <section>
            <div className="container positionFirstSection">
                <div className="titleSectionHolder subSection ">
                    <p className="sectionTitle">job position</p>
                    <h1 className="h2">{data.title}</h1>
                    <p>{data.text}</p>
                    <div className="stylishCornerTreeColor">
                        <button type="button" className="btn arrowLink">Apply Now</button>
                    </div>
                </div>
                <div className="colorTeaser stylishCornerTreeColor rightCorner bigger">
                    <h4 className="h4">Job Description</h4>
                    <ul>
                        {data.descr.map((item, index) => <li key={index}>{item.point}</li>)}
                    </ul>
                </div>
            </div>

            <TabContainer data={data} />
            <div id="applyNow" className="container">
                <h3 className="h3">Apply Now</h3>
                <form action="/">
                    <div className="imputHolder">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" />
                    </div>
                    <div className="imputHolder">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" />
                    </div>
                    <div className="imputHolder">
                        <label htmlFor="email">Email Id</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="imputHolder">
                        <label htmlFor="number">Mobile No</label>
                        <input type="text" id="number" />
                    </div>
                    <div className="textareaHolder">
                    <textarea placeholder="Why do you thing you are good fit for Finsweet?" />
                    </div>
                    <div className="checkboxHolder">
                            <input type="checkbox" id="agree" name=""/>
                        <label htmlFor="agree">
                            I agree to accept the privacy policy,  We will add your contact details provided in this form to our system for contacting you regarding your request.
                        </label>
                    </div>
                    <div className="stylishCornerTreeColor">
                        <button type="submit" className="btn arrowLink">Submit Application</button>
                    </div>
                </form>
            </div>
            
        <section>
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
        </section>
        </>
    );
}
export default CareerPosition;
