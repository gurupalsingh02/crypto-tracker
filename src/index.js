import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";

ReactDOM.render(
  <React.StrictMode>
    <CryptoContext>
      <App />
    </CryptoContext>
  </React.StrictMode>,
  document.getElementById("root")
);



// "@material-ui/core": "^4.12.3",
// "@material-ui/lab": "^4.0.0-alpha.60",
// "@testing-library/jest-dom": "^5.11.4",
// "@testing-library/react": "^11.1.0",
// "@testing-library/user-event": "^12.1.10",
// "axios": "^0.21.1",
// "chart.js": "^3.5.1",
// "react": "^18.0.2",
// "react-alice-carousel": "^2.5.1",
// "react-chartjs-2": "^3.0.4",
// "react-dom": "^17.0.2",
// "react-html-parser": "^2.0.2",
// "react-router-dom": "^5.2.0",
// "react-scripts": "4.0.3",
// "web-vitals": "^1.0.1"

