import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { SWRConfig } from "swr"

const fetcher = (...args) => fetch(...args).then((res) => res.json())

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <SWRConfig value={{ refreshInterval: 600000, fetcher }}>
      <App />
    </SWRConfig>
  </BrowserRouter>
)
