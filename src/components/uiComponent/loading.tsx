import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

export const Loader: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <>
      {!!loading && (
        <div
          style={{
            display: "flex",
            color: "green[500]",
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: -12,
            marginLeft: -12,
            zIndex: 99999,
          }}
        >
          <CircularProgress size={24} />
        </div>
      )}
    </>
  );
};
