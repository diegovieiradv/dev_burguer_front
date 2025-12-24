import styled from "styled-components";
import BackgroundImage from "../../assets/Banner.jpg";
import BackgroundImage2 from "../../assets/backgroundLogin2.png";


export const Banner = styled.div`
  background-image: url('${BackgroundImage}');
  background-size: cover;
  background-position: center;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  h1 {
    font-family: 'Road Rage', cursive;
    font-size: 5rem;
    color: #ffffff;
    text-shadow: 2px 2px 4px #000000;
    position: absolute;
    right: 100px;
    top: 80px;
  }
`;

export const Container = styled.section`
  background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${BackgroundImage2});
  height: 500px;
 
`;

export const Content = styled.div``