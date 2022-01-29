import React from "react";
import "./Login.css";
import LoginImage from "./loginpicture2.jpeg";
import { useHistory } from "react-router-dom";
import CustomHooks from "../SignUp/CustomHooks";
import ErrorIcon from "@material-ui/icons/Error";
import validate from "../SignUp/validate";
import "../SignUp/SignUp.css";

import {
  Avatar,
  Button,
  //   CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import apple from "./apple-logo.png";

function Login() {
  const {
    email,
    password,
    errors,
    emailHandler,
    passwordHandler,
    loginSubmitHandler,
    loginError,
  } = CustomHooks({ email: "" }, { password: "" }, validate);
  const history = useHistory();

  const signupHandler = () => {
    history.push(`/SignUp`);
  };
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh" }}
        className="box-container"
      >
        {/* <CssBaseline /> */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          style={{
            backgroundImage: `url(${LoginImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              className="apple-logo"
              alt="Apple"
              src={apple}
              sx={{ m: 1, width: 50, height: 50 }}
            />
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{}</Avatar> */}
            <Typography component="h1" variant="h4" className="apple-heading">
              APPLE LIBRARY
            </Typography>
            <Typography className="description">
              Stay Connected With Books
            </Typography>

            <Typography component="h1" variant="h5">
              SIGN IN
            </Typography>

            <Box
              component="form"
              noValidate
              onSubmit={loginSubmitHandler}
              sx={{ mt: 3 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={emailHandler}
                autoComplete="email"
                autoFocus
                error={!!errors?.email}
              />
              {errors.email && (
                <span className="error-msg1">{errors.email}</span>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={passwordHandler}
                id="password"
                autoComplete="current-password"
                error={!!errors?.password}
              />
              {errors.password && (
                <span className="error-msg1">{errors.password}</span>
              )}

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ mt: 5, mb: 2 }}
              />

              <Button
                type="submit"
                fullWidth
                className="primary"
                variant="contained"
                sx={{ mt: 5, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" onClick={signupHandler}>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
                {loginError && (
                  <p className="loginError">
                    <span class="alignIcon">
                      <ErrorIcon sx={{ mt: 3 }}></ErrorIcon>
                    </span>
                    {loginError}
                  </p>
                )}
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
