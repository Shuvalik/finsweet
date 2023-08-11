import {sotialLinks} from '../data/sotialLinks';
import { NavLink } from 'react-router-dom';
function SotialLinks() {
    return (
        <ul className="sotial-links">
            {sotialLinks.map((item, index) => {
                const image = {__html:item.img};
                return (
                    <li key={index}>
                        <NavLink to={item.path} target="_blank" rel="noreferrer nofolow" title={item.title} dangerouslySetInnerHTML={image} />
                    </li>
                )
            })}
        </ul>
    )
}
export default SotialLinks;