import { useEffect, useRef, useState } from "react";

// const FORM_KEYS = {
//   username: 'username',
//   password: 'password',
//   age: 'age'
// }

const formInitialState = {
  username: "",
  password: "",
  age: "",
  gender: "f",
  swimming: false,
  gaming: false,
  singing: false,
};

export default function ControlledForm({
  formRef
}) {
  // const [formState, setFormState] = useState({
  //   [FORM_KEYS.username]: "",
  //   [FORM_KEYS.password]: "",
  //   [FORM_KEYS.age]: "",
  // });

  const [formValues, setFormValues] = useState(formInitialState)
  const isMountedRef = useRef(false);
  const usernameInputRef = useRef()
  const [errors,setErrors] = useState({});

  // s useRef pravim event koito se izpulnqva samo na update
  // i ne se poqvqva purviq put kato se pokaje komponenta
  useEffect(()=>{
    if(!isMountedRef.current){
      isMountedRef.current = true;
      return;
    }
    console.log('form is updated');
  },[formValues])

  useEffect(()=>{
    usernameInputRef.current.focus();
  },[])

  const changeHandler = (e)=>{
    let value = '';
    switch (e.target.type) {
      case "number":
        value = Number(e.target.value);
        break;
      case "checkbox":
        value = e.target.checked;
        break;
      default:
        value = e.target.value;
        break;
    }

    setFormValues((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  }

  const resetClickHandler = () => {
   setFormValues(formInitialState);
  };

  const submitHandler = (e)=>{
    e.preventDefault();

    console.log(formValues);

    resetClickHandler();
  }

  const usernameBlurHandler = () => {
    console.log("blurred");
  };

  const ageValidator = (e)=>{
    if(formValues.age<0){
      setErrors(state=> ({
        ...state,
        age:'age not in format'
      }))
    }
    else{
      if (errors.age) {
        setErrors((state) => ({
          ...state,
          age: "",
        }));
      }
    }
  }

  return (
    <form onSubmit={submitHandler} ref={formRef}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formValues.username}
          onChange={changeHandler}
          onBlur={usernameBlurHandler}
          ref={usernameInputRef}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={formValues.password}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formValues.age}
          onChange={changeHandler}
          onBlur={ageValidator}
        />
        {errors.age && (<p>{errors.age}</p>)}
      </div>
      <div>
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          onChange={changeHandler}
          value={formValues.gender}
        >
          <option value="m">M</option>
          <option value="f">F</option>
        </select>
      </div>
      <div>
        <label htmlFor="swimming">Swimming</label>
        <input
          type="checkbox"
          name="swimming"
          id="swimming"
          checked={formValues.swimming}
          onClick={changeHandler}
        />
        <label htmlFor="gaming">Gaming</label>
        <input
          type="checkbox"
          name="gaming"
          id="gaming"
          checked={formValues.gaming}
          onClick={changeHandler}
        />
        <label htmlFor="singing">Singing</label>
        <input
          type="checkbox"
          name="singing"
          id="singing"
          checked={formValues.singing}
          onClick={changeHandler}
        />
      </div>
      <div>
        <input type="submit" name="username" value="Register" />
        <button type="button" onClick={resetClickHandler}>
          Reset
        </button>
      </div>
    </form>
  );
}