import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-cqerpj5n1ift5hzy.us.auth0.com"
    clientId="D75YQbqzrsguJgP98KEzVfS1rTvGNPrR"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Auth0Provider>
);
