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

const MainContent = ({ news, expandedNewsId, onExpand, refs }) => {
  useEffect(() => {
    if (expandedNewsId) {
      const ref = refs.current.main[expandedNewsId];
      if (ref) {
        setTimeout(() => {
          ref.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  }, [expandedNewsId, refs]);

  return (
    <MainContentContainer>
      <NewsSection>
        <SectionTitle>Latest News</SectionTitle>
        {news.map((item) => (
          <div ref={(el) => (refs.current.main[item.id] = el)} key={item.id}>
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
