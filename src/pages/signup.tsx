import React, { ChangeEvent, useContext } from "react";
import { HomeSection } from "../components/uiComponent/UIComponets";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { paths } from "../routes";
import { Footer } from "../layouts/main/footer";
import { RootStoreContext } from "../global/storeContext";
import { observer } from "mobx-react";

interface ISignUp {
  userName: string;
  email: string;
  password: string;
  retypePassword: string;
}

export const SignupPage: React.FC = observer(() => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [userCredentials, setUserCredentials] = React.useState<ISignUp>({} as ISignUp);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const { userStore, uiStore } = useContext(RootStoreContext);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSignup = async () => {
    uiStore.showLoading();
    try {
      if (
        !userCredentials.email ||
        !userCredentials.password ||
        !userCredentials.retypePassword ||
        !userCredentials.userName
      ) {
        console.log("Please complete all missing fields");
        return;
      }
      if (userCredentials.password !== userCredentials.retypePassword) {
        console.log("mismatch password");
        return;
      }
      if (!!userCredentials) {
        userStore
          .createUser(userCredentials.userName, userCredentials.email, userCredentials.password)
          .then((_userCredentials) => {
            uiStore.success("Sign up successful");
            uiStore.hideLoading();
            setTimeout(() => {
              uiStore.goTo(paths.login);
            }, 2000);
          })
          .catch((err) => {
            if (err.code === "auth/email-already-in-use") {
              uiStore.error("This email is already in use");
            } else {
              uiStore.error("Something went wrong.Please try again");
            }
          });
      }
    } finally {
      uiStore.hideLoading();
    }
  };

  const handleCredentials =
    (val: keyof ISignUp) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserCredentials({ ...userCredentials, [val]: e.target.value });
    };

  return (
    <>
      <Container>
        <HomeSection>
          <Box width="600px">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography textAlign="center">sign up with:</Typography>
              </Grid>
              <Grid item xs={12}>
                <Box display="flex" justifyContent="center" m={1}>
                  <Stack direction="row" spacing={2}>
                    <Button variant="contained" startIcon={<GoogleIcon />}>
                      Google
                    </Button>
                    <Button variant="contained" endIcon={<AppleIcon />}>
                      Apple
                    </Button>
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider>Or</Divider>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    id="fullWidth"
                    onChange={handleCredentials("userName")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    id="fullWidth"
                    onChange={handleCredentials("email")}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      onChange={handleCredentials("password")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">Retype Password</InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      fullWidth
                      type={showPassword ? "text" : "password"}
                      onChange={handleCredentials("retypePassword")}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item container xs={12} justifyContent="flex-start">
                <Grid item>
                  <Typography variant="subtitle1" style={{ opacity: "0.5" }}>
                    6 or more characters, one number, one uppercase & one lower case.
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={handleSignup}>
                  Sign up with email
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  Already have an account? <Link href={paths.login}>Login in!</Link>{" "}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography align="center" variant="body2">
                  <span style={{ opacity: "0.5" }}>
                    {" "}
                    By signing in with an account, you agree to
                  </span>{" "}
                  <br /> Sciccor's Terms of Service, Privacy Policy and Acceptable Use Policy.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </HomeSection>
        <Footer />
      </Container>
    </>
  );
});
