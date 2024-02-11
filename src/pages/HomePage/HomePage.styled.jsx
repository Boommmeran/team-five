import styled from 'styled-components';

export const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  
`;

export const SidebarWrapper = styled.aside`
  @media (max-width: 1439px) {
    display: none;
  }
  @media (min-width: 1440px) {
    display: block;
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
