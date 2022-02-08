import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background: #422ed4;
  display: flex;

  @media screen and (min-width: 370px) {
    padding: 0px 15px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0px 160px;
  }
`;

export const Logo = styled.img`
  width: 43px;
  padding: 8px 0px;
`;
export const LogoText = styled.p`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  padding: 20px 0px 20px 10px;
  color: #ffffff;
`;
