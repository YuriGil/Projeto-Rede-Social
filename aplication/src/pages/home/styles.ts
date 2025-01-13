import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  font-family: 'Monospace, Courier New';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
 

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const TitleHighLight = styled.span`
  color: #41354e;
  margin-bottom:0;
`;

export const TextContent = styled.p`
  width: 100%;
  font-family: 'Monospace, Courier New';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-top: 20px;
  
  color: #000;  
  text-align:center;

  @media (min-width: 768px) {
    font-size: 33px;
    margin-bottom: 16px;
    line-height: 28px;
  }
`;

export const BannerImage = styled.div<{ img: string }>`
  position: absolute;
  bottom: 11%;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
  width: 40rem;
  height: 40rem;
  opacity: 0.05;
  z-index:-1;

  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    width: 51rem;
    height: 49rem;
    bottom: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width:90%;
  padding: 1rem 0 1rem 0;
  margin: 1rem;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: 30%;
    padding: 2rem;
    margin: auto;
    margin-left: 10rem;
  }
`;

export const ButtonGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 100%;
  margin-top:2.5rem;

  hr {
    background-color: #41354e;
    width: 100%;
    height: 1px;
    decoration:none;
    opacity:0.25;
  }
  Button{
    width:75%;
    height:3rem;
    font-size:
  }
  Button:hover{
    background-color:#b2a3bc;
  }
`;

export const LoginSocial = styled.span`
    width: 75%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 20px;
    border-radius: 35px;
    background-color:#fff0ff ;
    color: #41354e;
    cursor: pointer;


    &:hover{
    background-color:#b2a3bc;
    color:#fff0ff;
  }

.material-symbols-outlined {
  margin-right:1rem;
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
`
export const HeadContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-bottom:1rem;
  @media (max-width: 768px) {
    
  }
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin-right: auto; /* Garante que a logo fique alinhada à esquerda */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.25);
  }

  @media (min-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const Title = styled.h2`
  font-family: 'Monospace, Courier New';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 0;
  text-align: left;
  line-height: 1.2;
  color: #000;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Divider = styled.div`
  background-color: #41354e;
  opacity: 0.25;
  width: 100%;
  height: 1px;
  margin: 1rem 0;
  align-self: stretch; 
`;

