import React, { Suspense }  from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <Suspense fallback={<h3></h3>}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Suspense>
    </Provider>
)