import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { IRoute, pageRoutes } from "./routes";
import { Loader } from "./components/uiComponent/loading";
import { RootStoreContext } from "./global/storeContext";
import { Alert, Snackbar } from "@mui/material";
import { observer } from "mobx-react";

export const App = observer(() => {
  const { uiStore } = React.useContext(RootStoreContext);

  return (
    <div className="App">
      <Loader loading={uiStore.loading} />
      <Router>
        <Routes>
          {pageRoutes.map((route: IRoute, key) => {
            return <Route path={route.path} key={key} element={<route.component />}></Route>;
          })}
        </Routes>
      </Router>
      <Snackbar
        open={uiStore.snackBarOpen}
        autoHideDuration={3000}
        onClose={uiStore.closeSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={uiStore.closeSnackBar}
          severity={uiStore.snackBarProperties.severity}
          sx={{ width: "100%" }}
        >
          {uiStore.snackBarProperties.msg}
        </Alert>
      </Snackbar>
    </div>
  );
});
