import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 800;
  font-size: 50px;
  line-height: 59px;
  margin-top: 60px;
`;

export const CategoriesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
`;

export const Category = styled.li`
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;

  width: 170px;
  height: 57px;

  background: #fff;
  box-shadow: 0px 100px 80px rgba(80, 76, 103, 0.07),
    0px 0px 10.0172px rgba(80, 76, 103, 0.035);
  border-radius: 18px;

  cursor: pointer;
  padding: 19px 16px;

  &:not(:last-child) {
    margin: 0px 20px 20px 0px;
  }
  &:nth-child(6n) {
    margin-right: 0;
  }
  &:nth-last-child(-n + 4) {
    margin-bottom: 0;
  }
  transition-duration: 500ms;

  &:hover {
    background-color: #422ed4;
    color: #fff;
  }
`;
