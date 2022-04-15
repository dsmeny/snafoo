import { useEffect, useState } from "react";
import Header from "./components/layout/Header";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: ${(props) => (props.isMatch ? "67%" : "100%")};
  flex-direction: column;
  margin: ${(props) => (props.isMatch ? "0 auto" : "initial")};
`;

const App = () => {
  const [isMatch, setIsMatch] = useState(false);

  const handleScreenChanges = (mql) => {
    setIsMatch(mql.matches);
  };

  useEffect(() => {
    const media = (size) => {
      return window.matchMedia(`screen and (max-width: ${size}px)`);
    };

    const MOBILE = media(720);

    if (!isMatch) {
      handleScreenChanges(MOBILE);
    }
    MOBILE.addEventListener("change", handleScreenChanges);
  });

  return (
    <Container isMatch={isMatch}>
      <Header isMobile={isMatch} />
    </Container>
  );
};

export default App;
