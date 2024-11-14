import React, { useEffect, useState } from "react";
import { Link, Outlet, replace, useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import bottom_item from "../bottom_item.json";
import NavigationBar from "./NavigationBar";

const Layout = ({ signOut, user }) => {
  const [isClicked, setIsClicked] = useState(null);
  const currentUrl = window.location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const matchingItem = bottom_item.find((item) => item.link === currentUrl);
    if (matchingItem) {
      setIsClicked(matchingItem.id);
    }
  }, [currentUrl]);

  return (
    <div className="bg-white rounded-md md:w-[60%] w-full mx-auto">
      <NavigationBar signOut={signOut} user={user} />
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
