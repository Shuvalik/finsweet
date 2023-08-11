import content from '../data/ourTeam.json';
function OurTeam() {
    return (
        <div className="container">
            <div className="titleSectionHolder subSection">
                <p className="sectionTitle">{content.label}</p>
                <h2 className="h2">{content.title}</h2>
                <p>{content.text}</p>
            </div>
            <div className="listImages">
            {content.team.map((item, index) => {
                return (<div className="card" key={index}>
                            <div className="imgHolder">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="textHolder">
                                <p className="name">{item.name}</p>
                                <p className="position">{item.position}</p>
                            </div>
                        </div>)
            })}
            </div>
        </div>
    )
}
export default OurTeam;