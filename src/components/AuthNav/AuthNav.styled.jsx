import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: 480px) {
    gap: 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    gap: 25px;
  }
`;
export const AuthLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`;
