import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
    gap: 5px;
  }
`;

export const UserName = styled.p`
  font-weight: 500;
  font-style: italic;
  color: #fff;

  @media (max-width: 768px) {
    font-size: calc(var(--index) * 1.6);
  }
  @media (min-width: 481px) {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: end;
  gap: 5px;

  @media (min-width: 481px) {
    padding: 5px;
  }

  & svg {
    width: calc(var(--index) * 2);
    height: calc(var(--index) * 2);
    stroke-width: 1px;
    color: red;

    @media (min-width: 769px) {
      width: 25px;
      height: 25px;
    }
  }
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;

  @media (max-width: 560px) {
    display: none;
  }
`;
