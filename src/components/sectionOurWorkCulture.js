import content from '../data/ourWorkCulture.json';
function OurWorkCulture() {
    return (
        <section className="bg-grey">
            <div className="container">
                <div className="titleSectionHolder subSection">
                    <p className="sectionTitle">{content.label}</p>
                    <h3 className="h3">{content.title}</h3>
                    <p>{content.text}</p>
                </div>
                <div className="spotList">
                    {content.listItems.map((item, index) => {
                        return (<div className="spot" key={index}>
                                    <span className="spot-icon smodzi">{item.icon}</span>
                                    <p className="spot-title">{item.title}</p>
                                    <p>{item.text}</p>
                                </div>)
                    })}
                </div>
            </div>
        </section>
    )
}
export default OurWorkCulture;