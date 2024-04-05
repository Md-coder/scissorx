import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RootStoreContext } from "../global/storeContext";
import { paths } from "../routes";

export const RedirectPage: React.FC = observer(() => {
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search);
  const { scissorStore } = React.useContext(RootStoreContext);

  const redirectTo = async (id: string) => {
    const url = await scissorStore.getUrlById(id);
    if (!url) {
      window.location.href = paths.home;
      return;
    }
    window.location.href = url;
  };

  useEffect(() => {
    const id = searchParam.get("id");
    if (!!id) {
      redirectTo(id);
    }
  }, []);
  return <></>;
});
