import styled from "styled-components";

export const Box = styled.div`
  padding: 0 0;
  background: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  
  @media (max-width: 1000px) {
    padding:0 0;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  // margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  // margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 15px;
  color: #fff;
  // margin-bottom: 40px;
  font-weight: bold;
  padding : 0;
  margin : 0;
`;

export const SubHeading = styled.p`
  font-size : 12px;
  color : white;
  // font-weight : bold;
  margin:0;
  padding : 0;
`;


export const SocialMedia = styled.div`
  display : flex;
  flex-direction : row;
  justify-content: space-around;
  background-color: gray;
`;