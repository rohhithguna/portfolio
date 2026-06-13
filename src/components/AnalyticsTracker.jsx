import { useEffect } from "react";
import ReactGA from "react-ga4";

export default function AnalyticsTracker() {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return null;
}
