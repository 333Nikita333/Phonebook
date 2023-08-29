import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: -1px;
  padding: 10px 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: calc(var(--index) * 2);
  background: rgba(24, 20, 20, 0.987);

  @media (min-width: 481px) {
    padding: 12px 25px;
    font-size: 26px;
    gap: 20px;
    flex-direction: row;
  }

  & a {
    color: #fff;
    transition: border-radius 0.2s ease, background 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;
    & svg {
      display: none;
      transition: display0.2s ease;
    }
  }

  & a.active {
    padding: 5px;
    color: rgb(0, 0, 0);
    border-radius: 15px;
    background: rgb(227, 227, 227);
    box-shadow: 0px 5px 10px rgba(0, 1, 0, 0.1);
  }

  & a.active svg {
    display: block;
  }
`;
