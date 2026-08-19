import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LeftPanel from "./leftPanel.jsx";
import RightPanel from "./rightPanel.jsx";
import "../css/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="contain">
      <LeftPanel />
      <RightPanel />
      {/* <MainPage /> */}
    </div>
  </StrictMode>,
);
// npm install nodemailer