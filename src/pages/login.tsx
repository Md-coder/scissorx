import React, { ChangeEvent } from "react";
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
import { UiStore } from "../store/uiStore";
import { RootStoreContext } from "../global/storeContext";
import { observer } from "mobx-react";

interface IUser {
  userName: string;
  password: string;
}

export const LoginPage: React.FC = observer(() => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { uiStore, userStore } = React.useContext(RootStoreContext);

  const [userCredentials, setUserCredentials] = React.useState<IUser>({} as IUser);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    uiStore.showLoading();
    try {
      await userStore.login(userCredentials.userName, userCredentials.password);
      uiStore.goTo(paths.home);
    } catch (err) {
      console.log(err);
      uiStore.error("Something went wrong,please try again");
    } finally {
      uiStore.hideLoading();
      console.log(userStore.authStatus);
    }
  };

  const handleCredentials =
    (val: keyof IUser) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setUserCredentials({ ...userCredentials, [val]: e.target.value });
    };

  return (
    <>
      <Container>
        <HomeSection>
          <Box width="600px">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography textAlign="center">Login with:</Typography>
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
                    label="Email address or username"
                    id="fullWidth"
                    onChange={handleCredentials("userName")}
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
              </Grid>
              <Grid item container xs={12} justifyContent="flex-end">
                <Grid item>
                  <Link>Forgot password?</Link>
                </Grid>
              </Grid>

              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                  Login
                </Button>
              </Grid>

              <Grid item xs={12}>
                <Typography>
                  Don’t have an account? <Link href={paths.signup}>Sign up!</Link>{" "}
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
