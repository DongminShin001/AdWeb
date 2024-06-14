import React, { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "../NewItems/NewsItems";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";

const MainContentContainer = styled.div`
  flex: 1;
  padding: 20px;
  color: white;
  background-color: #1c1c1c;
  overflow-y: auto;
  max-height: calc(100vh - 70px);
`;

const NewsSection = styled.section`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  padding-bottom: 10px;
  margin-bottom: 20px;
  color: #ff5e62;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PaginationButton = styled.button`
  background-color: #ff5e62;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;

  &:disabled {
    background-color: #444;
    cursor: not-allowed;
  }
`;

const MainContent = ({
  news,
  expandedNewsId,
  onExpand,
  refs,
  currentPage,
  setCurrentPage,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {}, 1000); // Simulate loading delay
    setLoading(false);
    return () => clearTimeout(timer);
  }, [news]);

  useEffect(() => {
    if (expandedNewsId) {
      const ref = refs.current.main[expandedNewsId];
      if (ref) {
        ref.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [expandedNewsId, refs]);

  const newsPerPage = 100;
  const totalPages = Math.ceil(news.length / newsPerPage);

  return (
    <MainContentContainer>
      <NewsSection>
        <SectionTitle>Latest News</SectionTitle>
        {loading ? (
          <SkeletonLoader />
        ) : (
          news.map((item) => (
            <div ref={(el) => (refs.current.main[item.id] = el)} key={item.id}>
              <NewsItem
                {...item}
                isExpanded={item.id === expandedNewsId}
                onExpand={onExpand}
              />
            </div>
          ))
        )}
      </NewsSection>
      <PaginationContainer>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </MainContentContainer>
  );
};

export default MainContent;
