import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media (max-width: 480px) {
    gap: 8px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 10px;
  }
`;

export const UserName = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;

  font-weight: 500;
  font-style: italic;
  color: #fff;
`;

export const Button = styled.button`
  display: flex;
  align-items: end;
  gap: 5px;
  padding: 5px;

  font-size: 20px;

  & svg {
    stroke-width: 1px;
    color: red;
  }
`;

export const Avatar = styled.img`
  display: block;
  border-radius: 50%;
`;
