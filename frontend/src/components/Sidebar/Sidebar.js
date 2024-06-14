import React, { useEffect } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  background-color: #212121;
  color: white;
  width: 350px;
  padding: 0;
  position: sticky;
  height: calc(100vh - 70px);
  overflow-y: auto;
`;

const NewsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const NewsItemContainer = styled.div`
  cursor: pointer;
  border-radius: 0;
  background-color: ${({ $isActive }) =>
    $isActive ? "#ff5e62" : "transparent"};

  &:hover {
    background-color: #ff5e62;
  }

  &:nth-child(odd) {
    background-color: ${({ $isActive }) => ($isActive ? "#ff5e62" : "#333")};
  }

  &:nth-child(even) {
    background-color: ${({ $isActive }) => ($isActive ? "#ff5e62" : "#2b2b2b")};
  }
`;

const NewsTitle = styled.div`
  color: white;
  font-size: 16px;
  padding: 10px;
`;

const Sidebar = ({ news, onExpand, expandedNewsId, refs }) => {
  useEffect(() => {
    if (expandedNewsId) {
      const ref = refs.current.sidebar[expandedNewsId];
      if (ref) {
        ref.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [expandedNewsId, refs]);

  return (
    <SidebarContainer>
      <NewsList>
        {news.map((item) => (
          <NewsItemContainer
            ref={(el) => (refs.current.sidebar[item.id] = el)}
            key={item.id}
            $isActive={item.id === expandedNewsId}
            onClick={() => onExpand(item.id)}
          >
            <NewsTitle>{item.title}</NewsTitle>
          </NewsItemContainer>
        ))}
      </NewsList>
    </SidebarContainer>
  );
};

export default Sidebar;
