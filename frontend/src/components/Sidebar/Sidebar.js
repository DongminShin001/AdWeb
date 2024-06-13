import React, { useEffect } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  background-color: #212121;
  color: white;
  width: 250px;
  padding: 0; /* Remove padding to remove gaps */
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
  cursor: pointer;
  border-radius: 0; /* Remove border radius to remove gaps */
  background-color: ${({ $isActive }) =>
    $isActive ? "#ff5e62" : "transparent"}; /* New highlight color */

  &:hover {
    background-color: #ff5e62; /* Highlight color on hover */
  }

  &:nth-child(odd) {
    background-color: ${({ $isActive }) =>
      $isActive ? "#ff5e62" : "#333"}; /* Dark grey for odd items */
  }

  &:nth-child(even) {
    background-color: ${({ $isActive }) =>
      $isActive ? "#ff5e62" : "#2b2b2b"}; /* Light grey for even items */
  }
`;

const NewsTitle = styled.div`
  color: white;
  font-size: 16px;
  padding: 10px; /* Adjust this value to change the padding inside the item */
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
