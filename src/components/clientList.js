import {clientList} from '../data/clientList.js';
import {NavLink} from "react-router-dom";
function ClientList(){
    return (
        <ul className='logosList'>
            {clientList.map((item, index) => {
                let svgLogoIcon = {__html:item.logo};
                return (
                    <li key={index}>
                        <NavLink to={item.path} title={item.name} target="_blank" dangerouslySetInnerHTML={svgLogoIcon} />
                    </li>
                )
            })}
        </ul>
    )
}
export default ClientList;