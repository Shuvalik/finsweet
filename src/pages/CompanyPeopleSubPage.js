import { useParams } from "react-router-dom";
import img from './../assets/images/team/img-3.jpg';
import content from '../data/ourTeam.json';
import teamImg from './../assets/images/team/img-1.jpg';
function PeopleDetails() {
    
    const {hash} = useParams();
    const person = content.team.find((item) => item.name === hash.replaceAll("_", " "));
    console.log(person);
    return (
        <>
            <section>
                <div className="container">
                    <div className="personeInfo">
                        <div className="imgHolder">
                            <img src={img} alt="" />
                        </div>
                        <h3 className="h3">Javena Melo</h3>
                        <p class="sectionTitle">CEO</p>
                        <p>Leads all creative efforts with her amazing array of brand, creative and interface design skills. He is a graduate of RISD and one of its finest.</p>
                    </div>
                </div>
            </section>
            <section className='bg-turquoise peoplePage'>
                <div className="container">
                    <div className="titleSectionHolder subSection">
                        <p className="sectionTitle">MEET OUR TEAM</p>
                        <h2 className="h2">
                            Teamwork is the only way we work 
                        </h2>
                        <p>
                            Our commitment to composable digital experiences gives brands the creativity and control to do more cool stuff, that their customers love. Join us on this exciting journey to the future of digital interaction.
                        </p>
                    </div>
                    <div className="listImages">
                        <div className="card">
                            <div className="imgHolder">
                                <img src={teamImg} alt="" />
                            </div>
                            <div className="textHolder">
                                <p className="name">Javena Melo</p>
                                <p className="position">Support Assist</p>
                                <ul className="contactList">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgHolder">
                                <img src={teamImg} alt="" />
                            </div>
                            <div className="textHolder">
                                <p className="name">Javena Melo</p>
                                <p className="position">Support Assist</p>
                                <ul className="contactList">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgHolder">
                                <img src={teamImg} alt="" />
                            </div>
                            <div className="textHolder">
                                <p className="name">Javena Melo</p>
                                <p className="position">Support Assist</p>
                                <ul className="contactList">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgHolder">
                                <img src={teamImg} alt="" />
                            </div>
                            <div className="textHolder">
                                <p className="name">Javena Melo</p>
                                <p className="position">Support Assist</p>
                                <ul className="contactList">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgHolder">
                                <img src={teamImg} alt="" />
                            </div>
                            <div className="textHolder">
                                <p className="name">Javena Melo</p>
                                <p className="position">Support Assist</p>
                                <ul className="contactList">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgHolder">
                                <img src={teamImg} alt="" />
                            </div>
                            <div className="textHolder">
                                <p className="name">Javena Melo</p>
                                <p className="position">Support Assist</p>
                                <ul className="contactList">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgHolder">
                                <img src={teamImg} alt="" />
                            </div>
                            <div className="textHolder">
                                <p className="name">Javena Melo</p>
                                <p className="position">Support Assist</p>
                                <ul className="contactList">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgHolder">
                                <img src={teamImg} alt="" />
                            </div>
                            <div className="textHolder">
                                <p className="name">Javena Melo</p>
                                <p className="position">Support Assist</p>
                                <ul className="contactList">
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PeopleDetails;