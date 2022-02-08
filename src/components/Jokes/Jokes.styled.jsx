import styled from "styled-components";

export const Chuck = styled.span`
  &:before {
    content: " ";
    height: 250px;
    background-image: url(${(props) => props.image});
    display: block;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top 0 left 85%;
  }
`;
export const Joke = styled.p`
  position: relative;
  top: -105px;

  width: 1120px;
  min-height: 160px;
  padding: 24px;

  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5em;

  background: #422ed4;
  box-shadow: 0px 100px 80px rgba(80, 76, 103, 0.07),
    0px 0px 10.0172px rgba(80, 76, 103, 0.035);
  border-radius: 25px;
  margin: 0 auto;
`;
