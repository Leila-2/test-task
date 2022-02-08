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

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
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

  transition-duration: 500ms;

  &:hover {
    background-color: #422ed4;
    color: #fff;
  }
  @media screen and (min-width: 280px) {
    &:not(:last-child) {
      margin: 0px 0px 20px 0px;
    }
  }
  @media screen and (min-width: 600px) {
    &:not(:last-child) {
      margin: 0px 20px 20px 0px;
    }
  }

  @media screen and (min-width: 1200px) {
    &:nth-child(6n) {
      margin-right: 0;
    }
    &:nth-last-child(-n + 4) {
      margin-bottom: 0;
    }
    &:not(:last-child) {
      margin: 0px 20px 20px 0px;
    }
  }
`;
export const Container = styled.div`
  max-width: 1280px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 900px) {
    padding: 0px 20px;
  }
`;
