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

const NewsItemContainer = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ $isActive }) => ($isActive ? "#444" : "transparent")};
  padding: 5px;
  border-radius: 3px;
  &:hover {
    background-color: #444;
  }
`;

const Sidebar = ({ news, onExpand, expandedNewsId, refs }) => {
  useEffect(() => {
    if (expandedNewsId) {
      const ref = refs.current.sidebar[expandedNewsId];
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
    <SidebarContainer>
      <h2>이슈 캘린더</h2>
      <NewsList>
        {news.map((item) => (
          <NewsItemContainer
            ref={(el) => (refs.current.sidebar[item.id] = el)}
            key={item.id}
            $isActive={item.id === expandedNewsId}
            onClick={() => onExpand(item.id)}
          >
            {item.title}
          </NewsItemContainer>
        ))}
      </NewsList>
    </SidebarContainer>
  );
};

export default Sidebar;
