import { Container, Typography } from "@mui/material";
import "./Introduction.css";
import Fade from "react-reveal";
import * as React from "react";

const Introduction = (): React.ReactElement => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  // React.useEffect(() => console.log(scrollPosition), [scrollPosition]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Fade when={scrollPosition < 5} duration={1}>
      <Container maxWidth="xl">
        <code style={{ color: "white" }}>You've reached</code>
        <Typography variant="h1">Aslam Althaf.</Typography>
        <Typography variant="h2" style={{ color: "white" }}>
          Frontend developer.
        </Typography>
      </Container>
    </Fade>
  );
};

export default Introduction;
