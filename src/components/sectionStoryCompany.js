import CountUp from "./CountUp";

function StoryCompany({content, counter}) {
    const label = {__html:content.label};
    return (
        <div className="twoColumns subColorSection">
            <div className="pixelViolete">
                <p><strong dangerouslySetInnerHTML={label} /></p>
                <h3 className="h3">{content.title}</h3>
                <p>{content.text}</p>
            </div>
            <div className="bg-orange">
                <div className="counterList">
                  {counter.map((item, index) => <CountUp key={index} label={item.label} value={+item.number} suffix={item.suffix} />)}
                </div>
            </div>
        </div>
    )
}
export default StoryCompany;