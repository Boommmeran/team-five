import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  @media screen and (max-width: 1439px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    /* padding: 14px; */
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
    grid-column: 1 / 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
`;

export const Main = styled.main`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  padding: 10px 20px;
  min-height: 812px;
  background-color: var(--secondaryBgColor);
  background-image: ${({ $isBackground, $backgroundImg }) =>
    $isBackground ? `url(${$backgroundImg}_375x812.webp)` : 'none'};

  background-repeat: no-repeat;
  max-width: 375px;
  height: auto;
  background-position: center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${({ $isBackground, $backgroundImg }) =>
      $isBackground ? `url(${$backgroundImg}_750x1624.webp)` : 'none'};
  }

  @media (min-width: 768px) {
    background-image: ${({ $isBackground, $backgroundImg }) =>
      $isBackground ? `url(${$backgroundImg}_768x956.webp)` : 'none'};
    max-width: 768px;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${({ $isBackground, $backgroundImg }) =>
      $isBackground ? `url(${$backgroundImg}_1536x1912.webp)` : 'none'};
  }

  @media (min-width: 1440px) {
    background-image: ${({ $isBackground, $backgroundImg }) =>
      $isBackground ? `url(${$backgroundImg}_1180x770.webp)` : 'none'};

    max-width: 1180px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${({ $isBackground, $backgroundImg }) =>
      $isBackground ? `url(${$backgroundImg}_2360x1540.webp)` : 'none'};
  }
`;

