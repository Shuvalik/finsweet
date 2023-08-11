import '../assets/scss/pages/contactUs.scss';
import FormContactUs from '../components/FormContactUs';
import Map from '../components/map';
import TeaserAddress from '../components/teaserAddress';
function Contact() {
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