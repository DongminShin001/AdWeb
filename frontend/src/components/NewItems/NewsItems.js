import React from "react";
import styled from "styled-components";

const NewsItemContainer = styled.div`
  background-color: #282828;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: max-height 0.3s ease-out, padding 0.3s ease-out;
  max-height: ${({ isExpanded }) => (isExpanded ? "1000px" : "100px")};
  overflow: hidden;
`;

const NewsTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #ff5e62;
`;

const NewsDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #bbbbbb;
  margin: 10px 0;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: #ff5e62;
  border-radius: 3px;
  padding: 3px 5px;
`;

const NewsContent = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const NewsImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
`;

const NewsItem = ({
  id,
  title,
  date,
  source,
  tags,
  content,
  image,
  isExpanded,
  onExpand,
}) => {
  return (
    <NewsItemContainer onClick={() => onExpand(id)} isExpanded={isExpanded}>
      <NewsTitle>{title}</NewsTitle>
      <NewsDetails>
        <div>{date}</div>
        <div>{source}</div>
      </NewsDetails>
      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      {isExpanded && (
        <>
          <NewsContent>{content}</NewsContent>
          <NewsImage src={image} alt={title} />
        </>
      )}
    </NewsItemContainer>
  );
};

export default NewsItem;
