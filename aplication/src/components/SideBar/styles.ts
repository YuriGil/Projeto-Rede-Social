import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 20%;
  background-color: #41354e;
  padding: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  div {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    margin-right: 8px;
  }

  span {
    color: #fff;
    font-size: 14px;
  }
`;

export const MenuItem = styled.div`
  margin: 8px 0;
  color: #fff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #b2a3bc;
  }
`;
