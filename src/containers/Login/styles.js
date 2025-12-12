import styled from "styled-components";
import BackgroundImage from "../../assets/backgroundLogin.jpg";
import BackgroundImage2 from "../../assets/backgroundLogin2.png";
import { ContainerButton } from "../../components/Button/styles.js";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const LeftContainer = styled.div`
  background-image: url('${BackgroundImage}');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`;

export const RightContainer = styled.div`
  background-color: #1d1d1dff;
  background-image: url('${BackgroundImage2}');
  height: 100%;
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p{
    font-family: 'Poppins', sans-serif;
    color: #ffffff;
    font-size: 18px;
    margin-top: 1rem;
    font-weight: 500;
    text-align: center;
    span {
      color: #ffa600ff;
      cursor: pointer;
    }
    a{
text-decoration: underline
    }
  }`;

export const Title = styled.h2`
font-family: 'Road Rage', cursive;
font-size: 4rem;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 2rem;
  text-align: center;
  span {
    color: #ffa600ff;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
`;

export const InputContainer = styled.div`
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;

  input {
    width: 100%;
    border: none;
    height: 40px;
    background-color: #383838ff;
    padding: 0 12px;
    border-radius: 8px;
  }
label {
  font-size: 18px;
  font-weight: 500;
  color: #ffffff; }  
`;

