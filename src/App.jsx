import logo from "./logo.svg";
import "./App.css";
import { Amplify, API, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useState } from "react";
import NavigationBar from "./components/NavigationBar";
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
  const [data, setData] = useState([]);

  const getAll = async () => {
    try {
      const response = await API.get("myapi123", "/items");
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const getSingle = async () => {
    try {
      const response = await API.get("myapi123", "/items", {
        queryStringParameters: {
          id: 1,
        },
      });
      setData(Array.isArray(response) ? response : [response]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App bg-gray-800 min-h-screen pt-4 w-full">
      <BrowserRouter router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/flight" element={<Main />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="/boarding" element={<Boarding />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <NavigationBar />
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
      <button onClick={getAll}>GET ALL</button>
      <button onClick={getSingle}>GET SINGLE</button> */}
    </div>
  );
}

export default withAuthenticator(App);
