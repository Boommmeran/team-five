import styled from 'styled-components';

export const Main = styled.main`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  @media (min-width: 1180px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;

export const SidebarWrapper = styled.aside`
  @media screen and (max-width: 1179px) {
    display: none;
  }

  @media screen and (min-width: 1180px) {
    padding: 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    grid-column: 1 / 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;
