import "./App.css";
import { Amplify, API, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
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
  return (
    <div className="App bg-gray-800 min-h-screen pt-4 w-full">
      <BrowserRouter router>
        <Routes>
          <Route element={<Layout signOut={signOut} />}>
            <Route path="/flight" element={<Main user={user} />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/boarding" element={<Boarding user={user} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
