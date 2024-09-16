import { ThemeProvider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, type ReactElement } from "react";

type RouteProps = {
  page: () => ReactElement;
};

export const Route = ({ page: Page }: RouteProps): ReactElement => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <ThemeProvider theme={{}}>
      <Page />
    </ThemeProvider>
  );
};
