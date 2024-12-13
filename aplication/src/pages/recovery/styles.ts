import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const InputGroup = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 20px;
`;

export const RecoverText = styled.span`
  color: #007bff;
  cursor: pointer;
  margin-top: 10px;
`;

export const InfoText = styled.p`
  margin-top: 10px;
  color: #6c757d;
`;

export const BannerImage = styled.img.attrs(props => ({

}))`
  width: 150px;
  height: auto;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const TitleHighLight = styled.span`
  color: #ff4500;
`;

export const TextContent = styled.p`
  color: #6c757d;
  text-align: center;
  margin-bottom: 20px;
`;
