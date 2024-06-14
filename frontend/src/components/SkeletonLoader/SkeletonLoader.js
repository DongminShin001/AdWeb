import React from "react";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SkeletonItem = styled.div`
  background-color: #333;
  height: 20px;
  width: ${({ width }) => width || "100%"};
  border-radius: 4px;
`;

const SkeletonLoader = () => (
  <SkeletonContainer>
    <SkeletonItem width="60%" />
    <SkeletonItem width="80%" />
    <SkeletonItem width="50%" />
    <SkeletonItem width="70%" />
    <SkeletonItem width="90%" />
    <SkeletonItem width="40%" />
  </SkeletonContainer>
);

export default SkeletonLoader;
