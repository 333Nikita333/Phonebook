import { Field, Form } from 'formik';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  padding: 10px;
`;

export const FormBox = styled(Form)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  
  font-size: calc(var(--index) * 2);
  background: #e3e3e3;
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;
  animation: ${fadeIn} 0.5s ease;
`;

export const Title = styled.h2`
  display: block;

  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 30px;
  color: #000;
  
  @media (min-width: 481px) {
    font-size: 30px;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  
  @media (min-width: 481px) {
    font-size: 1.2rem;
  }
  
`;

export const Text = styled.span`
  display: flex;
  gap: 5px;
  align-items: end;
  justify-content: center;
  margin-bottom: 10px;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 10px;
  
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;
  
  &::placeholder {
    font-size: 15px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const ErrorMessageText = styled.p`
  text-align: center;
  margin-top: 10px;
  
  color: red;
  
  @media (min-width: 481px) {
    font-size: 17px;
  }
`;

export const SubmitButton = styled.button`
  height: calc(var(--index) * 4);
  cursor: pointer;
  
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: 2px solid #000;
  background-color: transparent;
  border-radius: 5px;
  transition: 0.5s;

  @media (min-width: 481px) {
    font-size: 20px;
    width: 50%;
    height: 45px;
  }
  
  &:hover {
    background-color: rgb(0, 0, 0);
    color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  }

  &:focus {
    outline: none;
  }
`;