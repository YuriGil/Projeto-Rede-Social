import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: #e5d5e8;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: solid 1px #ccc;
  z-index: 1000;

  .menu-button {
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: #202124;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: #555;
    }

    svg{
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.5rem;

    @media (min-width: 768px){
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    margin-left:0;
        
     }
    }
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logout-button {
   background-color: #41354e;
    color: #fff0ff;
    padding: 0.6rem 2rem;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.2s;
    margin: 1rem;

    &:hover {
      background-color: #cbbcd2;
      color: #41354e;
    }

     @media (min-width: 768px){
        font-size: 20px;
        
     }
  }
`;


export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  margin: 1rem;
`;

export const MenuContent = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 0;
  width: 50%;
  background-color: #e5d5e8;
  border-top: solid 1px #ccc;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;

  @media (min-width: 768px){
    width:25%
  }
  ul {
    list-style: none;
    padding: 10px 20px;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    li {
      margin: 5px 0;
      font-size: 14px;
      font-family: "Open Sans", sans-serif;
      color: #202124;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  span {
    display: block;
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
    color: #555;
  }
`;


export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const UserPicture = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 2px solid #000;
`
export const InputWrapper = styled.div`
  width:50%;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem;
  background-color: #fff;
  
  svg {
    margin-right: 0.5rem;
    color: #666;
    
    }
    
    
    input {
    width:100%;
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: "Monospace, Courier New";
    background: none;
    padding-left: 0;
    height:2rem;
  }
`;
export const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;
export const Title = styled.h2`

display:none;

  @media (min-width: 768px){
  font-family: 'Monospace, Courier New';
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  align-self: center;
  display: inline-block;
  }
`;

export const TitleHighLight = styled.span`
  color: #41354e;
`;
