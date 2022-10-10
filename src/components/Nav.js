import React from "react";
import {
  NovuProvider,
  PopoverNotificationCenter,
  NotificationBell,
} from "@novu/notification-center";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const onNotificationClick = (notification) =>
    navigate(notification.cta.data.url);
  return (
    <nav className="navbar">
      <h3>Team's todo list</h3>
      <div>
        <NovuProvider
          subscriberId="<63438c1627d50dea0b79cc07>"
          applicationIdentifier="<OrFbr_6uVZBg>"
        >
          <PopoverNotificationCenter
            onNotificationClick={onNotificationClick}
            colorScheme="light"
          >
            {({ unseenCount }) => (
              <NotificationBell unseenCount={unseenCount} />
            )}
          </PopoverNotificationCenter>
        </NovuProvider>
      </div>
    </nav>
  );
};

export default Nav;
