import content from '../data/ourVisionSection.json';
function OurVision(){
    return(
        <div className="container">
            <div className="titleSectionHolder">
                <p className="sectionTitle">{content.label}</p>
                <h3 className="h3">{content.title}</h3>
                <p>{content.text}</p>
            </div>
            <div className="imageHolderFullWidth">
            <img src={content.img} alt={content.label} />
            </div>
        </div>
    )
}
export default OurVision;