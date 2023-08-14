import { useState } from "react";
import { toast } from "react-toastify";
import errorsMassege from "../helpers/errorsMassege";
import svgSprite from "../assets/images/icons-sprite.svg";
import { urlString, chatId } from "../evn";
import { contactInfoFormBox } from "../data/ContactUs.js";
import InputField from "./inputFild.js";

function FormContactUs({modal, close}){
    const titleBox = {__html:contactInfoFormBox.titlePage};
    const closeIcon = svgSprite + '#closeIcon';
    function closeWindowHendler() {
        close();
    }
    
    const [values, setValues] = useState({
        name: '',
        email: '',
        subject: '',
        messege: ''
    })
    const [errors, setErrors] = useState({})
    const [disabled, setDisabled] = useState(false);

    function isValidEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    function validate(values) {
        let errors = {};
        if (values.name === '') {
            errors.name = 'Enter your name'
        }
        if (values.email === '') {
            errors.email = 'Enter your email'
        }
        else if (!isValidEmail(values.email)) {
            errors.email = 'Enter your valid email'
        }
        if (values.subject === '') {
            errors.subject = 'Enter your subject'
        }
        if (values.messege === '') {
            errors.messege = 'Enter your messedge'
        }
        return errors;
    }
    function blurHandler(target) {
        if (values[target.name] !== '' && errors[target.name] && errors[target.name] !== '') {
            setErrors({...errors, [target.name]: '' })
        }
    }
    function changeHandler(target) {
        setValues({...values, [target.name]: target.value })
    }
    const msg = `
<b>Contact us</b>
<b>Name: </b> ${values.name}
<b>Email: </b> ${values.email}
<b>Subject: </b> ${values.subject}
<b>Text: </b> ${values.messege}`;
    function submitHandler (event) {
        event.preventDefault();
        setDisabled(true);
        const errorMasseges = validate(values);
        setErrors(errorMasseges);
        if (Object.keys(errorMasseges).length) {
            setDisabled(false);
            return false
        }
        fetch(urlString, {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: msg,
                parse_mode: 'HTML'
            })
        })
        .then(response => {
             if (response.ok) {
                toast.success('Thanks! We will contact you!', {position: "top-center", theme: "dark"});
                setValues({
                    name: '',
                    email: '',
                    subject: '',
                    messege: ''
                })
             } else {
                const textError = errorsMassege(response.status);
                throw new Error(textError);
             }
        })
        .catch((error) => {
            toast.error(error.message, {position: "top-center", theme: "dark"})
        })
        .finally(setDisabled(false));
    }
    return (
        <div className={(modal) ? 'modalBox': 'titleSectionHolder pixelOrange'}>
            {(modal) ? 
            <>
                <button type="button" className="closeBtn" onClick={closeWindowHendler}>
                  <svg width="14" height="14">
                    <use xlinkHref={closeIcon} />
                  </svg>
                </button>
                <h2 className="h2" dangerouslySetInnerHTML={titleBox} />
            </>
            : 
            <>
                <p className="sectionTitle">{contactInfoFormBox.label}</p>
                <h1 className="h2" dangerouslySetInnerHTML={titleBox} />
            </>
            }
            <p>{contactInfoFormBox.textPage}</p>
            <form onSubmit={submitHandler} id="contact">
                <InputField multy={false} label={contactInfoFormBox.labelName} name="name" value={values.name} change={changeHandler} blur={blurHandler} error={errors.name || ''} />
                <InputField multy={false} label={contactInfoFormBox.labelEmail} name="email" value={values.email} change={changeHandler} blur={blurHandler} error={errors.email || ''} />
                <InputField multy={false} label={contactInfoFormBox.labelSubject} name="subject" value={values.subject} change={changeHandler} blur={blurHandler} error={errors.subject || ''} />
                <InputField multy={true} label={contactInfoFormBox.labelMessege} name="messege" value={values.messege} change={changeHandler} blur={blurHandler} error={errors.messege || ''} />
                <div className="stylishCornerTreeColor btnHolder">
                    <button type="submit" className="btn arrowLink" disabled={disabled}><span className="hoverEfectBtn"></span><span className="text">{contactInfoFormBox.labelButton}</span></button>
                </div>

            </form>
        </div>
    )
}
export default FormContactUs;