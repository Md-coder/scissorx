import React from "react";
import { InputSection } from "../../components/uiComponent/UIComponets";
import { Box, Button, Card, Grid, Link, MenuItem, TextField, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { RootStoreContext } from "../../global/storeContext";
import { v4 as uuidv4 } from "uuid";
import QRCode from "qrcode.react";

export interface IFieldObject {
  url: string;
  domain: string;
  alias: string;
}

export const InputFieldSection: React.FC = () => {
  const { userStore, uiStore, scissorStore } = React.useContext(RootStoreContext);
  const [fieldObject, setFieldObject] = React.useState<IFieldObject>({
    url: "",
    domain: "",
    alias: "",
  });
  const [trimmedUrl, setTrimmedUrl] = React.useState("");

  const domains = [
    { label: "/scissor", value: "/scissor" },
    { label: "/rocket", value: "/rocket" },
  ];

  const handleSubmitTrim = async () => {
    if (!userStore.authStatus) {
      uiStore.error("Please login to use");
      return;
    }
    try {
      uiStore.showLoading();
      const uid = uuidv4();
      setTrimmedUrl(`${fieldObject.domain}/${fieldObject.alias}?id=${uid}`);
      await scissorStore.trim({ id: uid, ...fieldObject }).then(() => {
        uiStore.success("Url trimmed");
      });
    } catch (err) {
      uiStore.error("Could not trim url at this time, please try again later");
    } finally {
      uiStore.hideLoading();
    }
  };

  const handleChangeField =
    (text: keyof IFieldObject) => (e: React.ChangeEvent<{ value: string }>) => {
      setFieldObject((prev) => ({ ...prev, [text]: e.target.value }));
    };

  return (
    <>
      <InputSection>
        <Card style={{ width: "500px", padding: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                label="Paste URL here..."
                color="primary"
                onChange={handleChangeField("url")}
                required
                fullWidth
              />
            </Grid>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  id="outlined-select"
                  select
                  label="Choose your domain"
                  defaultValue=""
                  fullWidth
                  required
                  onChange={handleChangeField("domain")}
                >
                  {domains.map((domain) => (
                    <MenuItem key={domain.value} value={domain.value}>
                      {domain.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="outlined"
                  label="Type alias here"
                  defaultValue=""
                  fullWidth
                  onChange={handleChangeField("alias")}
                  required
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                endIcon={<AutoFixHighIcon />}
                onClick={handleSubmitTrim}
                fullWidth
              >
                Trim URL
              </Button>
            </Grid>
            {trimmedUrl && (
              <>
                <Grid item xs={12}>
                  <Box>
                    <Link href={trimmedUrl} underline="hover">
                      {trimmedUrl}
                    </Link>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Box>
                    <QRCode value={fieldObject.url} />
                  </Box>
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <Typography color="#1976d2" textAlign="start" variant="subtitle2" fontWeight={300}>
                By clicking TrimURL, I agree to the <b>Terms of Service, Privacy Policy </b> and Use
                of Cookies.
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </InputSection>
    </>
  );
};
