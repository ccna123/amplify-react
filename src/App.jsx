import "./App.css";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Main from "./Pages/Main";
import Boarding from "./Pages/BoardingPass";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
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
  return (
    <div className="App bg-gray-800 min-h-screen pt-4 w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/flight" replace />} />
          <Route element={<Layout signOut={signOut} user={user} />}>
            <Route path="/flight" element={<Main user={user} />} />
            <Route path="/boarding" element={<Boarding user={user} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
