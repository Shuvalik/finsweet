import content from "../data/CareerSubPage.json";
import { useState } from "react";
import { toast } from "react-toastify";
import errorsMassege from "../helpers/errorsMassege";
import { urlString, chatId } from "../evn";
import InputField from "./inputFild.js";
function ApplyNow() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        messege: '',
        agree: true
    })
    const [errors, setErrors] = useState({})
    const [disabled, setDisabled] = useState(false);

    function isValidEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    function isValidNumber(number) {
        let regex = /^\+\d{8,}$/;
        return regex.test(number);
    }
    function validate(values) {
        let errors = {};
        if (values.firstName === '') {
            errors.firstName = 'Enter your first name'
        }
        if (values.lastName === '') {
            errors.lastName = 'Enter your last name'
        }
        if (values.email === '') {
            errors.email = 'Enter your email'
        }
        else if (!isValidEmail(values.email)) {
            errors.email = 'Enter your valid email'
        }
        if (values.number === '') {
            errors.number = 'Enter your modile number'
        }
        else if (!isValidNumber(values.number)) {
            errors.number = 'Enter your valid phone number as +123456789'
        }
        if (values.messege === '') {
            errors.messege = 'Enter message'
        }
        if (!values.agree) {
            errors.agree = 'You must agree to accept the privacy policy!'
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
    function agreeHandler(event) {
        setValues({...values, "agree": event.target.checked })
        if (event.target.checked && errors.agree && errors.agree !== '') {
            setErrors({...errors, [event.target.name]: '' })
        }
    }
    const msg = `
<b>Apply Now</b>
<b>First Name: </b> ${values.firstName}
<b>Last Name: </b> ${values.lastName}
<b>Email: </b> ${values.email}
<b>Modile: </b> ${values.number}
<b>Text: </b> ${values.messege}`;
    async function submitHandler (event) {
        event.preventDefault();
        setDisabled(true);
        const errorMasseges = validate(values);
        setErrors(errorMasseges);
        if (Object.keys(errorMasseges).length) {
            setDisabled(false);
            return false
        }
        await fetch(urlString, {
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
                    firstName: '',
                    lastName: '',
                    email: '',
                    number: '',
                    messege: '',
                    agree: true
                })
             }
             const textError = errorsMassege(response.status);
             throw new Error(textError);
        })
        .catch((error) => {
            toast.error(error.message, {position: "top-center", theme: "dark"})
        })
        .finally(setDisabled(false));
    }
    return(
        <form onSubmit={submitHandler}>
            <div className="imputHolder">
                <InputField multy={false} label={content.labelFirstName} name="firstName" value={values.firstName} change={changeHandler} blur={blurHandler} error={errors.firstName || ''} />
            </div>
            <div className="imputHolder">
                <InputField multy={false} label={content.labelLastName} name="lastName" value={values.lastName} change={changeHandler} blur={blurHandler} error={errors.lastName || ''} />
            </div>
            <div className="imputHolder">
                <InputField multy={false} label={content.labelEmail} name="email" value={values.email} change={changeHandler} blur={blurHandler} error={errors.email || ''} />
            </div>
            <div className="imputHolder">
                <InputField multy={false} label={content.labelMobile} name="number" value={values.number} change={changeHandler} blur={blurHandler} error={errors.number || ''} />
            </div>
            <div className="textareaHolder">
                <InputField multy={true} label={content.labelMessege} name="messege" value={values.messege} change={changeHandler} blur={blurHandler} error={errors.messege || ''} />
            </div>
            <div className="checkboxHolder">
                <input type="checkbox" name="" id="agree" onChange={agreeHandler} checked={values.agree} />
                <label htmlFor="agree">{content.labelAgree}</label>
                {errors.agree && errors.agree != '' ? (<p className="input-error">{errors.agree}</p>) : null}
            </div>
            <div className="stylishCornerTreeColor btnHolder">
                <button type="submit" className="btn arrowLink" disabled={disabled}><span className="hoverEfectBtn"></span><span className="text">{content.labelSubmitButton}</span></button>
            </div>
        </form>
    )
}
export default ApplyNow;