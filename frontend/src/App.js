import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Header from "./components/Header/Headers";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import { allNews } from "./components/newData";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #1c1c1c;
  margin-top: 80px;
  position: fixed;
  width: 100%;
`;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 30;
`;

function App() {
  const [expandedNewsId, setExpandedNewsId] = useState(null);
  const refs = useRef({ sidebar: {}, main: {} });

  const scrollToView = (id) => {
    setTimeout(() => {
      if (refs.current.sidebar[id]) {
        refs.current.sidebar[id].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      if (refs.current.main[id]) {
        refs.current.main[id].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 1000); // Adding a slight delay to ensure scroll execution
  };

  const handleExpand = (id) => {
    setExpandedNewsId(expandedNewsId === id ? null : id);
  };

  useEffect(() => {
    if (expandedNewsId) {
      scrollToView(expandedNewsId);
    }
  }, [expandedNewsId]);

  return (
    <AppContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ContentContainer>
        <Sidebar
          news={allNews}
          onExpand={handleExpand}
          expandedNewsId={expandedNewsId}
          refs={refs}
        />
        <MainContent
          news={allNews}
          expandedNewsId={expandedNewsId}
          onExpand={handleExpand}
          refs={refs}
        />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
