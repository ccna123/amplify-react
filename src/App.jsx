import "./App.css";
import { Amplify, API, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Main from "./Pages/Main";
import Trips from "./Pages/Trips";
import Boarding from "./Pages/BoardingPass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

Amplify.configure({
  ...awsconfig,
  API: {
    endpoints: [
      {
        endpoint: process.env.REACT_APP_BACKEND_URL,
      },
    ],
  },
});

function App({ signOut, user }) {
  const booking = async (formData) => {
    try {
      const response = await API.post("myapi123", "/items", {
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App bg-gray-800 min-h-screen pt-4 w-full">
      <BrowserRouter router>
        <Routes>
          <Route element={<Layout signOut={signOut} />}>
            <Route path="/" element={<Main booking={booking} />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/boarding" element={<Boarding />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
