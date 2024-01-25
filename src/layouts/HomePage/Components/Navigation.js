import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PrimaryButton from "./PrimaryButton";
import logo from "assets/images/logo-ct.png";
import { Bounce, Fade } from "react-reveal";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

function Navigation() {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Fade top>
      <NavigationStyled style={{ display: "flex" }}>
        <div className="logo" style={{ display: "flex" }}>
          <img src={logo} width="40px" height="40px" alt="" />
          {!isMobile && (
            <h1 style={{ marginLeft: "1rem", color: "white" }}>
              Assign Project
            </h1>
          )}
        </div>
        <Bounce right>
          <AnimatedButton name={"Log in"} route={"/login"} />
        </Bounce>
      </NavigationStyled>
    </Fade>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  min-height: 10vh;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    width: 40%;
  }
`;
export default Navigation;
