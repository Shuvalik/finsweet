import { subScribe } from "../data/footer";
import { useState } from "react";
import { toast } from "react-toastify";
//import errorsMassege from "../helpers/errorsMassege";
import { urlString, chatId } from "../evn";
import InputField from "./inputFild.js";
function SubScribe() {
    const [values, setValues] = useState('')
    const [errors, setErrors] = useState('')
    const [disabled, setDisabled] = useState(false);

    function isValidEmail(email) {
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    function validate(values) {
        const errs = '';
        if (values === '') {
            errs = 'Enter your email'
        }
        // else if (!isValidEmail(values)) {
        //     errs = 'Enter your valid email'
        // }
        // return errs;
        
        console.log(values);
    }
    function blurHandler(target) {
        if (values !== '' && errors !== '') {
            setErrors('')
        }
    }
    function changeHandler(target) {
        setValues(target.value)
    }
    const msg = `
<b> Subscribed </b>
<b> email: </b> ${values}`;
    async function submitHandler (event) {
        event.preventDefault();
        setDisabled(true);
        const errorMasseges = validate(values);
        // setErrors(errorMasseges);
        // if (errorMasseges !== '') {
        //     setDisabled(false);
        //     return false
        // }
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
                setValues('')
             }
             //const textError = errorsMassege(response.status);
            //  throw new Error(textError);
        })
        .catch((err) => {
            toast.error(err, {position: "top-center", theme: "dark"})
        })
        .finally(setDisabled(false));
    }
    return (
            <div className="container stylishCornerTreeColor subScribe">
              <div className="twoColumns rightColorFullLine">
                <div>
                  <p className="sectionTitle">{subScribe.label}</p>
                  <h3 className="h3">{subScribe.title}</h3>
                </div>
                <form onSubmit={submitHandler} id="subScribe">
                    <InputField multy={false} placeholder='Paresh@Pixeto.com' name="email" value={values} change={changeHandler} blur={blurHandler} error={errors || ''} />
                    <div className="stylishCornerTreeColor">
                        <button type="submit" className="btn arrowLink" disabled={disabled}><span className="hoverEfectBtn"></span><span className="text">{'send'}</span></button>
                    </div>
                </form>
              </div>
            </div>
    )
}
export default SubScribe;