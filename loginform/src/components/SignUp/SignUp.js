import React from "react";
import "./SignUp.css";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@material-ui/core";
import CustomHooks from "./CustomHooks";
import validate from "./validate";
import backgroundImage from "./signupBackground1.jpeg";
import { useHistory } from "react-router-dom";
function SignUp() {
  const {
    name,
    email,
    password,
    errors,
    nameHandler,
    emailHandler,
    passwordHandler,
    submitHandler,
    signUpSuccess,
  } = CustomHooks({ name: "" }, { email: "" }, { password: "" }, validate);
  const history = useHistory();
  const backtoSignin = () => {
    history.goBack();
  };
  return (
    <Box
      className="container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
        opacity: 0.9,
      }}
    >
      <div className="card">
        <Card className="card-border">
          {signUpSuccess && (
            <div class="toasterMessage">
              {signUpSuccess} click here to
              <a onClick={backtoSignin}> Sign in</a>
            </div>
          )}
          <CardContent>
            <h1 className="signup-heading">SIGNUP</h1>
          </CardContent>
          <form onSubmit={submitHandler}>
            <div className="form">
              <TextField
                label="Full Name"
                variant="outlined"
                style={{ width: "100%" }}
                onChange={nameHandler}
                value={name}
                required
                error={!!errors?.name}
              />
            </div>
            {errors.name && <p className="error-msg">{errors.name}</p>}
            <div className="form">
              <TextField
                label="Email"
                variant="outlined"
                style={{ width: "100%" }}
                onChange={emailHandler}
                value={email}
                required
                error={!!errors?.email}
              />
            </div>

            {errors.email && <p className="error-msg">{errors.email}</p>}

            <div className="form">
              <TextField
                label="Password"
                variant="outlined"
                type="password"
                style={{ width: "100%" }}
                onChange={passwordHandler}
                value={password}
                required
                error={!!errors?.password}
              />
            </div>
            {errors.password && <p className="error-msg">{errors.password}</p>}

            <CardActions style={{ justifyContent: "center" }}>
              <Button variant="contained" class="signup-button" type="submit">
                SIGNUP
              </Button>
            </CardActions>
          </form>
        </Card>
      </div>
    </Box>
  );
}

export default SignUp;
