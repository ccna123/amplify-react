import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";
import bottom_item from "../bottom_item.json";
import NavigationBar from "./NavigationBar";
import { API } from "aws-amplify";
import notify from "../helper/notify";
import { ToastContainer } from "react-toastify";

const Layout = ({ signOut, user }) => {
  const [isClicked, setIsClicked] = useState(null);
  const currentUrl = window.location.pathname;

  useEffect(() => {
    const matchingItem = bottom_item.find((item) => item.link === currentUrl);
    if (matchingItem) {
      setIsClicked(matchingItem.id);
    }
  }, [currentUrl]);

  const handleCancel = async () => {
    const response = await API.del(
      "myapi123",
      `/booking?userId=${user.username}`
    );
    if (response.statusCode === 200) {
      notify(response.message, "delete");
      localStorage.removeItem("trip");
      window.location.reload();
    }
  };

  return (
    <div className="bg-white rounded-md md:w-[60%] w-full mx-auto">
      <ToastContainer />
      <NavigationBar signOut={signOut} handleCancel={handleCancel} />
      <Outlet />
      <div className="flex justify-around bg-bottom-nav rounded-md p-2 hover:cursor-pointer">
        {bottom_item.map((item, index) => {
          return (
            <Link to={item.link} key={index}>
              <BottomNav
                icon={item.icon}
                name={item.name}
                key={index}
                isClicked={isClicked === item.id}
                onClick={() => {
                  setIsClicked(item.id);
                }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Layout;
