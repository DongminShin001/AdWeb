import React, { useEffect } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  background-color: #212121;
  color: white;
  width: 250px;
  padding: 20px;
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ $isActive }) => ($isActive ? "#444" : "transparent")};
  padding: 5px;
  border-radius: 3px;
  &:hover {
    background-color: #444;
  }
`;

const Sidebar = ({
  news,
  onExpand,
  expandedNewsId,
  sidebarRef,
  sidebarRefs,
}) => {
  useEffect(() => {
    const index = news.findIndex((item) => item.id === expandedNewsId);
    if (index !== -1 && sidebarRef.current) {
      if (sidebarRefs.current[index]) {
        sidebarRefs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [expandedNewsId, news, sidebarRef, sidebarRefs]);

  return (
    <SidebarContainer ref={sidebarRef}>
      <h2>이슈 캘린더</h2>
      <NewsList>
        {news.map((item, index) => (
          <NewsItem
            ref={(el) => (sidebarRefs.current[index] = el)}
            key={item.id}
            $isActive={item.id === expandedNewsId}
            onClick={() => onExpand(item.id)}
          >
            {item.title}
          </NewsItem>
        ))}
      </NewsList>
    </SidebarContainer>
  );
};

export default Sidebar;
