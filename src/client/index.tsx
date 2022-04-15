import React, {StrictMode} from "react";
import { hydrateRoot, createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App/App";

hydrateRoot(
    document.getElementById("root"),
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)
