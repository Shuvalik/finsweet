import { useParams } from "react-router-dom";
import SectionLatestNews from "../components/sectionLatestNews";
import content from '../data/ourTeam.json';
function PeopleDetails() {
    const {hash} = useParams();
    const person = content.team.find((item) => item.name === hash.replaceAll("_", " "));
    return (
        <>
            <section>
                <div className="container">
                    <div className="personeInfo">
                        <div className="imgHolder">
                             <img src={person.image} alt={person.name} /> 
                        </div>
                        <h3 className="h3">{person.name}</h3>
                        <p className="sectionTitle">{person.position}</p>
                        <p>{person.text}</p>
                    </div>
                </div>
            </section>
            <SectionLatestNews />
        </>
    )
}
export default PeopleDetails;