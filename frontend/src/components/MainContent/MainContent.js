import React, { useEffect } from "react";
import styled from "styled-components";
import NewsItem from "../NewItems/NewsItems";

const MainContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  background-color: #1c1c1c;
  overflow-y: auto; /* Ensure MainContent has its own scroll */
  max-height: 100vh; /* Optional: Ensure it doesn't overflow the viewport */
`;

const NewsSection = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  border-bottom: 1px solid #444;
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: #ff5e62;
`;

const MainContent = ({
  news,
  expandedNewsId,
  onExpand,
  newsRefs,
  mainContentRef,
}) => {
  useEffect(() => {
    if (expandedNewsId && mainContentRef.current) {
      const index = news.findIndex((item) => item.id === expandedNewsId);
      if (index !== -1 && newsRefs.current[index]) {
        newsRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [expandedNewsId, news, newsRefs, mainContentRef]);

  return (
    <MainContentContainer ref={mainContentRef}>
      <NewsSection>
        <SectionTitle>Latest News</SectionTitle>
        {news.map((item, index) => (
          <div ref={(el) => (newsRefs.current[index] = el)} key={item.id}>
            <NewsItem
              {...item}
              isExpanded={item.id === expandedNewsId}
              onExpand={onExpand}
            />
          </div>
        ))}
      </NewsSection>
    </MainContentContainer>
  );
};

export default MainContent;
