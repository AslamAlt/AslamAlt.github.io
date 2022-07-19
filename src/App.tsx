import * as React from "react";
import { NavBar } from "./NavBar";
import { About } from "./About";
import { Projects } from "./Projects";
import { Container } from "@mui/material";
import Introduction from "./Introduction";
import "./App.css";

const App = (): React.ReactElement => (
  <>
    <NavBar />
    {/* <Introduction /> */}
    <Container maxWidth="md">
      <div style={{ padding: "1rem", marginTop: "10%" }}>
        <About />
        <Projects />
      </div>
    </Container>
  </>
);

export default App;
