import { Typography } from "@mui/material";
import { Card } from "./Card";

const ABOUT_TEXT = "Hey there! Awfully nice of you to visit my page.";
export const About = (): React.ReactElement => (
  <Card>
    <Typography variant="h3">About Me</Typography>
    <Typography variant="body1">{ABOUT_TEXT}</Typography>
  </Card>
);
