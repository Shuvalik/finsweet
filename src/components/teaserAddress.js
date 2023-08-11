import content from '../data/address.json';
import SotialLinks from './sotialLinks';
function TeaserAddress() {
    const nameParts = Object.keys(content);
    return (
                <div className="contact-teaser">
                    <address>
                        <ul>
                            <li>
                                <p className="partTitle">{nameParts[0]}</p>
                                <p>{content["Location"].address}</p>  
                            </li>
                            <li>
                                <p className="partTitle">{nameParts[1]}</p>
                                <p>
                                    <span>{content["Working Hour"].days}</span>
                                    <span>{content["Working Hour"].time}</span>
                                    <span className="addInfo">{content["Working Hour"].addInfo}</span>
                                </p> 
                            </li>
                            <li>
                                <p className="partTitle">{nameParts[2]}</p>
                                <p>
                                    <span><a href={'tel:' + (content["Contact Us"].tel).replaceAll(' ', '')}>{content["Contact Us"].tel}</a></span>
                                    <span className="addInfo"><a href={'mailto:' + (content["Contact Us"].email).replaceAll(' ', '')}>{content["Contact Us"].email}</a></span>
                                </p>
                            </li>
                        </ul>
                    </address>
                    <SotialLinks />
                </div>
    )
}
export default TeaserAddress;