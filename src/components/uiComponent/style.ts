import styled from "@emotion/styled";

export const HeroContainer = styled("section")({
  height: "55vh",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
});

export const InputSectionContainer = styled("section")({
  backgroundImage: `url(${"img/inputSectionBackground.png"})`,
  height: "80vh",
  backgroundSize: "cover",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
});

export const HeroContainerOverlay = styled("div")({
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  position: "relative",
  zIndex: 1,
});

export const HeroContainerContent = styled("div")({
  paddingTop: "calc(55vh/3)",
  color: "black",
  display: "grid",
  placeContent: "center",
});

export const HomeSectionContainer = styled("section")({
  padding: "48px 0px",
  minHeight: "240px",
  display: "grid",
  placeContent: "center",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
});
export const PropertySectionContainer = styled("section")({
  // padding: '48px 0px',
  minHeight: "140px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  flexDirection: "column",
  textAlign: "left",
});
