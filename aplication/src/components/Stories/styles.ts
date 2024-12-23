import styled from "styled-components";

export const StoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 8px;
  border-radius: 8px;
  overflow-x: auto;
`;

export const StoryBox = styled.div`
  width: 100px;
  height: 150px;
  background-color: #41354e;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 8px;
  margin-right: 8px;

  &:hover {
    background-color: #b2a3bc;
  }
`;
