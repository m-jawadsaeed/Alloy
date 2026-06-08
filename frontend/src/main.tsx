import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { registerSocketEvents } from "./sockets/socket.events";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./api/queryClient";

registerSocketEvents();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);
