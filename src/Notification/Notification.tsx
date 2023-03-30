import { useEffect, useState } from "react";
import styled from "styled-components";
import { BackgroundColor, TextColor } from "../common/colors";

const NotificationWrapper = styled.div`
  width: 300px;
  height: 225px;
  position: absolute;
  padding: 2rem;
  top: 275px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${BackgroundColor};
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;
`;

const DarkenBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const TryItOutButton = styled.button`
  background-color: ${TextColor};
  font-family: inherit;
  border-radius: 50px;
  border: none;
  color: black;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  animation: lilshake 5s ease-in-out infinite;

  &:hover {
    opacity: 0.9;
  }

  @keyframes lilshake {
    45% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.015) rotate(1.5deg);
    }
    55% {
      transform: scale(0.995) rotate(-1.5deg);
    }
    60% {
      transform: scale(1);
    }
  }
`;

const Notification = () => {
  const [showNotification, setShowNotification] = useState(false);

  var userAgent = window.navigator.userAgent;

  useEffect(() => {
    if (
      userAgent.match(/iPad/i) ||
      userAgent.match(/iPhone/i) ||
      userAgent.match(/Mac/i)
    ) {
      setShowNotification(true);
    }
  }, [userAgent]);

  useEffect(() => {
    if (showNotification) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showNotification]);

  if (!showNotification) return null;

  return (
    <DarkenBack>
      <NotificationWrapper>
        <h3 style={{ margin: 0 }}>Are you on iOS?</h3>
        <p style={{ color: "white" }}>
          I made a quick iPhone shortcut to check the library busyness right
          from your home screen!
        </p>
        <p style={{ color: "white", margin: 0 }}>
          Let me know what you think! ❤️
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "2rem",
            flexDirection: "row",
          }}>
          <button
            onClick={() => setShowNotification(false)}
            style={{
              backgroundColor: "#ffffff22",
              borderRadius: "50px",
              cursor: "pointer",
              padding: "0.5rem 1rem 0.5rem 1rem",
              border: "none",
              fontSize: "0.75rem",
              fontFamily: "inherit",
              color: "white",
            }}>
            dismiss
          </button>
          <a href="https://www.icloud.com/shortcuts/bcd86826c4524583a29718f7da990f1a">
            <TryItOutButton>Try it out! </TryItOutButton>
          </a>
        </div>
      </NotificationWrapper>
    </DarkenBack>
  );
};

export default Notification;
