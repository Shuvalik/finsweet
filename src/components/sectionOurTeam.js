import content from '../data/ourTeam.json';
import { Link } from "react-router-dom";
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
                            <Link to={`/company/${(item.name).replace(/ /g,'_')}`} className="textHolder">
                                <span className="name">{item.name}</span>
                                <span className="position">{item.position}</span>
                            </Link>
                        </div>)
            })}
            </div>
        </div>
    )
}
export default OurTeam;