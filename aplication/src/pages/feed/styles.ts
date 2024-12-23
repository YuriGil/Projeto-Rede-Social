import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 85vh;
  margin: 0 auto;
  font-family: 'Monospace, Courier New';
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const MainContent = styled.div`
  flex: 1;
  margin: 0 1rem;
`;

export const SidebarRight = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const BannerImage = styled.div<{ img: string }>`
  position: absolute;
  bottom: 0;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 50rem;
  height: 50rem;
  opacity: 0.05;
  pointer-events: none;

  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Title = styled.h2`
  font-family: 'Monospace, Courier New';
  font-size: 32px;
  text-align: center;
  margin-bottom: 2rem;
  color: #41354e;
`;

export const TitleHighLight = styled.span`
  font-weight: bold;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ccc;
  margin: 1rem 0;
  opacity: 0.5;
`;
