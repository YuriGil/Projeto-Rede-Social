import styled from "styled-components";

export const PostCardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;

  &:hover {
    transform: scale(1.01);
    transition: transform 0.2s ease-in-out;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  .avatar {
    width: 40px;
    height: 40px;
    background-color: #41354e;
    border-radius: 50%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin-right: 8px;
  }

  span {
    font-weight: bold;
    color: #41354e;
  }

  small {
    color: #888;
  }
`;

export const Content = styled.div`
  p {
    margin: 0;
    color: #666;
  }
`;

