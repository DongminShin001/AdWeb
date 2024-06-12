import React, { useState, useRef } from "react";
import styled from "styled-components";
import Header from "./components/Header/Headers";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #1c1c1c;
`;

const news = [
  {
    id: "1",
    title: "뉴욕 연준 소비자 기대 설문조사",
    date: "6월 10, 2024",
    source: "financialjuice.com",
    tags: ["US Bonds", "US Indexes", "USD"],
    content: "Detailed information about the 뉴욕 연준 소비자 기대 설문조사...",
    image: "https://via.placeholder.com/600x400",
    link: "https://financialjuice.com/article/1",
  },
  {
    id: "2",
    title: "CMS Energy 이사, 회사 주식 14만 3천 달러 매각",
    date: "June 10, 2024",
    source: "investing.com",
    tags: ["Company News", "Stocks"],
    content: "Detailed information about CMS Energy 이사 주식 매각...",
    image: "https://via.placeholder.com/600x400",
    link: "https://investing.com/article/2",
  },
  {
    id: "3",
    title: "아메리칸스코퍼레이션, 자회사 아메리칸가본사 특별배당 배당기일 조정",
    date: "June 10, 2024",
    source: "investing.com",
    tags: ["Dividends", "Corporate Actions"],
    content: "Detailed information about 아메리칸스코퍼레이션 배당기일 조정...",
    image: "https://via.placeholder.com/600x400",
    link: "https://investing.com/article/3",
  },
  // ... additional news items
];

const additionalNews = Array.from({ length: 70 }, (_, i) => ({
  id: `${i + 4}`,
  title: `News Title ${i + 4}`,
  date: `Date ${i + 4}`,
  source: `Source ${i + 4}`,
  tags: ["Tag1", "Tag2"],
  content: `Detailed information about News Title ${i + 4}`,
  image: "https://via.placeholder.com/600x400",
}));

const allNews = [...news, ...additionalNews];

function App() {
  const [expandedNewsId, setExpandedNewsId] = useState(null);
  const newsRefs = useRef([]);
  const sidebarRefs = useRef([]);
  const mainContentRef = useRef();
  const sidebarRef = useRef();

  const handleExpand = (id) => {
    setExpandedNewsId(expandedNewsId === id ? null : id);
    const mainContentIndex = allNews.findIndex((item) => item.id === id);
    const sidebarIndex = allNews.findIndex((item) => item.id === id);

    if (mainContentIndex !== -1) {
      if (newsRefs.current[mainContentIndex]) {
        newsRefs.current[mainContentIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    if (sidebarIndex !== -1) {
      if (sidebarRefs.current[sidebarIndex]) {
        sidebarRefs.current[sidebarIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <AppContainer>
      <Header />
      <ContentContainer>
        <Sidebar
          news={allNews}
          onExpand={handleExpand}
          expandedNewsId={expandedNewsId}
          sidebarRef={sidebarRef}
          sidebarRefs={sidebarRefs}
        />
        <MainContent
          news={allNews}
          expandedNewsId={expandedNewsId}
          onExpand={handleExpand}
          newsRefs={newsRefs}
          mainContentRef={mainContentRef}
        />
      </ContentContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
