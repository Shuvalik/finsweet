import { useId } from "react";
function InputField({name, change, label, value, error, multy, blur}){
  const inputId = useId();

  function changeHandler(event){
    change(event.target)
  }
  function blurHandler(event) {
    blur(event.target)
  }

  return (
      <div className="fildSection">
        {multy
          ? <textarea type="text" placeholder=" " name={name} value={value} id={inputId} onChange={changeHandler} onBlur={blurHandler}  />
          : <input type="text" placeholder=" " name={name} value={value} id={inputId} onChange={changeHandler} onBlur={blurHandler}  />
        }
        <label name={name} htmlFor={inputId}>{ label }</label>
        {error != '' ? (<p className="input-error">{error}</p>) : null}
      </div>
  )
}

export default InputField