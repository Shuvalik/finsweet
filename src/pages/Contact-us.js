import '../assets/scss/pages/contactUs.scss';
import { windowTitleContact } from '../data/ContactUs.js';
import FormContactUs from '../components/FormContactUs';
import Map from '../components/map';
import TeaserAddress from '../components/teaserAddress';
import { useEffect } from 'react';
function Contact() {
    useEffect(() => {window.document.title = windowTitleContact},[]);
    return (<>
        <section>
            <div className="container contactFirstSection">
                <FormContactUs  modal={false}  />
                <TeaserAddress />
            </div> 
            <Map />  
        </section>
        </>
    )
}
export default Contact;