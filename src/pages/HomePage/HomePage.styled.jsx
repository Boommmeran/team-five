import styled from 'styled-components';

export const Main = styled.main`
  @media (min-width: 1180px) {
    display: grid;
    grid-template-columns: 260px 1fr;
    grid-template-rows: 68px 1fr;
  }
`;

export const SidebarWrapper = styled.aside`
  @media (max-width: 1179px) {
    display: none;
  }
  @media (min-width: 1180px) {
    display: block;
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
