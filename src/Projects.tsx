import * as mui from "@mui/material";
import { Card } from "./Card";

export const Projects = (): React.ReactElement => (
  <Card style={{ backgroundColor: "#e3b5f7" }}>
    <mui.Typography variant="h3">My Projects</mui.Typography>
    <mui.Card style={{ maxWidth: "300px" }}>
      <mui.CardHeader title="Ristorante Con Fusion website" align="center" />
      <mui.CardMedia
        component="img"
        image="/static/projects/logo.png"
        alt="logo"
      />

      <mui.CardContent>
        <mui.Typography variant="body2" color="text.secondary">
          A fun Redux powered website about a fictional restaurant.
        </mui.Typography>
      </mui.CardContent>
      <mui.Button
        onClick={() => {
          window.open("https://aslamalt.github.io/react/");
        }}
        style={{ width: "100%" }}
      >
        GO TO PROJECT
      </mui.Button>
    </mui.Card>
  </Card>
);
