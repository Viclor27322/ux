// src/analytics.js
import ReactGA from "react-ga4";

export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

export const logPageView = () => {
  ReactGA.send("pageview");
};