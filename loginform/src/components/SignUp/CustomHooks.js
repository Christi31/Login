import React, { useState } from "react";
import validate from "./validate";
import axios from "axios";
import { useHistory } from "react-router-dom";
function CustomHooks() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [signUpSuccess, setSignUpSuccess] = useState(undefined);
  const [loginError, setLoginError] = useState(undefined);
  const history = useHistory();
  const nameHandler = (event) => {
    event.persist();
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    console.log(event.target.value);
    event.persist();
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    event.persist();
    setPassword(event.target.value);
  };
  const loginSubmitHandler = (event) => {
    event.preventDefault();
    console.log("login event are ", event);
    const validationErrors = validate("XXXX", email, password);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      const loginUserDetails = {
        email: email,
        password: password,
      };
      axios
        .post(
          "http://localhost/reactProject/login.php",
          JSON.stringify(loginUserDetails),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (
            response.status === 200 &&
            response.data === "Logged in Successfull"
          ) {
            history.push(`/Home`);
          } else {
            setLoginError(response.data);
          }
        })
        .catch((response) => {
          console.warn(response);
        });
      setEmail("");
      setName("");
      setPassword("");
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const validationErrors = validate(name, email, password);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      console.log("Authenticated", name, email, password);

      const userDetails = {
        name: name,
        email: email,
        password: password,
      };
      console.log("Authenticated", userDetails);
      axios
        .post(
          "http://localhost/reactProject/insert.php",
          JSON.stringify(userDetails),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            setSignUpSuccess(response.data);
            setTimeout(() => {
              setSignUpSuccess(undefined);
            }, 10000);
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
      //To clear text box values
      setName("");
      setEmail("");
      setPassword("");
    } else {
      console.log("errors try again", validationErrors);
    }
  };

  return {
    nameHandler,
    emailHandler,
    passwordHandler,
    submitHandler,
    loginSubmitHandler,
    name,
    email,
    password,
    errors,
    loginError,
    signUpSuccess,
  };
}
export default CustomHooks;
